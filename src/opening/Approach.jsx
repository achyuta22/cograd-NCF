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
      heading: "3. Approach to Learning Standards, Content, Pedagogy",
      link: "/approach-learning",
    },
    {
      id: 4,
      heading: "4. Assessment and Allocation of Time",
      link: "/approach-assessment",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12 md:mb-16">
          Chapters
        </h1>

        {/* Grid for Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {boxes.map((box) => (
            <Link
              key={box.id}
              to={box.link}
              className="relative flex items-center justify-center h-56 md:h-64 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-blue-100"
            >
              {/* Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800 opacity-70 rounded-lg"></div>

              {/* Chapter Title */}
              <h2 className="relative z-10 text-2xl md:text-3xl font-semibold text-white text-center px-6">
                {box.heading}
              </h2>

              {/* Arrow Icon */}
              <div className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-blue-800 rounded-full opacity-90 hover:bg-blue-900 transition-all duration-300">
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
