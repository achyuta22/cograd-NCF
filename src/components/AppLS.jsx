import React, { useState } from "react";
import app4 from "../images/app4.png";
import app6 from "../images/app6.png";

const AppLS = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-blue-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-teal-800">
            Approach to Assessment
          </h2>
          <div className="border-t-4 border-teal-500 mt-4 mx-auto w-24"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer ${
              activeSection === "keyPrinciples" ? "bg-green-100" : ""
            }`}
            onClick={() => setActiveSection("keyPrinciples")}
          >
            <h3 className="text-xl font-semibold text-teal-800">
              What are the Key Principles of Assessment?
            </h3>
          </div>
          <div
            className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer ${
              activeSection === "holisticProgressCard" ? "bg-green-100" : ""
            }`}
            onClick={() => setActiveSection("holisticProgressCard")}
          >
            <h3 className="text-xl font-semibold text-teal-800">
              How does a Holistic Progress Card look like?
            </h3>
          </div>
          <div
            className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer ${
              activeSection === "valuesDispositions" ? "bg-green-100" : ""
            }`}
            onClick={() => setActiveSection("valuesDispositions")}
          >
            <h3 className="text-xl font-semibold text-teal-800">
              How does Values and dispositions be assessed?
            </h3>
          </div>
        </div>

        {activeSection === "keyPrinciples" && (
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* Image on the Right */}
            <div className="flex-shrink-0 max-w-md mx-auto md:order-2">
              <img
                src={app4}
                alt="Engaging Activities and Assessments"
                className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-300"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1 md:pl-8 md:order-1">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                Key Principles of Effective Assessment
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Alignment with Learning Goals</li>
                <li>Formative and Summative Assessment</li>
                <li>Student-Centered Approach</li>
                <li>Multiple Assessment Methods</li>
                <li>Meaningful Feedback</li>
                <li>Equity and Fairness</li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === "holisticProgressCard" && (
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* Image on the Left */}
            <div className="flex-shrink-0 max-w-md mx-auto md:order-1">
              <img
                src={app6}
                alt="Differentiated Instruction"
                className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-300"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1 md:pl-8 md:order-2">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                Holistic Progress Card
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Individualized Reporting:</strong> Providing detailed
                  information about each student's strengths, weaknesses, and
                  areas for growth.
                </li>
                <li>
                  <strong>Competency-Based:</strong> Aligning with the
                  curriculum's learning outcomes and competencies.
                </li>
                <li>
                  <strong>Formative and Summative Data:</strong> Incorporating
                  both ongoing and end-of-year assessments.
                </li>
                <li>
                  <strong>Qualitative and Quantitative Information:</strong>{" "}
                  Combining descriptive feedback with numerical data.
                </li>
                <li>
                  <strong>Student Self-Reflection:</strong> Encouraging students
                  to take ownership of their learning by including opportunities
                  for self-assessment.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === "valuesDispositions" && (
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* Content for Values and Dispositions */}
            {/* Replace this with the actual content for this section */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                Values and Dispositions Assessment
              </h3>
              <p className="text-gray-700">
                {/* Your content goes here */}
                This section will cover how values and dispositions are
                assessed.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppLS;
