import { useNavigate } from "react-router-dom"

const AdminSidebarOption = ({Name,logo,navigates}:{Name:string,logo:React.ReactNode,navigates:string}) => {
  
  const navigate = useNavigate()

    return (
    <div onClick={()=>navigate(navigates)} className="h-16 outline w-full bg-gradient-to-r from-gray-500 via-gray-900 to-black text-white flex items-center justify-between px-4 ">
            <h1 className="text-xl">{Name}</h1>
            {logo}
        </div>
  )
}

export default AdminSidebarOption