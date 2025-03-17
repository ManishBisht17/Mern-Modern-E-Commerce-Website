import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-20 sm:h-full w-full flex flex-col">
      <div
        onClick={() => navigate("/womens")}
        className="relative h-[70vh] sm:h-[20vh] md:h-[80vh] lg:h-[90vh] w-full cursor-pointer"
      >
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/16/66/2b/16662b109bb6b0598bc95569648e41e7.jpg"
          alt="Women's fashion"
        />
        <div className="absolute text-white leading-8 sm:leading-10 bottom-6 sm:bottom-8 md:bottom-10 w-full text-center px-4">
          <h4 className="text-lg sm:text-xl font-semibold">WOMEN</h4>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2">
            Spring-Summer 2025
          </h1>
          <h5 className="underline mt-2 sm:mt-3 hover:text-gray-200 transition-colors duration-300">
            Discover the collection
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Herosection;