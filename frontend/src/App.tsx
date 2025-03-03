import React, { Suspense } from "react";
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom"
const AddToBag =  React.lazy(()=>import("./components/cart/AddToBag")) ;
const ProductDetailView = React.lazy(()=>import("./components/product/ProductDetailView")) 
const Admin  = React.lazy(()=>import("./routes/Admin"));
const Signup = React.lazy(()=>import("./components/auth/Signup"));
const Signin = React.lazy(()=>import("./components/auth/Signin"));
const Womensection = React.lazy(()=>import("./components/section/Womensection"));

function App() {

  return (
        <Routes>
          <Route path="/" element={<Suspense><Home /></Suspense> } />
          <Route path="/signup" element={<Suspense><Signup /></Suspense> } />
          <Route path="/signin" element={<Suspense><Signin /></Suspense> } />
          <Route path="/cart" element={<Suspense><AddToBag /></Suspense> } />
          <Route path="/womens" element={<Suspense><Womensection /></Suspense> } />
          <Route path="/item/product/:productId" element={<Suspense><ProductDetailView /></Suspense> } />
          <Route path="/admin/*" element={<Suspense><Admin/></Suspense> } />
        </Routes>
  );
}

export default App;
