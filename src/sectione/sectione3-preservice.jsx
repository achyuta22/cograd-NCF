import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png';; // Background image for the page

const PreServiceTeacherEducation = () => {
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
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Pre-Service Teacher Education</h1>
        <p className="text-lg mb-6 text-gray-700 text-center">
          Preparing future teachers with a strong foundation through interdisciplinary learning and rigorous recruitment ensures high standards in education.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Interdisciplinary Curriculum</h2>
        <p className="text-lg mb-6 text-gray-700">
          Pre-service teacher education should involve an interdisciplinary approach, equipping teachers with a solid knowledge base and a professional identity. The four-year Integrated Teacher Education Programme (ITEP) will help student teachers blend theory with practice effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Integrated Teacher Education Programme (ITEP)</h3>
            <p className="text-gray-700">
              The four-year ITEP provides opportunities for student teachers to connect theory with practice.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Strong Knowledge Base</h3>
            <p className="text-gray-700">
              The curriculum focuses on interdisciplinary learning, preparing teachers with a robust knowledge foundation.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Teacher Eligibility Test (TET)</h3>
            <p className="text-gray-700">
              The TET should be extended to all stages of education to ensure a consistent standard of teaching.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Teacher Eligibility and Recruitment</h2>
        <p className="text-lg mb-6 text-gray-700">
          Rigorous teacher eligibility and recruitment processes are essential for maintaining high-quality education. Extending the Teacher Eligibility Test (TET) to all stages and involving rigorous recruitment methods ensures this quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 4 */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Teacher Eligibility Test (TET)</h3>
            <p className="text-gray-700">
              The TET should be extended to all stages of education to ensure a consistent standard of teaching.
            </p>
          </div> */}
          {/* Card 5 */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Rigorous Recruitment</h3>
            <p className="text-gray-700">
              Teacher recruitment processes should involve interviews, classroom demonstrations, and rigorous assessments.
            </p>
          </div> */}
          {/* Card 6 */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">High Standards</h3>
            <p className="text-gray-700">
              Recruitment processes ensure teachers meet high standards in both knowledge and teaching ability.
            </p>
          </div> */}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/headQuiz")}
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreServiceTeacherEducation;
