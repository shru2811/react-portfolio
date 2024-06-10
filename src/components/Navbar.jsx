import React from "react";
import { NavLink } from "react-router-dom";
// Link is used i place of anchor tag because anchor tag causes page reload
function Navbar() {
  return (
    <div className="flex justify-between align-center mt-5 sticky">
      <div className="text-4xl font-bold">Portfolio</div>
      <div className="text-xl font-semibold">
        <ul className="flex justify-between gap-10 mt-2 text-gray-500 cursor-pointer">
          <li className="hover:text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-black":"text-gray-500 hover:text-black transition duration-500 ease-in-out"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-black">
          <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-black":"text-gray-500 hover:text-black transition duration-500 ease-in-out"}`
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-black">
          <NavLink
              to="/skills"
              className={({ isActive }) =>
                `${isActive ? "text-black":"text-gray-500 hover:text-black transition duration-500 ease-in-out"}`
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="hover:text-black">
          <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-black":"text-gray-500 hover:text-black transition duration-500 ease-in-out"}`
              }
            >
              Contact Me
            </NavLink>
          </li>
          <li>
            <ion-icon name="moon-outline" id="moon"></ion-icon>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
