import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png';; // Background image for the page

const TeacherAutonomyAndAccountability = () => {
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
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Teacher Autonomy and Accountability</h1>
        <p className="text-lg mb-6 text-gray-700 text-center">
          Balancing autonomy and accountability is key for effective education. Teachers must be empowered to make educational decisions, but their role comes with the responsibility for student learning.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Balancing Autonomy and Accountability</h2>
        <p className="text-lg mb-6 text-gray-700">
          True accountability is more than just test scores. It involves understanding the broader context in which teaching occurs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Empowerment through Autonomy</h3>
            <p className="text-gray-700">
              Teachers, when given autonomy, can adapt their teaching styles to the needs of their students for a more effective learning experience.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-800">Accountability Beyond Test Scores</h3>
            <p className="text-gray-700">
              Accountability should consider multiple aspects of education, not just student performance on tests.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Teacher Capacity and Environment</h3>
            <p className="text-gray-700">
              Autonomy must be linked to a teacher’s skills and the resources available to them, creating a conducive learning environment.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-red-800">Systemic Accountability</h3>
            <p className="text-gray-700">
              Accountability should reflect systemic factors that affect teacher performance, such as school resources and community involvement.
            </p>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/ptr")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherAutonomyAndAccountability;
