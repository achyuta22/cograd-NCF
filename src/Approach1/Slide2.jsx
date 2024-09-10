import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const visions = [
  "Empowering Future Innovators",
  "Nurturing Lifelong Learners",
  "Cultivating Curiosity and Creativity",
  "Inspiring Excellence in Every Student",
  "Building Strong Foundations for Tomorrow",
  "Fostering Holistic Growth and Development",
  "Guiding Students Toward Success",
  "Shaping Leaders of the Next Generation",
  "Encouraging Critical Thinking and Problem-Solving",
  "Creating a Community of Learners and Leaders",
];

const Slide2 = () => {
  const [selectedVisions, setSelectedVisions] = useState([]);
  const navigate = useNavigate();

  const handleSelect = (vision) => {
    setSelectedVisions((prev) =>
      prev.includes(vision)
        ? prev.filter((item) => item !== vision)
        : [...prev, vision]
    );
  };

  const handleNextPage = () => {
    if (selectedVisions.length === 4) {
      console.log("Selected Visions:", selectedVisions);
      navigate("/slide3");
    }
  };

  return (
    <div className="py-2 px-4 lg:px-0 bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="max-w-3xl mx-auto p-4 bg-white shadow-2xl rounded-lg mt-2 border border-gray-200">
        <h1 className="text-2xl font-extrabold mb-4 text-gray-900">
          What should be the Vision of Education?
        </h1>
        <h2 className="text-md font-medium mb-4 text-gray-700">
          Select any four which have the most priority for you.
        </h2>
        <ul className="space-y-5">
          {visions.map((vision, index) => (
            <li
              key={index}
              className={`flex items-center space-x-4 p-3 rounded-lg border-2 transition-transform transform ${
                selectedVisions.includes(vision)
                  ? "bg-blue-100 border-blue-300"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedVisions.includes(vision)}
                onChange={() => handleSelect(vision)}
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg transition-colors duration-300"
              />
              <label className="text-base font-medium text-gray-800">
                {vision}
              </label>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-6 text-gray-900">
          Selected Visions:
        </h2>
        <ul className="mt-4 space-y-2">
          {selectedVisions.map((vision, index) => (
            <li
              key={index}
              className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              {vision}
            </li>
          ))}
        </ul>
        {/* Next Page Button */}
        <button
          onClick={handleNextPage}
          disabled={selectedVisions.length !== 4}
          className={`mt-8 px-8 py-4 rounded-lg shadow-lg transition-transform transform duration-300 ${
            selectedVisions.length === 4
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Slide2;
