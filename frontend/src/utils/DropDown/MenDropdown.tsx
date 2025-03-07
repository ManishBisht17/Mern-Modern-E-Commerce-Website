import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../button/Button";

const MenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button icon={<IoIosArrowDown size={14} />} className="text-sm font-medium hover:text-gray-600 flex items-center gap-1" onClick={handleClick}>
        MEN
      </Button>

      <div
        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <ul className="py-2">
          <li>
            <Link to="/men/hoodies" className="block px-4 py-2 text-sm hover:bg-gray-100">
              HOODIES
            </Link>
          </li>
          <li>
            <Link to="/men/t-shirt" className="block px-4 py-2 text-sm hover:bg-gray-100">
              T-SHIRT
            </Link>
          </li>
          <li>
            <Link to="/men/shoes" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/men/accessories" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Accessories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenDropdown;
