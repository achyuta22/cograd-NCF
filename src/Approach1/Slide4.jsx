import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import approach1 from "../images/approach1.png"; // Adjust the path to your image
import BackButton from "../components/Backbutton";

const aims = [
  "Developing Critical Thinking Skills",
  "Fostering Creativity and Innovation",
  "Encouraging Collaboration and Teamwork",
  "Building Strong Communication Skills",
  "Promoting Lifelong Learning",
  "Instilling Ethical Values and Responsibility",
  "Enhancing Problem-Solving Abilities",
  "Cultivating Emotional Intelligence",
  "Preparing for Future Careers",
  "Supporting Personal Growth and Development",
];

const Slide4 = () => {
  const [selectedAims, setSelectedAims] = useState([]);
  const navigate = useNavigate();

  const handleSelect2 = (aim) => {
    setSelectedAims((prev) =>
      prev.includes(aim) ? prev.filter((item) => item !== aim) : [...prev, aim]
    );
  };

  const handleNextPage = () => {
    if (selectedAims.length > 0) {
      navigate("/slide5");
    }
  };

  return (
    <div className="relative p-6 lg:px-8 bg-gradient-to-b from-teal-50 via-white to-teal-100 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-xl lg:text-3xl font-bold mb-4 text-gray-900">
            What are the true aims of school education?
          </h1>
          <ul className="space-y-4">
            {aims.map((aim, index) => (
              <li key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedAims.includes(aim)}
                  onChange={() => handleSelect2(aim)}
                  className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label className="text-base text-gray-800">{aim}</label>
              </li>
            ))}
          </ul>
          {selectedAims.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Selected Aims:
              </h2>
              <ul className="mt-4 space-y-2">
                {selectedAims.map((aim, index) => (
                  <li
                    key={index}
                    className="p-3 bg-teal-100 text-teal-800 rounded-lg shadow-sm"
                  >
                    {aim}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={approach1}
            alt="Education Vision"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Next Page Button */}
      <BackButton />
      <button
        onClick={handleNextPage}
        disabled={selectedAims.length === 0}
        className={` fixed bottom-4 right-8  p-5 rounded-3xl shadow-lg transition-transform hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300  transform hover:scale-105 duration-300 ${
          selectedAims.length === 1
            ? "bg-gradient-to-br from-teal-400 to-teal-600 text-white hover:bg-teal-700"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Slide4;
