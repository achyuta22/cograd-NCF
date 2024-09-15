import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png'; // Background image for the page

const CareerDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md opacity-90">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Career and Professional Development</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-teal-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Equal Opportunities</h3>
            <p className="text-gray-700">
              Teachers should have equal career growth opportunities across all stages of school education.
            </p>
          </div>
          {/* Card 2 */}
          {/* <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Improved Pay and Conditions</h3>
            <p className="text-gray-700">
              Improving pay and service conditions helps in attracting and retaining talented teachers.
            </p>
          </div> */}
          {/* Card 3 */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Career Progression</h3>
            <p className="text-gray-700">
              Teachers should have career progression opportunities without the need to switch stages unless desired.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Alternative Roles</h3>
            <p className="text-gray-700">
              Teachers can transition to roles like teacher educators or administrators if they meet specific criteria.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/inservice")}
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerDevelopment;
