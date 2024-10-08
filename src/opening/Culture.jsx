import React from "react";
import { useNavigate } from "react-router-dom";
import culture1 from "../images/culture1.png";

const Culture = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen">
      {/* Intro Section */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-12">
        <div className="flex-1 lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
            SCHOOL CULTURE AND PROCESSES
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            The NCF 2023 focuses on the all-round development of students,
            emphasizing academic learning, life skills, emotional well-being,
            and values like empathy and teamwork.
          </p>
        </div>
        <div className="flex-1 lg:w-1/2 flex justify-center">
          <img
            src={culture1}
            alt="School Culture"
            className="w-full max-w-sm h-auto rounded-lg shadow-lg border-4 border-blue-300 transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Navigation Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={() => navigate("/school-culture")}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-200 cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 text-center">
            School Culture
          </h2>
        </div>

        <div
          onClick={() => navigate("/school-process")}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-200 cursor-pointer transition-transform transform hover:scale-105"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800 text-center">
            School Process
          </h2>
        </div>
      </div>
      <button
        onClick={() => navigate("/pageswithcards")}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-teal-500 to-teal-700 text-white p-4 sm:p-5 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next Section
      </button>
    </div>
  );
};

export default Culture;
