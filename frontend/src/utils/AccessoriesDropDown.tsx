import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const AccessoriesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-medium hover:text-gray-600 flex items-center gap-1"
      >
        ACCESSORIES <IoIosArrowDown size={14} />
      </button>

      <div
        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <ul className="py-2">
          <li>
            <Link
              to="/accessories/bag"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              BAG
            </Link>
          </li>
          <li>
            <Link
              to="/accessories/sunglass"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              SUNGLASS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccessoriesDropDown;
