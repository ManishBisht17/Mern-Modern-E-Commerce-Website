import axios from "axios";

const useAddToCart = () => {
    const CartData = async ( isLogin:string, productId:string|undefined) => {
        await axios
          .post(
            `http://localhost/5000/product/addToCart/${productId}`,
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