import React from "react";
import cct1 from "../images/cct1.png";
import cct2 from "../images/cct2.png";
import cct3 from "../images/cct3.png";
import cct4 from "../images/cct4.png";
import cct5 from "../images/cct5.png";
import cct6 from "../images/cct6.png";
import cct7 from "../images/cct7.png";

const CCT = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Main Banner Section */}
      <div className="relative w-full h-96 mb-12 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-3xl shadow-xl border border-gray-300 overflow-hidden">
        <img
          src={cct1}
          alt="Cross Cutting Themes Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 flex items-center justify-center h-full p-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl xl:text-6xl leading-tight tracking-tight text-center">
            Cross Cutting Themes
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-teal-400 hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:border-teal-500">
          <img
            src={cct2}
            alt="Rootedness in India"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center text-teal-800">
            🌳 Rootedness in India
          </h2>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-pink-400 hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:border-pink-500">
          <img
            src={cct3}
            alt="Values & Dispositions"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center text-pink-800">
            ❤️ Values & Dispositions
          </h2>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-400 hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:border-green-500">
          <img
            src={cct4}
            alt="Caring for Nature"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center text-green-800">
            🌱 Caring for Nature
          </h2>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-400 hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:border-blue-500">
          <img
            src={cct5}
            alt="Inclusion in Schools"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center text-blue-800">
            🏫 Inclusion in Schools
          </h2>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-400 hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:border-purple-500">
          <img
            src={cct6}
            alt="Guidance & Counselling"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center text-purple-800">
            💬 Guidance & Counselling
          </h2>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-red-400 hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-xl hover:border-red-500">
          <img
            src={cct7}
            alt="Educational Tech"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 text-center text-red-800">
            💻 Educational Tech
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CCT;
