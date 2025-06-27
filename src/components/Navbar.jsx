// components/Navbar.jsx
import React from "react";
import { FaSeedling } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-scroll"; // ✅ Correct scroll Link

const Navbar = () => {
  const links = (
    <>
      <li className="text-gray-600 hover:text-primary font-semibold cursor-pointer">
        <Link to="how-it-works" smooth={true} duration={100}>
          How It Works
        </Link>
      </li>
      <li className="text-gray-600 hover:text-primary font-semibold cursor-pointer">
        <Link to="pricing" smooth={true} duration={100}>
          Pricing
        </Link>
      </li>
      <li className="text-gray-600 hover:text-primary font-semibold cursor-pointer">
        <Link to="faq" smooth={true} duration={100}>
          FAQ
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 px-4 ">
      <div className="navbar max-w-6xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiMiniBars3 className="text-base-200" size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-transparent backdrop-blur-lg z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <FaSeedling className="w-10 h-10" />
            <h2 className="text-2xl font-bold">AluWish</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="bg-primary text-base-100 font-semibold py-2 px-3 rounded-full cursor-pointer hover:bg-amber-950 transition-all duration-300">
            <a href="https://wa.me/message/VVVYSIQ6OO3JL1">Send Alu Now</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
