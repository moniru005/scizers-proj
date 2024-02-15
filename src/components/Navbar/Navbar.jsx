import { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menus
  const navbar = (
    <>
      <div className="text-md flex flex-col lg:flex-row gap-2 lg:text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </div>
    </>
  );

  // Login Button
  const loginButton = (
    <>
      <Link to="login">
        <button
          className="middle none center rounded-lg bg-slate-800 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span>Login</span>
        </button>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-none lg:max-w-7xl mx-auto shadow-lg fixed z-50 bg-slate-900">
      {/* Start */}
      <div className="nav navbar-start">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          {/* <img className="w-12" src="" alt="" /> */}
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
            <span className=" text-xl font-medium uppercase">
              Scizers Technologies
            </span>
          </a>
        </div>
      </div>
      {/* Center */}
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navbar}
        </ul>
      </div> */}

      {/* End */}
      <div className="navbar-end pr-2 lg:pr-0">
      <ul className="menu menu-horizontal px-1 hidden lg:flex">
         {navbar}
        </ul>
        <span className="hidden lg:flex">{loginButton}</span>
      </div>

      {/*Dropdown Mobile Menu*/}
      <div className="dropdown">
        <div
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
        >
          {isOpen === true ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaAlignJustify className="text-lg text-white"></FaAlignJustify>
          )}
        </div>
        <ul
          tabIndex={0}
          className={`${
            isOpen ? "" : "hidden"
          } menu menu-sm dropdown-content mt-6 -ml-40 w-56 z-[1] p-2 shadow bg-base-100 rounded-box  `}
        >
          {navbar}
          <span className="ml-2 mt-2">{loginButton}</span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
