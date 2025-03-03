import { CgProductHunt, CgProfile } from "react-icons/cg";
import { FcCustomerSupport } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

interface Liprops{
  url: string;
  name: string;
  icon: React.ReactNode;
}


const AdminDashBoard = () => {
  const location = useLocation()
  const List:Liprops[] = [
    {name:"DashBoard",url:'/admin/dashboard',icon:<CgProfile/>},
    {name:"Product",url:'/admin/product',icon:<CgProductHunt/>},
    {name:"Customer",url:'/admin/customer',icon:<FcCustomerSupport/>},
    {name:"Transaction",url:'/admin/transaction',icon:<GrTransaction/>},
  ]
  return (
    <aside className="col-span-2 w-full pl-8 h-full bg-white">
        <h2>Logo</h2>
        <div className="flex flex-col gap-4 pt-8 ">
          <h5 className="text-zinc-500">DashBoard</h5>
            <ul className="">
              {List.map((list)=>(
                <li className={`text-lg flex gap-4 items-center p-2 ${location.pathname == list.url ? 'text-blue-600 font-semibold': "text-black"}`}>{list.icon}<Link to={list.url}>{list.name}</Link></li>
              ))}
            </ul>
        </div>
    </aside>
  )
}




export default AdminDashBoard