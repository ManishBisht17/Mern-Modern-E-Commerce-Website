import Card from "../../utils/Card/Card"

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
        src: "/male_model.png",
        routeTo:"/mens"
    },
    women: {
        src: "/women_model.png",
        routeTo:"/womens"
    },
    accessary: {
        src: "/second.png",
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