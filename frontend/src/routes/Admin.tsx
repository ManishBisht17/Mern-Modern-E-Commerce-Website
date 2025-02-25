import { Route, Routes } from "react-router-dom"
import AdminDashBoard from "../components/admin/AdminDashBoard"

const Admin = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<AdminDashBoard />} />
    </Routes>
  )
}

export default Admin