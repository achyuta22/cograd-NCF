import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import approach1 from "../images/approach1.png";

const Slide1 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNextPage = () => {
    navigate("/quiz1"); // Navigate to /quiz1 on button click
  };

  return (
    <div className="relative py-6 min-h-screen px-4 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Section */}
        <div className="mb-6 lg:mb-0 lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight leading-tight transition-transform transform hover:scale-105 duration-300">
            Approach
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 transition-colors hover:text-blue-800 duration-300">
            Our approach to education is comprehensive, focusing not just on
            academic excellence but also on holistic development. We aim to
            foster a learning environment that nurtures curiosity, critical
            thinking, and personal growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={approach1}
            alt="Approach"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-lg shadow-xl  duration-300"
          />
        </div>
      </div>

      {/* Next Page Button */}
      <button
        onClick={handleNextPage}
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white py-3 px-5 rounded-full shadow-xl transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-300"
      >
        Next Page
      </button>
    </div>
  );
};

export default Slide1;
