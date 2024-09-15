import React from 'react';
import headImage from '../images/Screenshot_2024_0817_073454.png';
import { useNavigate } from 'react-router-dom';

const ImplementationOverview = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      {/* Heading Section */}
      <div
        className="bg-cover bg-center h-1/3 flex items-center justify-center"
        style={{ backgroundImage: `url(${headImage})` }}
      >
        <h1 className="text-3xl font-bold text-white text-center">
          NCF Implementation
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-12 h-2/3 flex flex-col space-y-4">
        {/* Implementation Overview Card */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2 text-center">
            Implementation Overview
          </h2>
          <p className="text-gray-700 text-center leading-snug">
            The NCF implementation involves several stages, including the
            development of State Curriculum Frameworks (SCFs) and other
            relevant frameworks, as well as the creation of syllabi, textbooks,
            and other educational materials.
          </p>
        </div>

        {/* Curricular Literacy Card */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2 text-center">
            Curricular Literacy
          </h2>
          <p className="text-gray-700 leading-snug text-center text-sm">
            Understanding the curriculum framework is essential for all
            stakeholders, including public and private schools, academic
            support structures, and teacher education institutions.
          </p>
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-auto">
          <button
            onClick={() => navigate("/stakeholderQuiz")} // Handle button click
            className="bg-teal-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-500 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImplementationOverview;
