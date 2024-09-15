import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png';; // Background image for the page

const InServiceTeacherEducation = () => {
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
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">In-Service Teacher Education, Mentoring, and Support</h1>
        <p className="text-lg mb-6 text-gray-700 text-center">
          Continuous professional development is vital for teachers at different stages of their careers.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Continuous Professional Development</h2>
        <p className="text-lg mb-6 text-gray-700">
          Teacher professional development is a continuous journey. Different teachers at various stages require holistic support, especially with NEP 2020's changes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-teal-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Ongoing Support</h3>
            <p className="text-gray-700">
              In-service education is crucial for teacher growth, especially during transitions under NEP 2020.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">School-Based Development</h3>
            <p className="text-gray-700">
              Schools should have regular professional development meetings and individual mentoring programs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">Mentoring for New Teachers</h3>
            <p className="text-gray-700">
              New teachers need a well-planned induction process, and senior teachers can serve as mentors.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Academic Support</h2>
        <p className="text-lg mb-6 text-gray-700">
          Academic institutions like NCERT, SCERTs, DIETs, BITEs, BRCs, and CRCs play a key role in providing academic mentoring and support for teachers' continuous professional development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 4 */}
          {/* <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-green-800">NCERT & SCERTs</h3>
            <p className="text-gray-700">
              These institutions provide continuous academic support to teachers.
            </p>
          </div> */}
          {/* Card 5 */}
          {/* <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-orange-800">DIETs & BITEs</h3>
            <p className="text-gray-700">
              They help facilitate teacher development and mentoring at district and state levels.
            </p>
          </div> */}
          {/* Card 6 */}
          {/* <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-purple-800">BRCs & CRCs</h3>
            <p className="text-gray-700">
              These bodies ensure regular professional development and mentoring at the grassroots level.
            </p>
          </div> */}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/preservice")}
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InServiceTeacherEducation;
