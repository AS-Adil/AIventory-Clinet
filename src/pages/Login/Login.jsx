import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../provider/AuthContext";
import Spinner from '../../components/Spinner';




const Login = () => {
   const {user, setUser, signUpWithGoogle, logIn, loading, setLoading } =useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
   const location = useLocation()

   
   



  const handleLogin = (e) => {

    e.preventDefault()
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);




    logIn(email, password)
    .then(()=>{
      setLoading(false)
      toast.success('Logged in successfully')
      navigate(`${location.state ? location.state : "/"}`)
      
    })
    .catch(error=>{
      setLoading(false)
      toast.error(error.message)
    })




  };



    const handleSignUp = () => {
    signUpWithGoogle()
     .then(() => {
   
      toast.success("Logged in with Google");

      navigate(`${location.state ? location.state : "/"}`);
    });
  };




  return (
    <div
      className=" col-span-2 flex flex-col justify-center items-center min-h-screen "
    >
      <title>AIventory -Login</title>




{loading && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-50">
    <Spinner />
  </div>
)}




    

      <h2 className="text-5xl font-bold  text-secondary mb-4 -translate-y-13">
        Login to AIventory
      </h2>

      <div className="bg-[#F7F7F7] w-full px-6 pt-9  pb-6 shadow-xl rounded-xl mx-auto  max-w-lg -translate-y-6">
        <div className="flex justify-center items-center pb-5 pt-2">
          <img src="" className="w-10 pb-2" alt="" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <label htmlFor="email" className="block mb-1.5 ml-1 text-primary ">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <label htmlFor="password" className="block mb-1.5 ml-1 text-primary ">
            Password
          </label>
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    id="password"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10"
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
  >
    {showPassword ?<Eye size={20} /> :<EyeOff size={20} /> }
  </span>
</div>




          <button
            type="submit"
            className="w-full mt-1.5 bg-secondary text-white py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-101 transition cursor-pointer"
          >
            Login
          </button>


        </form>

        <p
        className="hover:text-blue-600 hover:underline"
        >Forget Password</p>

            <div className="mt-4">
          <button
            onClick={handleSignUp}
            className="btn w-full py-6 rounded-xl text-lg  bg-white text-black border-[#e5e5e5]
            hover:scale-101 transition
            "
          >
            <svg
              className="w-6 h-6"
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

        </div>

              <p className="text-center mt-3">
            Don't have an account ?
            <Link to={"/register"} className="text-blue-500 underline">
              {" "}
              Register{" "}
            </Link>{" "}
          </p>

      </div>
    </div>
  );
};

export default Login;
