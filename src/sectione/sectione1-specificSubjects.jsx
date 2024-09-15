import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpecificSubjects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center">
      {/* Heading Section */}
      <div className="bg-teal-600 w-full h-1/4 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">
          Capacity Building for Specific Subjects
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-6 flex-grow">
        {/* General Capacity Building Card */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-2 text-teal-700">
            Mathematics, Languages, Science, Social Science, and Other Subjects
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Intensive face-to-face programs of about 10 days, supplemented by single-day interactions at block and cluster levels, spread over a year. This will continue for at least 2-3 years post-CF implementation.
          </p>
        </div>

        {/* Secondary Stage Teachers Card */}
        <div className="bg-indigo-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-indigo-700">
            Secondary Stage Teachers
          </h2>
          <p className="text-gray-800 leading-relaxed">
            The capacity development must align with the subjects being offered and their design.
          </p>
        </div>
      </div>

      {/* Next Button */}
      <div className="bg-gray-200 p-4 w-full flex justify-center">
        <button
          onClick={() => navigate("/capacityBuildingQuiz")} // Handle button click
          className="bg-gradient-to-r from-green-300 to-green-500 text-white py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Quiz Awaits
        </button>
      </div>
    </div>
  );
};

export default SpecificSubjects;
