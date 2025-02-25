import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../config";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleClick = () => {
      axios.post(`${BaseUrl}/user/login`, {
          email,
          password,
        })
        .then((res) => {
          if(!res.data.token){
            navigate("/signin")
          }else{
            localStorage.setItem("token",res.data?.token)
            navigate("/")
          }
          setEmail("")
          setPassword("")
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative flex flex-col rounded-xl bg-transparent">
        <h4 className="block text-xl font-medium text-slate-800">Sign In</h4>
        <p className="text-slate-500 font-light">Login in Here.</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Password"
              />
            </div>
          </div>

          <button
            onClick={handleClick}
            className="active:scale-95 mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Sign In
          </button>
          <p className="flex justify-center mt-6 text-sm text-slate-600">
            Don&apos;t have an account?
            <Link
              to="/signup"
              className="ml-1 text-sm font-semibold text-slate-700 underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
