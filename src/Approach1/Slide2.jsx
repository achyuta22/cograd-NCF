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
      navigate("/slide3");
    }
  };

  return (
    <div className="py-6 px-4 lg:px-6 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg border border-gray-200 p-6 lg:p-8">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-gray-900 text-center">
          Vision of Education
        </h1>
        <p className="text-base lg:text-lg mb-4 text-gray-700 text-center">
          Select any four visions that you prioritize the most.
        </p>
        <ul className="space-y-4">
          {visions.map((vision, index) => (
            <li
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-transform ${
                selectedVisions.includes(vision)
                  ? "bg-blue-50 border-blue-400"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedVisions.includes(vision)}
                onChange={() => handleSelect(vision)}
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg transition-colors duration-300"
              />
              <label className="text-base lg:text-lg font-medium text-gray-800">
                {vision}
              </label>
            </li>
          ))}
        </ul>
        {selectedVisions.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Selected Visions:
            </h2>
            <ul className="space-y-2">
              {selectedVisions.map((vision, index) => (
                <li
                  key={index}
                  className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
                >
                  {vision}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleNextPage}
            disabled={selectedVisions.length !== 4}
            className={`px-6 py-3 rounded-full shadow-lg transition-transform duration-300 ${
              selectedVisions.length === 4
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
