import { ChevronDown } from 'lucide-react';
import Nav from './Nav';

const AddToBag = () => {
  return (
    <>
    <Nav/>
      <div className="grid grid-cols-12 gap-8 justify-center mt-24 mx-8">
        <div className="col-span-6">
          <div className="flex justify-end items-center mb-6">
            <button className="text-sm">Print</button>
          </div>

          <div className="flex w-full justify-end gap-8">
            <div className="w-64 bg-red-200">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=3600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Gucci Signoria slingback pump"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex flex-col min-w-96 items-end">
              <h3 className="text-lg mb-2">Gucci Signoria slingback pump</h3>
              <p className="text-sm text-gray-600 mb-2">Style# 783821 BNC80 3706</p>
              <p className="text-sm text-gray-600 mb-2">Variation: dark green patent leather</p>
              <p className="text-sm text-gray-600 mb-4">Size: 35 - 5 US</p>
              
              <div className="flex items-center gap-4 mb-4">
                <p>QTY:</p>
                <select className="border px-2 py-1">
                  <option>1</option>
                </select>
                <p className="text-lg">$ 1,150</p>
              </div>

              <p className="text-green-700 mb-4">AVAILABLE</p>
              
              <div className="flex gap-4 text-sm">
                <button className="underline cursor-pointer">EDIT</button>
                <span>|</span>
                <button className="underline cursor-pointer">REMOVE</button>
                <span>|</span>
                <button className="underline cursor-pointer">SAVED ITEMS</button>
              </div>
            </div>
          </div>
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
              <button className="underline">Calculate</button>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <p>Estimated Total</p>
              <p>$ 1,150</p>
            </div>
          </div>

          <button className="w-full bg-black active:scale-95 transition-all ease-in-out text-white py-3 mb-4">
            CHECKOUT
          </button>

          <div className="text-center mb-4">OR</div>

          <button className="w-full border border-gray-300 active:scale-95 transition-all ease-in-out py-3 mb-4 flex items-center justify-center gap-2">
            PAY WITH <img src="/api/placeholder/80/20" alt="PayPal" />
          </button>

          <button className="w-full border border-gray-300 active:scale-95 transition-all ease-in-out py-3 flex items-center justify-center gap-2">
            PAY WITH <img src="/api/placeholder/80/20" alt="Amazon" />
          </button>
        </div>

      </div>
    </>
  );
};

export default AddToBag;