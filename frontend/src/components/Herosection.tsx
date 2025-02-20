import { useNavigate } from "react-router-dom"


const Herosection = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-full ">
        <div onClick={()=>navigate("/men")} className=" relative sm:[h-50%] md:h-[70%] lg:h-[90%] w-full">
            <img className="w-full h-full object-cover" 
            src="https://i.pinimg.com/736x/16/66/2b/16662b109bb6b0598bc95569648e41e7.jpg" alt="" />
            <div className="absolute text-white leading-10 bottom-10 w-full text-center">
                <h4 className="text-xl font-semibold">MEN</h4>
                <h1 className="text-4xl">Spring-Summer 2025</h1>
                <h5 className="underline">Discover the collection</h5>
            </div>
        </div>

    </div>
  )
}

export default Herosection