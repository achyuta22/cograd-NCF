import React from 'react';
import image1 from "../images/Screenshot_2024_0817_073126.png"; // Replace with actual image paths
import image2 from "../images/Screenshot_2024_0817_073216.png";
import image3 from "../images/Screenshot_2024_0817_073243.png";
import { Link } from 'react-router-dom';

const MainAspects = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen flex flex-col">
      <div className="mx-auto max-w-screen-xl px-2 py-3 md:px-8 flex-grow">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Main Aspects</h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image1})`, height: '150px' }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-xl font-bold text-white text-center">Education in Interdisciplinary Areas</h2>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image2})`, height: '150px' }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-xl font-bold text-white text-center">Vocational Education</h2>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg p-6"
            style={{ backgroundImage: `url(${image3})`, height: '150px' }}
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-xl font-bold text-white text-center">Subjects in Grades 11 and 12</h2>
            </div>
          </div>
        </div>

        {/* Quiz Button */}
        <div className="flex justify-center mt-auto mb-8">
          <Link to="/schoolSubjectQuiz">
            <button className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Take the Quiz
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainAspects;
