import React from "react";
import { Link } from "react-router-dom";

const Approach = () => {
  // Define the box data with headings and links
  const boxes = [
    {
      id: 1,
      heading: "1. Aims and Curricular Areas of School Education",
      link: "/approach-aim",
    },
    {
      id: 2,
      heading: "2. School Stages — Logic and Design",
      link: "/approach-stage",
    },
    {
      id: 3,
      heading:
        "3. Approach to Learning Standards, Content and Assessment",
      link: "/approach-learning",
    },
    {
      id: 4,
      heading: "4. Allocation of Time",
      link: "/time1",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-teal-50 via-teal-100 to-blue-200  py-4 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-center text-teal-900 mb-6 sm:mb-12">
          Chapters Overview
        </h1>

        {/* Grid for Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-10">
          {boxes.map((box) => (
            <Link
              key={box.id}
              to={box.link}
              className="relative flex flex-col items-center justify-center h-40 sm:h-56 lg:h-64 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              {/* Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800 opacity-40 rounded-lg"></div>

              {/* Chapter Title */}
              <h2 className="relative z-10 text-lg sm:text-xl md:text-2xl font-semibold text-center px-6 sm:px-8">
                {box.heading}
              </h2>

              {/* Arrow Icon */}
              <div className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-teal-700 rounded-full opacity-90 hover:bg-teal-800 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
