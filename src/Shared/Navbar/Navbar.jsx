import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/user.png";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then()
    .catch()
  }
  const links = (
    <div className="flex gap-5">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/carrer">Carrer</NavLink>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5">
            <img className="h-[50px] w-[50px]" src={profile} alt="" />
            {
              user ? 
              <button onClick={handleLogout} className="btn btn-neutral rounded-none px-10 text-[16px] text-white">
                Logout
              </button>
              :
              <Link to="/login">
              <button className="btn btn-neutral rounded-none px-10 text-[16px] text-white">
                Login
              </button>
              </Link>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
