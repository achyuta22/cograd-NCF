import React from "react";
import { useNavigate } from "react-router-dom";
import stagesImage from "../images/stages.jpg";

const Stage1 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/stage2");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 p-4">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-teal-800 mt-6 mb-6">
        School Stages
      </h1>

      {/* Image and Description Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mb-8 bg-white overflow-hidden">
        {/* NEP 2020 Description */}
        <div className="text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left p-4 md:p-8 md:w-1/2">
          <p>
            NEP 2020 recommends that schooling will now be imagined in four
            stages in a new 5+3+3+4 design covering ages 3-18, which is based on
            the stages of physical, cognitive, and socioemotional-ethical
            development of children/students.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={stagesImage}
            alt="Stages"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Next Page Button */}
      <div className="flex justify-end items-end mb-8">
        <button
          onClick={handleNextPage}
          className="fixed bottom-8 right-8 bg-teal-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Stage1;
