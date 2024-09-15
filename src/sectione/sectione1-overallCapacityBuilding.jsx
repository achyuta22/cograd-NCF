import React from 'react';
import { useNavigate } from 'react-router-dom';

const CapacityBuildingCards = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center">
      {/* Heading Section */}
      <div className="bg-blue-600 w-full h-1/4 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">
          Overall Approach to Capacity Building
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-6 flex-grow">
        {/* Face-to-Face Mode Card */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-2 text-blue-700">Face-to-Face Mode</h2>
          <p className="text-gray-800 leading-relaxed">
            This is the preferred mode, followed by frequent interactions and on-site support, supplemented with digital materials and handbooks. Capacity building may be organized by DIETs or other bodies, with continuous support from block and cluster-level functionaries.
          </p>
        </div>

        {/* Private Schools Card */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-2 text-green-700">Private Schools</h2>
          <p className="text-gray-800 leading-relaxed">
            Should participate in these processes or develop their own plans.
          </p>
        </div>

        {/* Modules for Capacity Building Card */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2 text-yellow-700">Modules for Capacity Building</h2>
          <p className="text-gray-800 leading-relaxed">
            Will cover CF literacy, learning standards, competency-based approaches, stage-wise pedagogy and assessment, textbooks, and experiential learning, including leveraging local resources for various curricular areas.
          </p>
        </div>
      </div>

      {/* Next Button */}
      <div className="bg-gray-200 p-4 w-full flex justify-center">
        <button
          onClick={() => navigate("/specificSubjects")} // Adjust the path as necessary
          className="bg-gradient-to-r from-pink-400 to-orange-500 text-white py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CapacityBuildingCards;
