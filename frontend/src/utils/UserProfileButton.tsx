import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div
      className="relative group"
      onMouseEnter={() => window.innerWidth > 768 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth > 768 && setIsOpen(false)}
    >
      <button
        onClick={()=>navigate("/profile")}
        className="text-sm font-medium hover:text-gray-600 flex items-center gap-1"
      >
         <FaUserLarge size={14} />
      </button>

      <div
        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <ul className="py-2">
          <li>
            <Link to="" className="block px-4 py-2 text-sm hover:bg-gray-100">
              profile
            </Link>
          </li>
          <li>
            <Link onClick={() => {
                    localStorage.removeItem("token");
                  }} 
                  to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};



export default UserProfileButton;
