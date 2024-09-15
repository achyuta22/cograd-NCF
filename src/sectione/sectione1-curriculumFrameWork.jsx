import React from 'react';
import { useNavigate } from 'react-router-dom';

const CurriculumFramework = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      {/* Heading Section */}
      <div className="bg-blue-500 h-1/8 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">Curriculum Framework Literacy</h1>
      </div>

      <div className="container mx-auto px-4 md:px-12 flex-grow flex flex-col space-y-4">
        {/* Understanding the CF */}
        <section className="bg-indigo-50 p-6 rounded-lg shadow-md flex-grow">
          <h2 className="text-2xl font-bold mb-4">Understanding the CF</h2>
          <p className="text-gray-700 leading-relaxed">
            Stakeholders must comprehend the approaches and principles of the CF to achieve educational aims, the key curricular changes, the roles and responsibilities of each stakeholder, and the importance of these components.
          </p>
        </section>

        {/* Orientation to the Relevant Curriculum Framework */}
        <section className="bg-green-50 p-6 rounded-lg shadow-md flex-grow">
          <h2 className="text-2xl font-bold mb-4">Orientation to the Relevant Curriculum Framework</h2>
          <p className="text-gray-700 leading-relaxed">
            SCERT or other relevant bodies will design and develop modules for this program, to be implemented by DIETs. An intensive 2-3 day orientation program should be designed for each stakeholder group, focusing on the specific aspects of the CF relevant to their roles.
          </p>
        </section>

        {/* Specialized Capacity Building */}
        <section className="bg-yellow-50 p-6 rounded-lg shadow-md flex-grow">
          <h2 className="text-2xl font-bold mb-4">Specialized Capacity Building</h2>
          <p className="text-gray-700 leading-relaxed">
            Academic functionaries specializing in areas like Art Education, Vocational Education, Physical Education, and Interdisciplinary Areas must undergo an intensive face-to-face capacity-building program annually for 2-3 years after CF implementation, with at least six days of face-to-face interaction and pre-scheduled online sessions.
          </p>
        </section>
      </div>

      {/* Next Button */}
      <div className="bg-gray-100 p-4 flex justify-center">
        <button
          onClick={() => navigate("/capacityBuildingCards")} // Handle button click
          className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CurriculumFramework;
