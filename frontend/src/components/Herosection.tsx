

const Herosection = () => {
  return (
    <div className="h-screen w-full ">
        <div className=" relative sm:[h-50%] md:h-[70%] lg:h-[90%] w-full">
            <img className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1739382122928-589c2221853c?w=2400&auto=format&fit=crop&q=95&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
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