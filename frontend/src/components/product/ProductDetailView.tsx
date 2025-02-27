import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav";
import ProductImgCard from "../../utils/ProductImgCard";
import OptionImgCard from "../../utils/OptionImgCard";
import SizeSelectorBox from "../../utils/SizeSelectorBox";
import { useState } from "react";
import { RatingStar } from "../../constant/IconFile";
import axios from "axios";

const ProductDetailView = () => {
  const { productId } = useParams();
  const [count, setCount] = useState<number>(1);
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
      
    await axios.post(
        `http://localhost/5000/product/productCart/${productId}`,
        {
          headers: {
            isLogin,
          },
        }
      )
      .then((res)=>{
        console.log(res.data.name)
      })
      .catch((err)=>{
        console.log("error in add to cart productview")
      })
   
  };

  return (
    <>
      <Nav />
      <div className="grid grid-cols-12 py-6 mt-16">
        <div className="col-span-2 ">
          <div className="h-[100vh] md:sticky md:top-0 gap-8 flex lg:flex-col items-center pt-18">
            <OptionImgCard
              photo={
                "https://images.unsplash.com/photo-1739001406836-2be6b5787269?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </div>

        <div className="col-span-5 mt-[6vh]">
          <ProductImgCard
            photo={
              "https://images.unsplash.com/photo-1739001406836-2be6b5787269?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>

        <div className="col-span-5 pr-4 ">
          <div className="h-[100vh] sticky top-0 pt-18">
            <h1 className="text-md font-light">sport look black</h1>
            <h1 className="text-4xl font-light">MAIN CLOTH NAME</h1>

            <div className="flex justify-between items-center">
              <div className="flex relative">
                <RatingStar className="fill-yellow-400 text-yellow-400" />
                <RatingStar className="fill-yellow-400 text-yellow-400" />
                <RatingStar className="fill-yellow-400 text-yellow-400" />
                <RatingStar className="fill-yellow-400 text-yellow-400" />
                <RatingStar className="text-yellow-400" />
              </div>

              <div className="text-4xl font-light flex gap-4 ">
                $199{" "}
                <span className="line-through decoration-2 text-zinc-600">
                  $250
                </span>
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
