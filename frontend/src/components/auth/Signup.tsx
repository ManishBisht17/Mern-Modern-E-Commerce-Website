import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/button/Button";
import useSignUp from "../customHook/useSignUp";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const {SignupData} = useSignUp()

  const handleClick = async () => {
    const res = await SignupData(name, email, password, phone)
    if(res?.message||res?.error){
      setMsg(res?.message) 
      setErr(res?.error)
    }
  };
  
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="relative flex flex-col rounded-xl bg-transparent">
        <h4 className="block text-xl font-medium text-slate-800">Sign Up</h4>
        <p className="text-slate-500 font-light">
          Nice to meet you! Enter your details to register.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Your Name
              </label>
              <input
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">Email</label>
              <input
                required
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
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your Password"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Phone Number
              </label>
              <input
                required
                type="number"
                onChange={(e) => setPhone(Number(e.target.value))}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your PhoneNumber"
              />
            </div>
          </div>
          {msg ? <p className="text-center text-red-700">*{msg}</p> : ""}
          {err ? <p className="text-center text-red-700">*{err}</p> : ""}
          <Button
            onClick={handleClick}
            className="active:scale-95 mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Sign Up
          </Button>
          <p className="flex justify-center mt-6 text-sm text-slate-600">
            Already, have an account?
            <Link
              to="/login"
              className="ml-1 text-sm font-semibold text-slate-700 underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
