import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="flex md:flex-row flex-col justify-between md:items-center py-5"
      onClick={toggleMenu}
    >
      <div className="text-4xl font-bold dark:text-white flex">
        Portfolio
        <button
          className="block md:hidden text-gray-500 dark:text-white ml-auto"
          onClick={toggleMenu}
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      <nav
        className={`text-xl md:text-lg font-semibold mt-2 md:mt-0 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-10 absolute md:relative top-16 md:top-0 right-0 md:right-auto  p-5 md:p-0 w-full md:w-auto z-10 `}
      >
        <ul
          className="flex flex-col items-center bg-cyan-950/75 md:bg-transparent rounded-xl py-8
           md:flex-row gap-10 mt-2 text-gray-500 cursor-pointer "
        >
          <li className="" onClick={toggleMenu}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "md:text-black text-white md:dark:text-white"
                    : "text-white md:text-gray-500 md:hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 md:dark:hover:text-white "
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="" onClick={toggleMenu}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white md:text-black md:dark:text-white"
                    : "text-white md:text-gray-500 hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 dark:hover:text-white"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li className="" onClick={toggleMenu}>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white md:text-black md:dark:text-white"
                    : "text-white md:text-gray-500 hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 dark:hover:text-white"
                }`
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="" onClick={toggleMenu}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white md:text-black md:dark:text-white"
                    : "text-white md:text-gray-500 hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 dark:hover:text-white"
                }`
              }
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
