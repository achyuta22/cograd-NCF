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
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen py-16 px-8">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center text-gray-800 mb-16">
          Chapters
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {boxes.map((box) => (
            <Link
              key={box.id}
              to={box.link}
              className="relative flex items-center justify-center h-64 bg-gradient-to-tl from-white to-gray-100 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800 opacity-60 rounded-lg"></div>
              <h2 className="relative z-10 text-3xl font-semibold text-white text-center p-6">
                {box.heading}
              </h2>
              <div className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 bg-blue-800 rounded-full opacity-90">
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
