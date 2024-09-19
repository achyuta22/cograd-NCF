import React from "react";
import { useNavigate } from "react-router-dom";

const Time2 = () => {
  const navigate = useNavigate();
  const handleNextSection = () => {
    navigate("/cct");
  };

  const handleIndex = () => {
    navigate("/history");
  };

  const boxItems = [
    { title: "Foundational Stage", route: "/foundation-time" },
    { title: "Prepratory Stage", route: "/prepatory-time" },
    { title: "Middle Stage", route: "/middle-time" },
    { title: "Secondary Stage", route: "/secondary-time" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Stage Specific Time Allocation
          </h2>
        </div>

        {/* Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {boxItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer transition-transform transform hover:scale-105 hover:bg-teal-100 hover:border-teal-400"
              onClick={() => navigate(item.route)}
            >
              <h3 className="text-xl font-semibold text-teal-800 mb-2 text-center">
                {item.title}
              </h3>
              <div className="text-center">
                <button className="mt-2 text-teal-600 font-medium text-sm bg-white border border-teal-500 py-2 px-4 rounded-lg hover:bg-teal-500 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleIndex}
        className="fixed bottom-4 z-10 left-8 bg-gradient-to-br from-red-400 to-red-400 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500 active:scale-95 focus:ring-4 focus:ring-red-300"
      >
        Go to Index
      </button>
      <button
        onClick={handleNextSection}
        className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next Section
      </button>
    </div>
  );
};

export default Time2;
