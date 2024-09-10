import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import approach1 from "../images/approach1.png";

const Slide1 = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNextPage = () => {
    navigate("/quiz1"); // Navigate to /quiz1 on button click
  };

  return (
    <div className="relative py-8 min-h-screen px-4 lg:px-0 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="grid max-w-screen-xl lg:grid-cols-12 lg:gap-8 items-center mx-auto">
        {/* Text Section */}
        <div className="lg:col-span-7 mr-auto">
          <h1 className="max-w-2xl mb-6 text-3xl lg:text-4xl font-bold tracking-tight leading-tight md:text-4xl xl:text-5xl text-blue-900 transition-transform transform hover:scale-105 duration-300">
            Approach
          </h1>
          <p className="max-w-2xl mb-8 text-gray-700 md:text-base lg:text-lg transition-colors hover:text-blue-700 duration-300">
            Our approach to education is comprehensive, focusing not just on
            academic excellence but also on holistic development. We aim to
            foster a learning environment that nurtures curiosity, critical
            thinking, and personal growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <img
            src={approach1}
            alt="approach"
            className="w-full max-w-md h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      </div>

      {/* Next Page Button */}
      <button
        onClick={handleNextPage}
        className="absolute bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Next Page
      </button>
    </div>
  );
};

export default Slide1;
