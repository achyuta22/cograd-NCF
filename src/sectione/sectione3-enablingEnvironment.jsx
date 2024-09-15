import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png';; // Background image for the page

const EnablingEnvironmentForTeachers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md opacity-90">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Enabling Environment for Teachers</h1>
        <p className="text-lg mb-4 text-gray-700">
          A positive school culture that promotes learning and collaboration, characterized by trust and respect, is essential. NEP 2020 emphasizes the importance of teachers.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Physical and Professional Support for Teachers</h2>
        <p className="text-lg mb-6 text-gray-700">
          Safe drinking water, functional infrastructure, and teaching materials to support their day-to-day needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Resource-Rich Environments</h3>
            <p className="text-gray-700">Provide classrooms with technology, teaching aids, and materials.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Professional Development</h3>
            <p className="text-gray-700">Regular training programs and workshops.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Autonomy in Teaching</h3>
            <p className="text-gray-700">Allowing teachers the freedom to design creative lessons.</p>
          </div>
          {/* Card 4 */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Sense of Pride in Profession</h3>
            <p className="text-gray-700">Creating a culture of respect and recognition fosters pride in teaching and improves motivation.</p>
          </div> */}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/teacherAutonomy")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnablingEnvironmentForTeachers;
