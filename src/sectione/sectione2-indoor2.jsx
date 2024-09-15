import React from 'react';
import { useNavigate } from 'react-router-dom';

const IndoorInfrastructurePart2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-0">
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md">
        {/* <h1 className="text-3xl font-bold mb-4 text-center">Indoor Infrastructure Overview - Part 2</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-teal-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-teal-700">Dining Area and Drinking Water</h2>
            <p className="text-gray-700 mt-2">
              The dining area should be clean, spacious, and hygienic, with adequate facilities for washing dishes and providing drinking water.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-yellow-700">Toilets</h2>
            <p className="text-gray-700 mt-2">
              Toilets should be well-lit, clean, and safe, with separate facilities for different genders and people with disabilities. Girls’ toilets should stock sanitary pads and provide covered bins for disposal.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-700">Semi-open/Partially Shaded Areas</h2>
            <p className="text-gray-700 mt-2">
              Schools can have semi-open areas for safe movement, shelter, and display of student work. These areas can also include interactive spaces for sensory exploration.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-purple-700">Uninterrupted Supply of Water and Electricity</h2>
            <p className="text-gray-700 mt-2">
              Regular and uninterrupted supplies of water and electricity are essential for the smooth functioning of schools. Schools should work with local authorities to prioritize these utilities.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="/indoorInfrastructure1" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">
            Back to Overview
          </a>
          <button
            onClick={() => navigate("/safetyInfra")} // Adjust the path as necessary
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndoorInfrastructurePart2;
