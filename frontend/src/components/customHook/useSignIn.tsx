import { useNavigate } from "react-router-dom";
import { signinService } from "../../services/authService";

const useSignIn = () => {
  const navigate = useNavigate(); 

  const SignInUser = async (email: string, password: string) => {
    const res = await signinService(email, password);

    if (res?.token) {
      localStorage.setItem("token", res.token);
      navigate("/"); 
    } else {
      navigate("/login");
    }
    
    return res;
  };

  return { SignInUser };
};

export default useSignIn;
