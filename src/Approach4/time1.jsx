import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/Backbutton";

const Time1 = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/time2");
  };

  const handlePrevPage = () => {
    navigate("/access2");
  };
  const [activeSection, setActiveSection] = useState(null);

  const handleBoxClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Allocation of Time{" "}
          </h2>
          <div className="border-t-4 border-teal-600 mx-auto w-16 sm:w-24"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Key Principles Box */}
          <div
            className={`relative border border-teal-600 bg-white p-4 sm:p-6 rounded-lg shadow-xl transition-transform transform ${
              activeSection === "keyPrinciples" ? "bg-indigo-50 scale-105" : ""
            } cursor-pointer hover:shadow-2xl`}
            onClick={() => handleBoxClick("keyPrinciples")}
          >
            <div className="flex flex-col items-center text-center">
              {" "}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                Reduced Content Load
              </h3>
              <p className="text-sm sm:text-md font-light text-gray-900 mb-2 sm:mb-4">
                click to know more
              </p>
            </div>
            {activeSection === "keyPrinciples" && (
              <div className=" py-3">
                <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                  {/* Content Sections */}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {/* Core Competencies */}
                    <div className="bg-white p-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Focus on Core Competencies
                      </h3>
                      <p className="text-gray-700">
                        Prioritizing the development of essential skills and
                        knowledge over superficial coverage.
                      </p>
                    </div>

                    {/* Time for Exploration */}
                    <div className="bg-white p-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Time for Exploration
                      </h3>
                      <p className="text-gray-700">
                        Allocating adequate time for subjects like Art, Physical
                        Education, and Vocational Education.
                      </p>
                    </div>

                    {/* Efficiency in Teaching and Learning */}
                    <div className="bg-white p-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Efficiency in Teaching and Learning
                      </h3>
                      <p className="text-gray-700">
                        Streamlining content delivery to maximize learning
                        outcomes.
                      </p>
                    </div>

                    {/* Subject-Specific Considerations */}
                    <div className="bg-white p-2 md:col-span-2 lg:col-span-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Subject-Specific Considerations
                      </h3>
                      <p className="text-gray-700">
                        Tailoring content reduction strategies to the unique
                        characteristics of each subject area.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Holistic Progress Card Box */}
          <div
            className={`relative border border-teal-600 bg-white p-4 sm:p-6 rounded-lg shadow-xl transition-transform transform ${
              activeSection === "holisticProgressCard"
                ? "bg-indigo-50 scale-105"
                : ""
            } cursor-pointer hover:shadow-2xl`}
            onClick={() => handleBoxClick("holisticProgressCard")}
          >
            <div className="flex flex-col items-center text-center">
              {" "}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                Time Allocation
              </h3>
              <p className="text-sm sm:text-md font-light text-gray-900 mb-2 sm:mb-4">
                click to know more
              </p>
            </div>
            {activeSection === "holisticProgressCard" && (
              <div className="container mx-auto sm:px-6 lg:px-8">
                {/* Content Section */}
                <div className="bg-white p-2">
                  <ul className="list-disc pl-3 space-y-4 text-gray-700 text-md">
                    <li>
                      <strong>Total Instructional Days:</strong> Approximately
                      220 days per year, excluding holidays and breaks.
                    </li>
                    <li>
                      <strong>Assessment and School Events:</strong> Allocate
                      around 40 days for assessments and school activities.
                    </li>
                    <li>
                      <strong>Effective Instructional Time:</strong>{" "}
                      Approximately 180 days available for core teaching and
                      learning.
                    </li>
                    <li>
                      <strong>School Week Structure:</strong> Consider a
                      five-and-a-half-day school week, with flexibility for
                      schools to adjust based on local needs.
                    </li>
                    <li>
                      <strong>Annual Instructional Hours:</strong> Aim for
                      around 34 working weeks with approximately 29
                      instructional hours per week.
                    </li>
                    <li>
                      <strong>Daily Timetable Flexibility:</strong> Schools can
                      choose to maintain a fixed daily schedule or vary it based
                      on factors like breakfast availability, daylight hours,
                      and subject priorities.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Next Page Button */}
      <button
        onClick={handlePrevPage}
        className="fixed bottom-4 z-10 left-8 bg-gradient-to-br from-red-400 to-red-400 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500 active:scale-95 focus:ring-4 focus:ring-red-300"
      >
        Previous Chapter
      </button>
      <button
        onClick={handleNextPage}
        className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next
      </button>
    </div>
  );
};

export default Time1;
