import axios from "axios";
import ProductCard from "../../utils/Card/ProductCard";
import Nav from "../Nav";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectProduct, setProduct } from "../../store/productCardView/productCardSlice";


interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  // Add more fields based on your API response
}
const Womensection = () => {
  const dispatch  = useDispatch()
  const [womenData,setWomenData] = useState<Product[]>([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/product/show-product`)
      .then((res)=>{
        setWomenData(res.data.products)
        dispatch(setProduct(res.data.products))
      })
      .catch((err)=>{
        console.log('something went wrong while getting the womens data'+err)
      })
  },[])

  return (
    <>
      <Nav />
      <div>
        <div className="h-[90vh] w-full relative">
          <div className="absolute top-0 left-0 h-full w-full bg-zinc-900 opacity-60 "></div>
          <img
            className="h-full w-full object-cover "
            src="https://plus.unsplash.com/premium_photo-1661766694694-9d61abbb6ad1?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute text-white leading-10 bottom-10 w-full text-center">
            <h4 className="text-xl font-semibold">WOMEN</h4>
            <h1 className="text-4xl">Spring-Summer 2025</h1>
            <h5 className="underline">Discover the collection</h5>
          </div>
        </div>

        <div className="h-full w-full ">
          <h1 className="my-16 text-center text-4xl">EXPLORE</h1>
          <div className="w-[88vw] h-full mx-auto justify-center flex flex-wrap " >
            {
              womenData.map((item)=>{
                return <ProductCard onClick={()=>dispatch(selectProduct(item))} id={item._id}  title={item.name} category={item.category} img={item.imageUrl[0]} />
              })
            }
            
          </div>
        </div>

      </div>
    </>
  );
};

export default Womensection;
