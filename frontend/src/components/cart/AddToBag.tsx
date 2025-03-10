import { ChevronDown, IterationCcw } from 'lucide-react';
import { LiaRupeeSignSolid } from "react-icons/lia";

import Nav from '../Nav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../store/addToCart/thunk/addToCartThunk';
import { AppDispatch } from '../../store/store';
import { RootState } from '../../store/rootReducer';
import Button from '../../utils/button/Button';
import { VscLoading } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const AddToBag = () => {
  const { value, loading, error } = useSelector( (state: RootState ) => state.cartProducts )
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleDelete = () => {

  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token) navigate("/login")
    if(token){
        dispatch(fetchCartData(token)) 
    }
  },[dispatch])

  if(!value){return error?.message}
  if(loading){return <VscLoading />}
  return (
    <>
    <Nav/>
      <div className="grid grid-cols-12 gap-8 justify-center mt-24 mx-8">
        <div className="col-span-6 flex flex-col gap-16">
        
        {value?.products.map( items =>{
         return <>
          <div className="flex w-full justify-end gap-8">
            <div className="w-64 bg-red-200">
              <img 
                src={items.product.imageUrl[0]}
                alt="Gucci Signoria slingback pump"
                className="w-full h-full object-cover rounded"
                />
            </div>
            <div className="flex flex-col min-w-96 items-end">
              <h3 className="text-lg mb-2">{items.product.title}</h3>
              <p className="text-xl text-gray-600 mb-2">{items.product.name}</p>
              <p className="text-sm text-gray-600 mb-2">{items.product.brand}</p>
              <p className="text-sm text-gray-600 mb-4">Size: {items.product.size}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <p>QTY : {items.quantity}</p>|
                <p className="text-lg flex items-center justify-center"><LiaRupeeSignSolid/>{items.product.price}</p>
              </div>

              <p className={` ${items.product.stock?'text-green-700':'text-red-700'} mb-4`}>{items.product.stock ?` AVALABLE`:` OUT OF STOCK`}</p>
              
              <div className="flex gap-4 text-sm">
                <Button onClick={handleDelete} className="underline cursor-pointer">REMOVE</Button>
              </div>
            </div>
          </div>
                </>
          
        })}

        </div>

        {/* Order Summary */}
        <div className="border-l pl-8 col-span-4">
          <h2 className="text-lg font-medium mb-6">ORDER SUMMARY</h2>
          <p className="text-sm text-gray-600 mb-4">USCART408508454</p>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$1,150</p>
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
              <p>$ 1,150</p>
            </div>
          </div>

          <Button className="w-full bg-black active:scale-95 transition-all ease-in-out text-white py-3 mb-4">
            CHECKOUT
          </Button>

          <div className="text-center mb-4">OR</div>

          <Button className="w-full border border-gray-300 active:scale-95 transition-all ease-in-out py-3 mb-4 flex items-center justify-center gap-2">
            PAY WITH <img src="/api/placeholder/80/20" alt="PayPal" />
          </Button>

          <Button className="w-full border border-gray-300 active:scale-95 transition-all ease-in-out py-3 flex items-center justify-center gap-2">
            PAY WITH <img src="/api/placeholder/80/20" alt="Amazon" />
          </Button>
        </div>

      </div>
    </>
  );
};

export default AddToBag;