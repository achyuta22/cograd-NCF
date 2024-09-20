import React from "react";
import { useNavigate } from "react-router-dom";
import stagesImage from "../images/stages.jpg";
import BackButton from "../components/Backbutton";

const Stage1 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/stage2");
  };

  const handlePrevPage = () => {
    navigate("/curricular");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 py-6 p-4">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center text-teal-800">
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
          onClick={handlePrevPage}
          className="fixed bottom-4 z-10 left-8 bg-gradient-to-br from-red-400 to-red-400 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500 active:scale-95 focus:ring-4 focus:ring-red-300"
        >
          Previous Chapter
        </button>
        <button
          onClick={handleNextPage}
          className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stage1;
