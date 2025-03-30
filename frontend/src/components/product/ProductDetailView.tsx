import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav";
import ProductImgCard from "../../utils/Card/ProductImgCard";
import OptionImgCard from "../../utils/Card/OptionImgCard";
import SizeSelectorBox from "../../utils/SizeSelectorBox";
import { useEffect, useState } from "react";
import { RatingStar } from "../../constant/IconFile";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Button from "../../utils/button/Button";
import useAddToCart from "../customHook/useAddToCart";
import { motion, AnimatePresence } from "framer-motion";

interface productType {
  _id: string;
  name: string;
  price: number;
  imageUrl: string[];
  brand: string;
  ratings: number | undefined;
  review: string;
  category: string;
  stock: string;
}

const ProductDetailView = () => {
  const singleProductData = useSelector(
    (state: RootState) => state.productDetailView.selectedProduct
  );
  const { productId } = useParams();
  const [count, setCount] = useState<number>(1);
  const [data, setData] = useState<productType | null>(singleProductData);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const navigate = useNavigate();
  const { CartData } = useAddToCart();
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    if (token) {
      await CartData(token, productId, count);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  useEffect(() => {
    setData(singleProductData);
  }, [singleProductData]);

  useEffect(() => {
    if (!singleProductData && productId) {
      // Assuming this is the correct function to fetch product by ID
      // Added as a placeholder since it was in the original code but not defined
      // dispatch(fetchProductById(productId));
      //
    }
  }, [productId, singleProductData]);

  return (
    <>
      <Nav />
      <div className="px-4 sm:px-6 lg:px-8 mt-16 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Thumbnails - Mobile: horizontal scroll, Desktop: vertical sidebar */}
          <div className="order-2 md:order-1 md:col-span-2 overflow-x-auto md:overflow-visible">
            <div className="flex md:flex-col md:h-[80vh] md:sticky md:top-20 gap-4 pb-4 md:pb-0">
              {data?.imageUrl?.map((img: string, index: number) => (
                <div key={data._id} className="min-w-16 md:min-w-0">
                  <OptionImgCard
                    key={`${data._id}-${index}`}
                    photo={img}
                    isActive={index === activeImageIndex}
                    onClick={() => handleThumbnailClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main product image */}
          <div className="order-1 md:order-2 md:col-span-5">
            <AnimatePresence>
              {data?.imageUrl[activeImageIndex] && (
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeIn" }}
                >
                  <ProductImgCard photo={data.imageUrl[activeImageIndex]} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product details */}
          <div className="order-3 md:col-span-5 md:pr-4">
            <div className="md:h-[80vh] md:sticky md:top-20 md:pr-6 lg:pr-12">
              <h1 className="text-md font-light">{data?.category}</h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mt-2">
                {data?.name}
              </h1>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 gap-4 sm:gap-0">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <RatingStar
                      key={i}
                      className={
                        i < Math.floor(data?.ratings ?? 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : i < (data?.ratings ?? 0)
                          ? "fill-yellow-200 text-yellow-200"
                          : "fill-gray-300 text-gray-300"
                      }
                    />
                  ))}
                </div>

                <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                  rs{data?.price}
                </div>
              </div>

              <div className="flex justify-between pt-6 sm:pt-8">
                <h1 className="text-lg font-light">Size</h1>
                <h4 className="text-md font-light">size chart</h4>
              </div>

              <div className="flex flex-col gap-6 sm:gap-8">
                <SizeSelectorBox />

                <div className="amount flex items-center border border-gray-400 rounded-md p-2 w-32 justify-between">
                  <Button
                    className="px-3 py-1 border text-lg rounded-md hover:bg-gray-400 disabled:opacity-50"
                    onClick={handleDecrement}
                    disabled={count === 0}
                  >
                    −
                  </Button>
                  <span className="text-lg font-bold">{count}</span>
                  <Button
                    className="px-3 py-1 border text-lg rounded-md hover:bg-gray-400"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                  <Button
                    onClick={handleAddToCart}
                    className="py-3 md:py-4 active:scale-95 bg-black w-full rounded text-white"
                  >
                    Add to cart
                  </Button>
                  <Button className="py-3 md:py-4 active:scale-95 bg-black w-full rounded text-white">
                    buy product
                  </Button>
                  {!data && (
                    <Button className="py-3 md:py-4 w-full bg-gray-300">
                      out of stock
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;
