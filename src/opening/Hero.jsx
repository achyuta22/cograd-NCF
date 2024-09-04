import React from "react";
import NcfeImage from "../images/mcf-image.png"; // Update the path according to your file structure
import HistoryPage from "./History";
import { Link } from "react-router-dom"; // Import Link for routing

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 md:mb-8">
              National Curriculum Framework 2023
            </h1>
            <p className="text-gray-200 mb-8 text-base md:text-lg lg:text-xl">
              The NCF 2023 emphasizes holistic development, integrating academic
              learning with life skills, emotional well-being, and core values
              such as empathy, ethics, and teamwork.
            </p>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-12">
              <Link
                to="/user"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-teal-800 rounded-lg shadow-md hover:bg-teal-900 transition-colors duration-300 transform hover:scale-105"
              >
                Get Started
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
              </Link>
            </div>
            {/* <div className="mt-2">
              <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center justify-center">
                <Link
                  to="/approach"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105"
                >
                  Approach
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
                </Link>
                <Link
                  to="/cct"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-800transition-colors duration-300 transform hover:scale-105"
                >
                  Cross Cutting Themes
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
                </Link>
                <Link
                  to="/culture"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105"
                >
                  Culture
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
                </Link>
                <Link
                  to="/school-subjects"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105"
                >
                  School Subjects
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
                </Link>
              </div>
            </div> */}
          </div>
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <img
              src={NcfeImage}
              alt="mockup"
              className="w-full h-auto lg:max-w-md rounded-lg shadow-xl duration-500"
            />
            <p className="mt-4 text-sm text-gray-300 text-center lg:text-right">
              Presented by CoGrad
            </p>
          </div>
        </div>
      </div>

      {/* Optional Additional Sections */}
      <HistoryPage />
    </section>
  );
};

export default Hero;
