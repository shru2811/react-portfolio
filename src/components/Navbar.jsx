import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="py-5 flex items-center justify-between px-5 md:px-10">
      <NavLink className="text-6xl md:text-5xl lg:text-6xl font-bold text-white font-['Dancing_Script']">
        Shruti
      </NavLink>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-10">
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-10 text-gray-500 cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white underline underline-offset-8"
                    : "text-indigo-200 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out transform hover:scale-105"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white underline underline-offset-8"
                    : "text-indigo-200 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out transform hover:scale-105"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white underline underline-offset-8"
                    : "text-indigo-200 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out transform hover:scale-105"
                }`
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white underline underline-offset-8"
                    : "text-indigo-200 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out transform hover:scale-105"
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-white underline underline-offset-8"
                    : "text-indigo-200 hover:text-white hover:underline hover:underline-offset-8 transition-all duration-300 ease-in-out transform hover:scale-105"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={closeMenu}
            className="text-white text-2xl hover:text-gray-300 transition-colors duration-200"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="px-5">
          <ul className="flex flex-col space-y-6 text-lg">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-white border-l-4 border-white pl-4"
                      : "text-indigo-200 hover:text-white hover:border-l-4 hover:border-white hover:pl-4 transition-all duration-300"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-white border-l-4 border-white pl-4"
                      : "text-indigo-200 hover:text-white hover:border-l-4 hover:border-white hover:pl-4 transition-all duration-300"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-white border-l-4 border-white pl-4"
                      : "text-indigo-200 hover:text-white hover:border-l-4 hover:border-white hover:pl-4 transition-all duration-300"
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-white border-l-4 border-white pl-4"
                      : "text-indigo-200 hover:text-white hover:border-l-4 hover:border-white hover:pl-4 transition-all duration-300"
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive
                      ? "text-white border-l-4 border-white pl-4"
                      : "text-indigo-200 hover:text-white hover:border-l-4 hover:border-white hover:pl-4 transition-all duration-300"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;