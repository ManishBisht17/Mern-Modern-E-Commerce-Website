import { ChevronDown } from 'lucide-react';
import Nav from './Nav';

const AddToBag = () => {
  return (
    <>
    <Nav/>
      <div className="grid grid-cols-3 gap-8 mt-24 mx-8">
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium">YOUR SELECTIONS</h2>
            <button className="text-sm">Print</button>
          </div>

          <div className="flex gap-8">
            <div className="w-64">
              <img 
                src="/api/placeholder/256/256" 
                alt="Gucci Signoria slingback pump"
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1">
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
                <button className="underline">EDIT</button>
                <span>|</span>
                <button className="underline">REMOVE</button>
                <span>|</span>
                <button className="underline">SAVED ITEMS</button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-l pl-8">
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

          <button className="w-full bg-black text-white py-3 mb-4">
            CHECKOUT
          </button>

          <div className="text-center mb-4">OR</div>

          <button className="w-full border border-gray-300 py-3 mb-4 flex items-center justify-center gap-2">
            PAY WITH <img src="/api/placeholder/80/20" alt="PayPal" />
          </button>

          <button className="w-full border border-gray-300 py-3 flex items-center justify-center gap-2">
            PAY WITH <img src="/api/placeholder/80/20" alt="Amazon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToBag;