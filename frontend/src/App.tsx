import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import {Routes,Route} from "react-router-dom"
function App() {

  return (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
  );
}

export default App;
