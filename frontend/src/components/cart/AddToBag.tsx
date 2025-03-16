import { ChevronDown } from 'lucide-react';
import { LiaRupeeSignSolid } from "react-icons/lia";
import Nav from '../Nav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../store/addToCart/thunk/addToCartThunk';
import { AppDispatch } from '../../store/store';
import { RootState } from '../../store/rootReducer';
import Button from '../../utils/button/Button';
import { VscLoading } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../config';
import { clearCartError } from '../../store/addToCart/slice/cartProductSlice';

const AddToBag = () => {
  const { value, loading, error } = useSelector((state: RootState) => state.cartProducts);
  const [isDeleting, setIsDeleting] = useState(false);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleDelete = async (productId: string) => {
    try {
      setIsDeleting(true);
      await axios.post(
        `${BaseUrl}/product/removeCart/${productId}`,
        {},
        { 
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      
      if (token) {
        dispatch(fetchCartData(token));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    
    dispatch(fetchCartData(token));
    return () => {
      dispatch(clearCartError());
    };
  }, [dispatch, token]);
  
  if (loading || isDeleting) {
    return (
      <>
        <Nav />
        <div className="flex justify-center items-center h-screen">
          <VscLoading className="animate-spin text-4xl" />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav />
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <p className="font-semibold text-xl mb-4">{error.message}</p>
            <Button 
              onClick={() => navigate("/")} 
              className="bg-black text-white py-2 px-4 rounded"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </>
    );
  }

if (!value?.products || value.products.length === 0) {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl mb-4">Your cart is empty</h2>
        <Button 
          onClick={() => navigate("/")} 
          className="bg-black text-white py-2 px-4 rounded"
        >
          Continue Shopping
        </Button>
      </div>
    </>
  );
}


  // Calculate totals
  const subtotal = value.products.reduce((total, item) => {
    return total + (Number(item.product.price) * item.quantity);
  }, 0);

  return (
    <> 
      <Nav />
      <div className="grid grid-cols-12 gap-8 justify-center mt-24 mx-8">
        <div className="col-span-6 flex flex-col gap-16">
          {value.products.map((item) => (
            <div key={item.product._id} className="flex w-full justify-end gap-8">
              <div className="w-64">
                <img 
                  src={item.product.imageUrl[0]}
                  alt={item.product.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col min-w-96 items-end">
                <h3 className="text-lg mb-2">{item.product.title}</h3>
                <p className="text-xl text-gray-600 mb-2">{item.product.name}</p>
                <p className="text-sm text-gray-600 mb-2">{item.product.brand}</p>
                <p className="text-sm text-gray-600 mb-4">Size: {item.product.size}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <p>QTY: {item.quantity}</p>|
                  <p className="text-lg flex items-center justify-center">
                    <LiaRupeeSignSolid />{item.product.price}
                  </p>
                </div>

                <p className={`${item.product.stock ? 'text-green-700' : 'text-red-700'} mb-4`}>
                  {item.product.stock ? 'AVAILABLE' : 'OUT OF STOCK'}
                </p>
                
                <div className="flex gap-4 text-sm">
                  <Button 
                    onClick={() => handleDelete(item.product._id)} 
                    className="underline cursor-pointer"
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'REMOVING...' : 'REMOVE'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border-l pl-8 col-span-4">
          <h2 className="text-lg font-medium mb-6">ORDER SUMMARY</h2>
          <p className="text-sm text-gray-600 mb-4">USCART408508454</p>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="flex items-center"><LiaRupeeSignSolid className="inline" />{subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <div className="flex items-center">
                <p className="text-gray-600">Free (Premium Express)</p>
                <ChevronDown size={16} />
              </div>
            </div>
            <div className="flex justify-between">
              <p>Estimated Tax</p>
              <Button className="underline">Calculate</Button>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <p>Estimated Total</p>
              <p className="flex items-center"><LiaRupeeSignSolid className="inline" />{subtotal}</p>
            </div>
          </div>

          <Button 
            className="w-full bg-black active:scale-95 transition-all ease-in-out text-white py-3 mb-4"
            disabled={value.products.length === 0}
          >
            CHECKOUT
          </Button>

          <div className="text-center mb-4">OR</div>

          <Button 
            className="w-full border border-gray-300 active:scale-95 transition-all ease-in-out py-3 mb-4 flex items-center justify-center gap-2"
            disabled={value.products.length === 0}
          >
            PAY WITH <img src="/api/placeholder/80/20" alt="PayPal" />
          </Button>

          <Button 
            className="w-full border border-gray-300 active:scale-95 transition-all ease-in-out py-3 flex items-center justify-center gap-2"
            disabled={value.products.length === 0}
          >
            PAY WITH <img src="/api/placeholder/80/20" alt="Amazon" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddToBag;