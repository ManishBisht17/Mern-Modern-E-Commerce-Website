import Herosection from "./Herosection"
import Nav from "./Nav"
import ProductCard from "../components/product/ProductCatigoryCard"

const Home = () => {
  return (
    <div>
        <Nav />
        <Herosection/>
        <ProductCard />
    </div>
  )
}

export default Home