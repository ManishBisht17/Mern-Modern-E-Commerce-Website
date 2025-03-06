import axios from "axios";

const useAddToCart = () => {
    const CartData = async (count:number, isLogin:string, productId:string|undefined) => {
        await axios
          .post(
            `http://localhost/5000/product/cart/${productId}`,
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
            console.log("error in add to cart productview"+ err);
          });
    }
  return {CartData}
}

export default useAddToCart