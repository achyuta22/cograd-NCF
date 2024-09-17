import React from "react";
import { useNavigate } from "react-router-dom";

const Assess2 = () => {
  const navigate = useNavigate();
  const handleNextChapter = () => {
    navigate("/time1");
  };

  const boxItems = [
    { title: "Foundational Stage", route: "/foundation" },
    { title: "Prepratory Stage", route: "/prepatory" },
    { title: "Middle Stage", route: "/middle" },
    { title: "Secondary Stage", route: "/secondary" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stage Specific Categories
          </h2>
          <div className="border-t-4 border-teal-500 mx-auto w-16 mb-4"></div>
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
        onClick={handleNextChapter}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-teal-500 to-teal-700 text-white p-5 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300"
      >
        Next Chapter
      </button>
    </div>
  );
};

export default Assess2;
