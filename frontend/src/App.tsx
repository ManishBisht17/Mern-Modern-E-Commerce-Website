import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import {Routes,Route} from "react-router-dom"
import Womensection from "./components/Womensection";
import AddToBag from "./components/AddToBag";
function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<AddToBag />} />
          <Route path="/womens" element={<Womensection />} />
        </Routes>
  );
}

export default App;
