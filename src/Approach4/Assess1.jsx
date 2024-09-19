import React, { useState } from "react";
import app4 from "../images/app4.png";
import app6 from "../images/app6.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/Backbutton";

const Assess1 = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/assess2");
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
            Approach to Assessment
          </h2>
          <div className="border-t-4 border-teal-600 mx-auto w-16 sm:w-24"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Key Principles Box */}
          <div
            className={`relative bg-white border border-teal-600 p-4 sm:p-6 rounded-lg shadow-xl transition-transform transform ${
              activeSection === "keyPrinciples" ? "bg-indigo-50 scale-105" : ""
            } cursor-pointer hover:shadow-2xl`}
            onClick={() => handleBoxClick("keyPrinciples")}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
              Key Principles of Assessment
            </h3>
            {activeSection === "keyPrinciples" && (
              <div className="mt-4 p-4 rounded-lg bg-white shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full max-w-xs md:max-w-md">
                    <img
                      src={app4}
                      alt="Key Principles"
                      className="w-full h-auto object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                  <div className="flex-1 md:pl-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      Key Principles of Effective Assessment
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-lg">
                      <li>Alignment with Learning Goals</li>
                      <li>Formative and Summative Assessment</li>
                      <li>Student-Centered Approach</li>
                      <li>Multiple Assessment Methods</li>
                      <li>Meaningful Feedback</li>
                      <li>Equity and Fairness</li>
                    </ul>
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
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
              Holistic Progress Card
            </h3>
            {activeSection === "holisticProgressCard" && (
              <div className="mt-4 p-6 rounded-lg bg-white shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full max-w-xs md:max-w-md">
                    <img
                      src={app6}
                      alt="Holistic Progress Card"
                      className="w-full h-auto object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                  <div className="flex-1 md:pl-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      Holistic Progress Card
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-lg">
                      <li>
                        <strong>Individualized Reporting:</strong> Detailed
                        insights into each student’s performance.
                      </li>
                      <li>
                        <strong>Competency-Based:</strong> Matches curriculum
                        standards.
                      </li>
                      <li>
                        <strong>Formative and Summative Data:</strong> Includes
                        continuous and final assessments.
                      </li>
                      <li>
                        <strong>Qualitative & Quantitative Information:</strong>{" "}
                        Balances descriptive and numerical data.
                      </li>
                      <li>
                        <strong>Student Self-Reflection:</strong> Promotes
                        self-assessment.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Values and Dispositions Box */}
          <div
            className={`relative border border-teal-600 bg-white p-4 sm:p-6 rounded-lg shadow-xl transition-transform transform ${
              activeSection === "valuesDispositions"
                ? "bg-indigo-50 scale-105"
                : ""
            } cursor-pointer hover:shadow-2xl`}
            onClick={() => handleBoxClick("valuesDispositions")}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
              Values and Dispositions Assessment
            </h3>
            {activeSection === "valuesDispositions" && (
              <div className="mt-4 p-6 rounded-lg bg-white shadow-lg">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      Values and Dispositions Assessment
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-lg">
                      Explore how we evaluate values and dispositions through a
                      holistic lens.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Next Page Button */}
      <BackButton />
      <button
        onClick={handleNextPage}
        className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next
      </button>
    </div>
  );
};

export default Assess1;
