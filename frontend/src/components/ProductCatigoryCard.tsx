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
        src: "https://i.pinimg.com/474x/7d/42/6e/7d426ef12e13eaca86168e0631afe83f.jpg",
        routeTo:"/mens"
    },
    women: {
        src: "https://i.pinimg.com/736x/e4/51/9a/e4519a278876324772515974182c97d5.jpg",
        routeTo:"/womens"
    },
    accessary: {
        src: "https://i.pinimg.com/474x/b6/60/f4/b660f45f52c5cdec69a3d7d3284365ef.jpg",
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