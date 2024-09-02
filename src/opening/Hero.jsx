// src/components/Hero.js

import React, { useState } from "react";
import NcfeImage from "../images/mcf-image.png"; // Update the path according to your file structure
import { Link } from "react-router-dom";
import HistoryPage from "./History";

const Hero = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const options = [
    { title: "Approach", link: "/approach" },
    { title: "Cross Cutting Themes", link: "/cct" },
    { title: "Culture", link: "/culture" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl xl:text-6xl">
              National Curriculum Framework 2023
            </h1>
            <p className="text-gray-200 mb-8 text-lg md:text-xl lg:text-lg">
              The NCF 2023 focuses on the all-round development of students,
              emphasizing not just academic learning but also life skills,
              emotional well-being, and values like empathy, ethics, and
              teamwork.
            </p>
            <div className="relative flex space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 border border-blue-600 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Curriculum
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <div className="p-2">
                      {options.map((option) => (
                        <Link
                          key={option.title}
                          to={option.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                          onClick={() => setDropdownOpen(false)} // Close dropdown on click
                        >
                          {option.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <img
              src={NcfeImage}
              alt="mockup"
              className="w-full h-auto lg:max-w-md rounded-md shadow-md"
            />
            <p className="mt-4 text-sm text-gray-300 text-center lg:text-right">
              Presented by CoGrad
            </p>
          </div>
        </div>
      </div>
      <HistoryPage />
    </section>
  );
};

export default Hero;
