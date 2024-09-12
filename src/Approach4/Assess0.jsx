import React from "react";
import { useNavigate } from "react-router-dom";

const Assess0 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gradient-to-b from-blue-100 to-blue-300 min-h-screen flex flex-col items-center justify-center gap-8">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
        Explore Our Approach
      </h2>

      {/* Box 1 */}
      <div
        className="w-full max-w-xs p-4 bg-teal-500 rounded-xl shadow-lg flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl relative"
        onClick={() => navigate("/assess1")}
      >
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white text-center">
            Approach to Assessment
          </h3>
        </div>
      </div>

      {/* Box 2 */}
      <div
        className="w-full max-w-xs p-4 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl relative"
        onClick={() => navigate("/time1")}
      >
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white text-center">
            Allocation of Time
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Assess0;
