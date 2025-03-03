import { Link, useNavigate } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import WomenDropdown from "../utils/DropDown/WomenDropdown";
import MenDropdown from "../utils/DropDown/MenDropdown";
import AccessoriesDropDown from "../utils/DropDown/AccessoriesDropDown";
import UserProfileButton from "../utils/UserProfileButton";

const Nav = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <>
      <header className="w-full h-16 top-0 left-0 right-0 fixed z-50 bg-white ">
        <nav className="border-b border-gray-200">
          <div className=" md:max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div
                className={`hidden md:flex space-x-8 ${isSearchOpen ? "hidden" : "flex"}`}
              >
                <h2
                  className="text-sm font-medium hover:text-gray-600"
                >
                  <WomenDropdown/>
                </h2>

                <h2
                 className="text-sm font-medium hover:text-gray-600">
                  <MenDropdown/>
                </h2>
                
                <h2
                  className="text-sm font-medium hover:text-gray-600"
                >
                  <AccessoriesDropDown/>
                </h2>
              </div>

              {isSearchOpen && (
                <div className=" flex-1 flex items-center transition-all duration-300">
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full ml-2 outline-none bg-zinc-300 text-zinc-800 p-2 rounded"
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

              <div
                className={`flex-1 flex justify-center ${
                  isSearchOpen ? "hidden" : "flex"
                }`}
              >
                <Link to="/" className="text-xl font-serif">
                  500 . Co
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <button
                  className="hover:text-gray-600"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <IoIosSearch size={20} />
                </button>
                
                <UserProfileButton/>

                <button onClick={()=>navigate("/cart")} className="hover:text-gray-600 relative">
                  <IoCartSharp size={20} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
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
