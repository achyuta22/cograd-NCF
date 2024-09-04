import React from "react";
import { Link } from "react-router-dom";

const Approach = () => {
  // Define the box data with headings and links
  const boxes = [
    {
      id: 1,
      heading: "1. Aims and Curricular Areas of School Education ",
      link: "/approach-aim",
    },
    {
      id: 2,
      heading: "2. School Stages — Logic and Design ",
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
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Chapters
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {boxes.map((box) => (
            <Link
              key={box.id}
              to={box.link}
              className="flex items-center justify-center w-80 h-80 bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-semibold text-gray-700 text-center p-6">
                {box.heading}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
