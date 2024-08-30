import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-widest transform hover:scale-105 transition-transform duration-300"
        >
          NCF
        </Link>
        <div className="hidden md:flex space-x-8">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300 text-lg font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="hover:text-white transition-colors duration-300 text-lg font-medium relative group"
              >
                History
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/approach"
                className="hover:text-white transition-colors duration-300 text-lg font-medium relative group"
              >
                Approach
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/cct"
                className="hover:text-white transition-colors duration-300 text-lg font-medium relative group"
              >
                Cross Cutting Themes
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/culture"
                className="hover:text-white transition-colors duration-300 text-lg font-medium relative group"
              >
                Culture
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 backdrop-blur-lg shadow-md transition-transform duration-300 ${
          isOpen ? "transform scale-y-100" : "transform scale-y-0"
        } origin-top space-y-4 px-4 py-2`}
      >
        <Link
          to="/"
          className="block text-lg font-medium text-white hover:text-purple-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/history"
          className="block text-lg font-medium text-white hover:text-purple-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          History
        </Link>
        <Link
          to="/approach"
          className="block text-lg font-medium text-white hover:text-purple-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Approach
        </Link>
        <Link
          to="/culture"
          className="block text-lg font-medium text-white hover:text-purple-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Culture
        </Link>
        <Link
          to="/cct"
          className="block text-lg font-medium text-white hover:text-purple-300 transition-colors duration-300"
          onClick={toggleMenu}
        >
          Cross Cutting Themes
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
