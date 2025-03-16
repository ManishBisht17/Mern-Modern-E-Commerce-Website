import { Link, useNavigate } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import UserProfileButton from "../utils/UserProfileButton";
import Button from "../utils/button/Button";

const Nav = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full h-16 top-0 left-0 right-0 fixed z-50 bg-white">
        <nav className="border-b border-gray-200">
          <div className="md:max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <Button
                  icon={<HiMenu size={20} />}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="hover:text-gray-600"
                />
              </div>

              {/* Desktop navigation links */}
              <div
                className={`hidden md:flex space-x-8 ${
                  isSearchOpen ? "hidden" : "flex"
                }`}
              >
                <h2
                  onClick={() => navigate('/womens')}
                  className="text-sm font-medium hover:text-gray-600 cursor-pointer"
                >
                  WOMEN
                </h2>

                <h2
                  onClick={() => navigate('/mens')}
                  className="text-sm font-medium hover:text-gray-600 cursor-pointer"
                >
                  MEN
                </h2>

                <h2
                  onClick={() => navigate('/accessery')}
                  className="text-sm font-medium hover:text-gray-600 cursor-pointer"
                >
                  ACCESSORIES
                </h2>
              </div>

              {/* Search input */}
              {isSearchOpen && (
                <div className="flex-1 flex items-center transition-all duration-300">
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full ml-2 outline-none bg-zinc-300 text-zinc-800 p-2 rounded"
                    autoFocus
                  />

                  <Button
                    icon={<IoMdClose size={20} />}
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:text-gray-600"
                  />
                </div>
              )}

              {/* Logo */}
              <div
                className={`flex-1 flex justify-center ${
                  isSearchOpen ? "hidden" : "flex"
                }`}
              >
                <Link to="/" className="text-xl font-serif">
                  500 . Co
                </Link>
              </div>

              {/* Icons section */}
              <div className="flex items-center gap-4 md:gap-6">
                <Button
                  icon={<IoIosSearch size={20} />}
                  className="hover:text-gray-600"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />

                <UserProfileButton />

                <Button
                  icon={<IoCartSharp size={20} />}
                  onClick={() => navigate("/cart")}
                  className="hover:text-gray-600 relative"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md transition-all duration-300 ease-in-out">
          <div className="flex flex-col px-4 py-2">
            <button
              onClick={() => handleNavigation('/womens')}
              className="py-3 text-left text-sm font-medium border-b border-gray-100"
            >
              WOMEN
            </button>
            <button
              onClick={() => handleNavigation('/mens')}
              className="py-3 text-left text-sm font-medium border-b border-gray-100"
            >
              MEN
            </button>
            <button
              onClick={() => handleNavigation('/accessery')}
              className="py-3 text-left text-sm font-medium"
            >
              ACCESSORIES
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;