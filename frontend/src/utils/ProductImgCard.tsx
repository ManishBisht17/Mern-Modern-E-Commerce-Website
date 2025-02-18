
const ProductImgCard = ({photo}:{photo:string}) => {
  return (
    <div className="flex items-center justify-center h-[100vh] sticky top-0">
        <div className="card h-[80%] w-md  bg-amber-400">
            <img className="h-full w-full object-cover" src={photo} alt="" />
        </div>
    </div>
  )
}

export default ProductImgCard