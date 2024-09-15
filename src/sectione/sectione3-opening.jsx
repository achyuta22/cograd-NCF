import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png'; // Background image for the page

const cardData = [
  "Professional development programs.",
  "Access to modern teaching tools.",
  "Supportive school leadership.",
  "Collaborative teaching environments.",
  "Regular feedback and evaluation.",
  "Opportunities for advanced training.",
  "Adequate classroom resources.",
  "Encouragement of innovative teaching methods."
];

const EnablingEmpoweringTeachers = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md opacity-90">
        <h1 className="text-3xl font-bold mb-6 text-center">Enabling and Empowering Teachers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {cardData.map((text, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
              <p className="text-gray-800 text-center">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/enablingEmpoweringforTeachers")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnablingEmpoweringTeachers;
