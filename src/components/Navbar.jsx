import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-5 flex items-center justify-between md:justify-start md:gap-6 lg:gap-40 px-5 md:px-10">
      <NavLink  className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white font-['Dancing_Script']">
        Shruti
      </NavLink>
      <div>
        <button
          className="block md:hidden text-gray-500 dark:text-white ml-auto"
          onClick={toggleMenu}
        >
          <FaBars className="text-2xl" />
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-6 lg:gap-10 absolute md:relative top-16 md:top-0 right-0 md:right-auto p-5 md:p-0 w-full md:w-auto z-10 md:z-auto`}
      >
        <ul
          className="flex flex-col items-center bg-cyan-950/75 md:bg-transparent rounded-xl py-8
           md:flex-row gap-4 md:gap-6 lg:gap-10 text-gray-500 cursor-pointer"
        >
          <li className="" onClick={toggleMenu}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "md:text-black text-white md:dark:text-white underline underline-offset-8"
                    : "text-white md:text-gray-500 md:hover:text-black dark:text-indigo-200 md:dark:hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out transform hover:scale-105"
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
                    ? "text-white md:text-black md:dark:text-white underline underline-offset-8"
                    : "text-white md:text-gray-500 hover:text-black transition-all duration-300 ease-in-out dark:text-indigo-200 dark:hover:text-white hover:underline hover:underline-offset-8 transform hover:scale-105"
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
                    ? "text-white md:text-black md:dark:text-white underline underline-offset-8"
                    : "text-white md:text-gray-500 hover:text-black transition-all duration-300 ease-in-out dark:text-indigo-200 dark:hover:text-white hover:underline hover:underline-offset-8 transform hover:scale-105"
                }`
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="" onClick={toggleMenu}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white md:text-black md:dark:text-white underline underline-offset-8"
                    : "text-white md:text-gray-500 hover:text-black transition-all duration-300 ease-in-out dark:text-indigo-200 dark:hover:text-white hover:underline hover:underline-offset-8 transform hover:scale-105"
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="" onClick={toggleMenu}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white md:text-black md:dark:text-white underline underline-offset-8"
                    : "text-white md:text-gray-500 hover:text-black transition-all duration-300 ease-in-out dark:text-indigo-200 dark:hover:text-white hover:underline hover:underline-offset-8 transform hover:scale-105"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <ThemeBtn/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;