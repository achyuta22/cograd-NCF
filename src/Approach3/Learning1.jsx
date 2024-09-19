import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Learning1 = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/learning2");
  };

  const handlePrevPage = () => {
    navigate("/stage5");
  };
  const boxData = {
    box1: (
      <div className="p-2 bg-white rounded-lg ">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          How does Learning Standards look like?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>
            <strong className="text-green-700">Specific and Actionable:</strong>{" "}
            Clearly defined and relevant to different stages of education.
          </li>
          <li>
            <strong className="text-green-700">
              Aligned with Educational Goals:
            </strong>{" "}
            Directly linked to the overall aims of education.
          </li>
          <li>
            <strong className="text-green-700">Coherent and Connected:</strong>{" "}
            Forming a logical and interconnected system that supports holistic
            development.
          </li>
        </ul>
        <p className="mt-4 text-gray-800">
          By establishing clear and measurable Learning Standards, education can
          be more focused and effective in achieving its desired outcomes.
        </p>
      </div>
    ),
    box2: (
      <div className="p-2 bg-white ">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          From Aims to Learning Outcomes
        </h2>

        {/* Framework Description */}
        <div className="max-w-3xl mx-auto mb-6 text-center">
          <p className="text-lg text-gray-800">
            This framework emphasizes a clear and logical progression from broad
            educational goals to specific, measurable learning objectives. This
            process, known as{" "}
            <strong className="text-green-700">"flow-down"</strong>, ensures
            alignment and coherence across all levels of curriculum development.
          </p>
        </div>

        {/* Hierarchical Structure */}
        <div className="space-y-6">
          {/* Aims of Education */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Aims of Education
            </h2>
            <p className="text-gray-700">
              Derived from the overall vision of education, they outline the
              desired outcomes for students.
            </p>
          </div>

          {/* Curricular Goals */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Curricular Goals
            </h2>
            <p className="text-gray-700">
              Specify the knowledge, skills, and values to be achieved within
              specific subject areas or domains.
            </p>
          </div>

          {/* Competencies */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Competencies
            </h2>
            <p className="text-gray-700">
              Define the capabilities students should develop to meet curricular
              goals.
            </p>
          </div>

          {/* Learning Outcomes */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Learning Outcomes
            </h2>
            <p className="text-gray-700">
              Clearly articulate the specific knowledge, skills, and behaviors
              students should demonstrate.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="text-center mt-6">
          <p className="text-lg text-gray-800">
            This hierarchical structure ensures that all components of the
            curriculum contribute to the overarching goals of education.
          </p>
        </div>
      </div>
    ),
  };

  const [selectedBox, setSelectedBox] = useState(null);

  const closeData = () => {
    setSelectedBox(null);
  };
  return (
    <div className="p-8 bg-gray-50 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-24 text-teal-900">
        Approach to Learning Standards
      </h1>

      <div className="flex justify-center gap-8 mb-4">
        {/* Box 1 */}
        <div
          className="w-80 h-80 flex items-center justify-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={() => setSelectedBox("box1")}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl border border-teal-200">
              <div className="text-lg font-semibold text-teal-800 mb-4">
                Approach to Learning Standards
              </div>
              <div className="text-sm text-gray-700">
                Click to explore the details and learn more about our approach
                to learning standards.
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className="w-80 h-80 flex items-center justify-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={() => setSelectedBox("box2")}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl border border-teal-200">
              <div className="text-lg font-semibold text-teal-800 mb-4">
                From Aims to Learning Outcomes
              </div>
              <div className="text-sm text-gray-700">
                Click to explore the details and learn more about our approach
                to learning outcomes.
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedBox && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-8 border border-gray-300 rounded-lg shadow-xl max-w-lg w-full mx-4 sm:mx-auto overflow-auto max-h-[80vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold transition-transform transform hover:scale-110"
              onClick={closeData}
            >
              &times;
            </button>
            <div className="text-gray-800 text-lg">{boxData[selectedBox]}</div>
          </div>
        </div>
      )}

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

export default Learning1;
