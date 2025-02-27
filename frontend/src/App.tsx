import Home from "./components/Home";
import {Routes,Route} from "react-router-dom"
import AddToBag from "./components/cart/AddToBag";
import ProductDetailView from "./components/product/ProductDetailView";
import Admin from "./routes/Admin";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Womensection from "./components/section/Womensection";
function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<AddToBag />} />
          <Route path="/womens" element={<Womensection />} />
          <Route path="/item/product/:productId" element={<ProductDetailView />} />
          <Route path="/admin/*" element={<Admin/>} />
        </Routes>
  );
}

export default App;
