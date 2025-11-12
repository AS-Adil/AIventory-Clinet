import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../provider/AuthContext";
import Spinner from "../../components/Spinner";

const Register = () => {
  const {
    createUser,
    setUser,
    signUpWithGoogle,
    updateUser,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include upper & lower case letters and be 6+ characters"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registered successfully");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message || "Registration failed");
        setLoading(false);
      });
  };

  const handleSignUp = () => {
    signUpWithGoogle()
      .then(() => {
        toast.success("Logged in with Google");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="col-span-2 flex flex-col justify-center items-center min-h-screen">
     

      {loading && (
        <div>
          <Spinner />
        </div>
      )}

<h2 className="text-5xl font-bold text-base-content mt-11">
  Register for <span className="text-primary">AIventory</span>
</h2>


      <div className="bg-base-100 w-full px-6 pt-9 pb-6 shadow-xl rounded-xl mx-auto max-w-lg my-12 border border-base-300">

        <form onSubmit={handleRegister} className="space-y-4">
          <label
            htmlFor="name"
            className="block mb-1.5 ml-1 text-primary font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            id="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <label
            htmlFor="email"
            className="block mb-1.5 ml-1 text-primary font-semibold"
          >
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

          <label
            htmlFor="photo"
            className="block mb-1.5 ml-1 text-primary font-semibold"
          >
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            id="photo"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <label
            htmlFor="password"
            className="block mb-1.5 ml-1 text-primary font-semibold"
          >
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
              className="absolute right-3 top-2.5 cursor-pointer text-base-content"

            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-1.5 bg-secondary text-white py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-101 transition cursor-pointer"
          >
            Register
          </button>

          <p>
            Already have an account?
            <Link to="/login" className="text-primary underline ml-1">

              Login
            </Link>
          </p>
        </form>

        <div className="mt-6">
          <button
            onClick={handleSignUp}
            className="btn w-full py-6 rounded-xl text-lg  bg-white text-black border-[#e5e5e5]
            hover:scale-101 transition
            "
          >
            <svg
              className="w-6 h-6 inline mr-2"
              aria-label="Google logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
            </svg>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
