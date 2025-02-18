import ProductCard from "../utils/ProductCard";
import Nav from "./Nav";

const Womensection = () => {

  return (
    <>
      <Nav />
      <div>
        <div className="h-[90vh] w-full relative">
          <div className="absolute top-0 left-0 h-full w-full bg-zinc-900 opacity-60 "></div>
          <img
            className="h-full w-full object-cover "
            src="https://plus.unsplash.com/premium_photo-1661766694694-9d61abbb6ad1?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute text-white leading-10 bottom-10 w-full text-center">
            <h4 className="text-xl font-semibold">WOMEN</h4>
            <h1 className="text-4xl">Spring-Summer 2025</h1>
            <h5 className="underline">Discover the collection</h5>
          </div>
        </div>

        <div className="h-full w-full ">
          <h1 className="my-16 text-center text-4xl">EXPLORE</h1>
          <div className="w-[80vw] h-full mx-auto flex flex-wrap " >
            
            <ProductCard id={1} gender={'womens'} title={"shorts for summer"} category={'short'} img={"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnRzfGVufDB8fDB8fHww"} />
           
          </div>
        </div>

      </div>
    </>
  );
};

export default Womensection;
