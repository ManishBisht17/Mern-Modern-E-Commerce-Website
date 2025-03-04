import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav";
import ProductImgCard from "../../utils/Card/ProductImgCard";
import OptionImgCard from "../../utils/Card/OptionImgCard";
import SizeSelectorBox from "../../utils/SizeSelectorBox";
import { useEffect, useState } from "react";
import { RatingStar } from "../../constant/IconFile";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";


interface productType{
  _id:string;
  name:string;
  price:number;
  imageUrl:string[];
  brand:string;
  ratings:number|undefined;
  review:string;
  category:string;
}

const ProductDetailView = () => {
  const singleProductData = useSelector( (state:RootState) => state.productDetailView.selectedProduct)
  console.log(singleProductData)
  const { productId } = useParams();
  const [count, setCount] = useState<number>(1);
  const [data,setData] = useState<productType|null>(singleProductData)
  const navigate = useNavigate();
  //axios call with id to backend and get the data of that product

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAddToCart = async () => {
    const isLogin = localStorage.getItem("token");
    if (!isLogin) navigate("/signin");

    await axios
      .post(
        `http://localhost/5000/product/productCart/${productId}`,
        {
          quantity: count,
        },
        {
          headers: {
            isLogin,
          },
        }
      )
      .then((res) => {
        console.log(res.data.name);
      })
      .catch((err) => {
        console.log("error in add to cart productview");
      });
  };

  useEffect(()=>{
      setData(singleProductData)
  },[singleProductData])

  return (
    <>
      <Nav />
      <div className="grid grid-cols-12 py-6 mt-16">
        <div className="col-span-2 ">
          <div className="h-[100vh] md:sticky md:top-0 gap-8 flex lg:flex-col items-center pt-18">
            {data?.imageUrl.map((img: string) =>{
             return <OptionImgCard
               key={data._id} photo={img}
              />

            })}
          </div>
        </div>

        <div className="col-span-5 mt-[6vh]">
          {
            data?.imageUrl.map((img: string) =>{
              return <ProductImgCard
                photo={img}
              />

            })
          }
        </div>

        <div className="col-span-5 pr-4 ">
          <div className="h-[100vh] sticky top-0 pt-18">
            <h1 className="text-md font-light">{data?.category}</h1>
            <h1 className="text-4xl font-light">{data?.name}</h1>

            <div className="flex justify-between items-center">
              <div className="flex relative">
                  {Array.from({ length: 5 }, (_, i) => (
                    <RatingStar key={i} className={i < Math.floor(data?.ratings ?? 0)
                    ? "fill-yellow-400 text-yellow-400"
                    : i < (data?.ratings ?? 0)
                    ? "fill-yellow-200 text-yellow-200" // Half-star effect
                    : "fill-gray-300 text-gray-300"} />
                  ))}
              </div>

              <div className="text-4xl font-light flex gap-4 ">
                {data?.price}
                {/* <span className="line-through decoration-2 text-zinc-600">
                  $250
                </span> */}
              </div>
            </div>

            <div className="flex justify-between">
              <h1 className="text-lg font-light">Size</h1>
              <h4 className="text-md font-light">size chart</h4>
            </div>
            <div className="flex flex-col gap-8">
              <SizeSelectorBox />

              <div className="amount flex items-center border border-gray-400 rounded-md p-2 w-32 justify-between">
                <button
                  className="px-3 py-1 border text-lg rounded-md hover:bg-gray-400 disabled:opacity-50"
                  onClick={handleDecrement}
                  disabled={count === 0} // Disables button when count is 0
                >
                  −
                </button>
                <span className="text-lg font-bold">{count}</span>
                <button
                  className="px-3 py-1 border text-lg rounded-md hover:bg-gray-400"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>

              <div className="flex gap-8 w-full">
                <button
                  onClick={handleAddToCart}
                  className="py-4 bg-black w-full rounded text-white"
                >
                  Add to cart
                </button>
                <button className="py-4 bg-black w-full rounded text-white">
                  buy product
                </button>
                <button className="py-4 w-full bg-gray-300">
                  out of stock
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;
