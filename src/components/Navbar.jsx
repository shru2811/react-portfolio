import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
// Link is used i place of anchor tag because anchor tag causes page reload
function Navbar() {
  const [darkMode,setDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }
  return (
    <div className="flex justify-between align-center py-5 ">
      <div className="text-4xl font-bold dark:text-white">Portfolio</div>
      <div className="text-xl font-semibold">
        <ul className="flex justify-between gap-10 mt-2 text-gray-500 cursor-pointer">
          <li className="hover:text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-black dark:text-white":"text-gray-500 hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 dark:hover:text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-black">
          <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-black dark:text-white":"text-gray-500 hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 dark:hover:text-white"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-black">
          <NavLink
              to="/skills"
              className={({ isActive }) =>
                `${isActive ? "text-black dark:text-white":"text-gray-500 hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 dark:hover:text-white"}`
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="hover:text-black">
          <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-black dark:text-white":"text-gray-500 hover:text-black transition duration-500 ease-in-out dark:text-indigo-200 dark:hover:text-white"}`
              }
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <button onClick={toggleDarkMode}><ion-icon name="moon-outline" id="moon"></ion-icon></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
