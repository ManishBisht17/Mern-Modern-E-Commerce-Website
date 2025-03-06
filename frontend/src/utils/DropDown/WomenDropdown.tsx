import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../button/Button";

const WomenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  
  const handleClick = () => {
      window.innerWidth <= 768 && setIsOpen(!isOpen)
      navigate("/womens")
    } 
  

  return (
    <div
      className="relative group"
      onMouseEnter={() => window.innerWidth > 768 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth > 768 && setIsOpen(false)}
    >
      
     
      <Button onClick={handleClick} className={"text-sm font-medium hover:text-gray-600 flex items-center gap-1"} icon={<IoIosArrowDown size={14} />}>
        WOMEN 
      </Button>


      <div
        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <ul className="py-2">
          <li>
            <Link to="/women/dresses" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Dresses
            </Link>
          </li>
          <li>
            <Link to="/women/tops" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Tops
            </Link>
          </li>
          <li>
            <Link to="/women/shoes" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/women/accessories" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Accessories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WomenDropdown;
