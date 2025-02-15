import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import {Routes,Route} from "react-router-dom"
function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
  );
}

export default App;
