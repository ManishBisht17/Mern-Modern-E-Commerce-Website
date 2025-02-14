import { Link, useNavigate } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


const Nav = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate()
  return (
    <>
     <header className="w-full">
      {/* Main Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left Navigation - Hidden when search is open */}
            <div className={`flex space-x-8 ${isSearchOpen ? 'hidden' : 'flex'}`}>
              <Link to="#" className="text-sm font-medium hover:text-gray-600">WOMEN</Link>
              <a href="#" className="text-sm font-medium hover:text-gray-600">MEN</a>
              <Link to="#" className="text-sm font-medium hover:text-gray-600">KIDS</Link>
              <Link to="#" className="text-sm font-medium hover:text-gray-600">BRANDS</Link>
            </div>

            {/* Search Input - Shown when search is open */}
            {isSearchOpen && (
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full ml-2 outline-none"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:text-gray-600"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
            )}

            {/* Center Logo */}
            <div className={`flex-1 flex justify-center ${isSearchOpen ? 'hidden' : 'flex'}`}>
              <a href="/" className="text-xl font-serif">500 . Co</a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button 
                className="hover:text-gray-600"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <IoIosSearch size={20} />
              </button>
              <button className="hover:text-gray-600">
                <FaUserLarge size={20} />
              </button>
              <button className="hover:text-gray-600 relative">
                <IoCartSharp size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
              <button
              onClick={()=>{
                localStorage.removeItem("token")
                navigate("/signin")
              }}
               className="hover:text-zinc-100 hover:bg-zinc-600 transition-all duration-150 border p-1 rounded-full">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Nav;
