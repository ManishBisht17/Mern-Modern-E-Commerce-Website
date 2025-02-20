import { CirclePlus, House, User } from "lucide-react"
import AdminSidebarOption from "./AdminSidebarOption"

const AdminNav = () => {
  return (
    <div className="h-full flex bg-zinc-200">
    <div className="h-full w-[20%] bg-black flex flex-col gap-4 pt-4"> 
        <AdminSidebarOption navigates ={"/admin/dashboard"} Name="Dashboard" logo={<House />}/>
        <AdminSidebarOption navigates ={"/admin/addItems"} Name="Add Product" logo={<CirclePlus />}/>
        <AdminSidebarOption navigates ={"/admin/account"} Name="Account" logo={<User />}/>
    </div>
    <div className="h-16 w-[80%] flex items-center justify-end border-b px-4 ">
        <button className="py-2 px-3 rounded-full bg-zinc-400 active:scale-95 text-white">Logout</button>
    </div>
    </div>
  )
}

export default AdminNav