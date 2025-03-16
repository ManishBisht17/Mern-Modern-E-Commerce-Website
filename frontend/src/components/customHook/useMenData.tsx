import axios from "axios";
import { useEffect, useState } from "react";
import { setProduct } from "../../store/productCardView/productCardSlice";
import { useDispatch } from "react-redux";

interface Product {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    type?: string;
    // Add more fields based on your API response
  }

const useMenData = () => {
    const dispatch = useDispatch()
    const [menData, setMenData] = useState<Product[]>([]);
    useEffect(()=>{
        axios
          .get(`http://localhost:5000/product/show-product`)
          .then((res) => {
            const filterMen = res.data.products.filter((item: {item: Product}) => item.type === 'male')
            setMenData(filterMen);
            dispatch(setProduct(filterMen));
          })
          .catch((err) => {
            console.log("something went wrong while getting the womens data" + err);
          });

    },[])
  return {menData}
}

export default useMenData