import React from 'react';
import keyAspectsImage from '../images/vision.png'; // Update the path as needed
import { useNavigate } from 'react-router-dom';

const KeyAspects = () => {
  const navigate = useNavigate();
  const aspects = [
    "Learning in the Foundational Stage",
    "Language Education",
    "Mathematics Education",
    "Science Education",
    "Social Science Education",
    "Art Education",
    "Education in Interdisciplinary Areas",
    "Physical Education and Well-being",
    "Vocational Education",
    "Subjects in Grades 11 and 12",
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 bg-white/80 rounded-lg shadow-lg backdrop-blur-lg">
        
        {/* Container for image and list */}
        <div className="flex flex-col md:flex-row md:gap-8">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={keyAspectsImage}
              alt="Key Aspects"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* List of Key Aspects */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Key Aspects of School Subjects
            </h1>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-400">
              {aspects.map((aspect, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block text-green-500 w-6 h-6 mr-2">&#10003;</span>
                  {aspect}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Section Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300" onClick={()=>navigate("/culture")}>
            Next Section
          </button>
        </div>

      </div>
    </section>
  );
};

export default KeyAspects;
