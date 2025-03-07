import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../components/admin/pages/DashBoard";
import Transaction from "../components/admin/pages/Transaction";
import Customer from "../components/admin/pages/Customer";
import Product from "../components/admin/pages/Product";
import { Loader } from "lucide-react";

const Admin = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Suspense>
  );
};

export default Admin;
