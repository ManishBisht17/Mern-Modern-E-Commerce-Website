import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/authService";

const useSignUp = () => {
    const navigate = useNavigate()
    const SignupData = async (name: string, email: string, password: string, phone?: number) => {
        const res =await signupService(name, email, password, phone)
        if (!res?.token) {
            navigate('/signup')
        } else {
            localStorage.setItem("token", res?.token);
            navigate("/");
        }
        return res
    }
    return { SignupData }
}

export default useSignUp