import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
const AdminDashBoard = React.lazy(()=>import("../components/admin/AdminDashBoard")) 

const Admin = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={ <Suspense> <AdminDashBoard /> </Suspense> } />
    </Routes>
  )
}

export default Admin