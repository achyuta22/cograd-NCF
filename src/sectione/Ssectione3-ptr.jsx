import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png';; // Background image for the page

const PupilTeacherRatio = () => {
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
        <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Pupil-Teacher Ratio (PTR)</h1>
        <h6 className="text-lg mb-2 text-gray-700 text-center">
          Key metric in education. A balanced PTR allows teachers to give individual attention to students, helping them stay engaged and succeed academically.
        </h6>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Significance of PTR</h2>
        <p className="text-lg mb-2 text-gray-700">
          The right PTR ensures individual attention. A lower PTR is particularly essential during early years to encourage continued education.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Individual Attention</h3>
            <p className="text-gray-700">
              A lower PTR helps teachers focus on individual students, improving engagement and achievement.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Importance in Early Years</h3>
            <p className="text-gray-700">
              Lower PTR is particularly important in the early years of schooling for sustained student progress.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Qualified Teachers</h3>
            <p className="text-gray-700">
              PTR should be improved by hiring and developing qualified teachers, not by lowering standards.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/career")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PupilTeacherRatio;
