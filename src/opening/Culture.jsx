import React from "react";
import culture1 from "../images/culture1.png";
import culture2 from "../images/culture2.png";
import culture3 from "../images/culture3.png";

const Culture = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Main Banner Section */}
      <div className="relative w-full h-96 mb-12 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-3xl shadow-xl border border-gray-300 overflow-hidden">
        <img
          src={culture1}
          alt="Cross Cutting Themes Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex items-center justify-center h-full p-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl xl:text-6xl leading-tight tracking-tight text-center">
            Cross Cutting Themes
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-stretch gap-0">
        {/* Image 1 */}
        <div className="flex-1 relative bg-white border-gray-300 overflow-hidden">
          <img
            src={culture2}
            alt="Culture Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-1 relative bg-white overflow-hidden">
          <img
            src={culture3}
            alt="Culture Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Culture;
