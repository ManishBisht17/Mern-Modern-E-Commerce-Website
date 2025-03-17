import Nav from "../Nav";
import { useDispatch } from "react-redux";
import useMenData from "../customHook/useMenData";
import ProductCard from "../product/ProductCatigoryCard";
import { selectProduct } from "../../store/productCardView/productCardSlice";


const Mensection = () => {
  const dispatch = useDispatch();
  const {menData} = useMenData()
  return (
    <>
      <Nav />
      <div>
        <div className="h-[90vh] w-full relative">
          {/* <div className="absolute top-0 left-0 h-full w-full bg-zinc-900 opacity-60 "></div> */}
          <img
            className="h-full w-full object-cover "
            src="/male2.jpg" 
/>
          <div className="absolute text-white leading-10 bottom-10 w-full text-center">
            <h4 className="text-xl font-semibold">Men's</h4>
            <h1 className="text-4xl">Spring-Summer 2025</h1>
            <h5 className="underline">Discover the collection</h5>
          </div>
        </div>

        <div className="h-full w-full ">
          <h1 className="my-16 text-center text-4xl">EXPLORE</h1>
          <div className="w-[88vw] h-full mx-auto justify-center flex flex-wrap ">
          {menData?.map((item) => {
              return (
                <ProductCard
                  onClick={() => dispatch( selectProduct(item) )}
                  id={item._id}
                  title={item.name}
                  category={item.category}
                  img={item.imageUrl[0]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mensection;
