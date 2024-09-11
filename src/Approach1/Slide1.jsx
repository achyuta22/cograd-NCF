import React from "react";
import { useNavigate } from "react-router-dom";
import approach1 from "../images/approach1.png";

const Slide1 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/quiz1");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left lg:justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Our Approach
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We believe in a holistic approach to education, integrating academic
            excellence with personal development. Our goal is to cultivate a
            nurturing environment that encourages curiosity, critical thinking,
            and personal growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={approach1}
            alt="Approach"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Next Page Button */}
      <button
        onClick={handleNextPage}
        className="absolute bottom-8 right-8 bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 px-6 rounded-full shadow-lg hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300"
      >
        Next Page
      </button>
    </div>
  );
};

export default Slide1;
