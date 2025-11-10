import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { ChevronDown } from "lucide-react";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  // console.log(user?.photoURL);

  const location = useLocation();
// console.log('route is',location.pathname);


  const links = (
    <>
      <NavLink className="px-3 font-semibold" to={"/"}>
        Home
      </NavLink>
      <NavLink className="px-3 font-semibold" to={"/add-model"}>
        Add Model
      </NavLink>
      <NavLink className="px-3 font-semibold" to={"/all-models"}>
        All Models
      </NavLink>
    </>
  );



  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  

  return (
    // <div className="navbar bg-base-100 shadow-sm fixed top-0 w-full z-50">
    <div className="navbar bg-base-100 shadow-sm top-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="  hover:scale-103 text-primary transition  rounded-full text-2xl font-bold"
        >
          AIventory 
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-lg">{links}</ul>
      </div>




      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <img
                className="rounded-full w-9 h-9"
                src={user?.photoURL}
                alt=""
              />
            </div>

            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-[#F7F7F7] rounded-box z-1 w-[280px] p-2 shadow-sm "
            >

              <img
                className="mx-auto shadow rounded-full w-15 h-15"
                src={user?.photoURL}
                alt=""
              />

              <p className="text-xs text-center mt-1 font-thin text-secondary">{user?.email}</p>
              <h1 className="text-lg text-secondary font-semibold text-center ">
                {user?.displayName}
              </h1>

              <div className=" mx-auto mt-2">

                <Link
                 className={` shadow-md rounded-l-xl py-1.5 px-2  hover:scale-102 transition duration-150
                  ${location.pathname ==='/model-purchase' && 'bg-secondary text-white '}
                  
                  `}
                 
                 to={'/model-purchase'}>Model Purchase</Link>


                <Link className={` border-l-0 shadow-md rounded-r-xl px-3 py-1.5  hover:scale-102 transition duration-150 ${location.pathname ==='/my-models' && 'bg-secondary text-white '}  `} 
                to={'/my-models'}>My Models</Link>

              </div>

              <button
                onClick={handleLogout}
                className="bg-secondary mb-2 rounded-2xl cursor-pointer text-white font-semibold
                py-1.5 w-[80%] mt-4 mx-auto shadow
           hover:scale-102 transition duration-150
           "
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <div>
            <div className="">
              <Link
                to={"/login"}
                className="bg-[#202124] mx-2 px-5 py-1.5 rounded-2xl cursor-pointer text-white font-semibold "
              >
                Login
              </Link>

            </div>

          

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
