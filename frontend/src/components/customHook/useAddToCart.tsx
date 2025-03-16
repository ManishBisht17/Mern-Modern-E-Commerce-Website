import axios from "axios";
import { BaseUrl } from "../../config";

const useAddToCart = () => {
  try{
    const CartData = async ( token:string, productId:string|undefined, count:number) => {
      await axios
          .post(
            `${BaseUrl}/product/addToCart/${productId}`,
            {
              quantity : count
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data.message);
          })
          .catch((err) => {
            console.log("error in add to cart productview"+ err);
          });
        }
        return {CartData}
      }catch(err){
        console.log(err)
      }
}

export default useAddToCart