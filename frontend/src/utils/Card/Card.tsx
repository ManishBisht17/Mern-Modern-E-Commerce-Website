import { useNavigate } from "react-router-dom";

const Card = ({ src, category, navigates }: { src: string; category: string; navigates:string }) => {
  const navigate = useNavigate()
    return (
    <div onClick={()=>navigate(navigates)}>
      <div className="h-[72vh] w-sm overflow-hidden rounded bg-red-300">
        <img className="h-full w-full object-cover" src={src} alt="" />
      </div>
      <h1 className="text-center underline">{category}</h1>
    </div>
  );
};

export default Card;
