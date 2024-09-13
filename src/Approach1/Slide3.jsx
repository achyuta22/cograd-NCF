import React from "react";
import vision from "../images/vision.png";
import { useNavigate } from "react-router-dom";

const Slide3 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-6 px-6 lg:px-12 bg-gradient-to-b from-blue-50 via-white to-blue-200 min-h-screen flex flex-col items-center">
      <div className="grid lg:grid-cols-12 gap-8 mt-12 lg:mt-16 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-blue-800 leading-tight text-center lg:text-left">
            Vision of Education
          </h2>
          <p className="mb-4 text-gray-800 text-base lg:text-lg leading-relaxed text-center lg:text-left">
            Education, at its essence, aims to cultivate valuable knowledge,
            abilities, values, and attitudes. The society's vision for itself
            influences the determination of which knowledge, abilities, values,
            and attitudes are deemed 'valuable'.
          </p>
          <p className="mb-4 text-gray-800 text-base lg:text-lg leading-relaxed text-center lg:text-left">
            This National Education Policy envisions an education system rooted
            in Indian ethos that contributes directly to transforming India,
            that is Bharat, sustainably into an equitable and vibrant knowledge
            society, by providing high-quality education to all, thereby making
            India a global knowledge superpower.
          </p>
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-6 mb-8 lg:mb-0">
          <img
            src={vision}
            alt="Vision"
            className="w-full h-auto max-w-xs lg:max-w-sm rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      {/* Next Page Button */}
      <button
        onClick={() => navigate("/quiz2")}
        className="absolute bottom-8 right-8 bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 px-6 rounded-full shadow-lg hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300"
      >
        Next Page
      </button>
    </div>
  );
};

export default Slide3;
