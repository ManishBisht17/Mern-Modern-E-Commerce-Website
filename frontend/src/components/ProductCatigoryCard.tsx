import Card from "../utils/Card"

type ProductImage = {
    src: string;
    routeTo: string;
}

type productType = {
    men: ProductImage;
    women: ProductImage;
    accessary: ProductImage; 
}

const productsCardImg: productType = {
    men: {
        src: "https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?w=3000&auto=format&fit=crop&q=95&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        routeTo:"/mens"
    },
    women: {
        src: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww",
        routeTo:"/womens"
    },
    accessary: {
        src: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3J5fGVufDB8fDB8fHww",
        routeTo:"/accessary"
    },
}
const ProductCard = () => {
  return (
    <div className="h-screen w-full">
        <h1 className='text-5xl text-semibold text-center mb-8'>Options</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
        {Object.entries(productsCardImg).map(([category, elem]: [string, ProductImage]) => {
    return <Card navigates ={elem.routeTo} src={elem.src} category={category} />
})}
        </div>
    </div>
  )
}

export default ProductCard