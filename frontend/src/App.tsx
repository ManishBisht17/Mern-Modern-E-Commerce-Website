import React, { Suspense } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Loader } from "lucide-react";
const AddToBag = React.lazy(() => import("./components/cart/AddToBag"));
const Signup = React.lazy(() => import("./components/auth/Signup"));
const Signin = React.lazy(() => import("./components/auth/Signin"));
const Admin = React.lazy(() => import("./routes/Admin"));
const ProductDetailView = React.lazy(
  () => import("./components/product/ProductDetailView")
);
const Womensection = React.lazy(
  () => import("./components/section/Womensection")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/cart" element={<AddToBag />} />
        <Route path="/womens" element={<Womensection />} />
        <Route
          path="/item/product/:productId"
          element={<ProductDetailView />}
        />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Suspense>
  );
}

export default App;
