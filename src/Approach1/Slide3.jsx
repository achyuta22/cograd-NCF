import React from "react";
import vision from "../images/vision.png";
import { useNavigate } from "react-router-dom";

const Slide3 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-4 px-4 lg:px-0 bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="grid lg:grid-cols-12 gap-8 mt-8 lg:mt-16 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-blue-900">
            Vision of Education
          </h2>
          <p className="mb-4 text-gray-800 text-base lg:text-lg leading-relaxed">
            Education, at its essence, aims to cultivate valuable knowledge,
            abilities, values, and attitudes. The society's vision for itself
            influences the determination of which knowledge, abilities, values,
            and attitudes are deemed 'valuable'.
          </p>
          <p className="mb-4 text-gray-800 text-base lg:text-lg leading-relaxed">
            This National Education Policy envisions an education system rooted
            in Indian ethos that contributes directly to transforming India,
            that is Bharat, sustainably into an equitable and vibrant knowledge
            society, by providing high-quality education to all, thereby making
            India a global knowledge superpower.
          </p>
        </div>
        <div className="lg:col-span-5 flex justify-center mt-6 mb-8 lg:mb-0">
          <img
            src={vision}
            alt="vision"
            className="w-full h-auto max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Next Page Button */}
      <button
        onClick={() => navigate("/quiz2")}
        className="absolute bottom-8 right-8 px-6 py-3 rounded-lg shadow-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
      >
        Next Page
      </button>
    </div>
  );
};

export default Slide3;
