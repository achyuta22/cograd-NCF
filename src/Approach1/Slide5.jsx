import React from "react";
import { useNavigate } from "react-router-dom";
import aim from "../images/aim.png"; // Adjust the path to your image

const Slide5 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/slide6");
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen py-6 px-4 lg:px-8 flex flex-col">
      <div className="max-w-4xl mx-auto flex-grow">
        <div className="grid gap-8 p-4 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6 text-blue-900">
              Aims of School Education
            </h2>
            <ul className="list-disc list-inside mb-4 text-gray-800 text-base lg:text-lg leading-relaxed space-y-2">
              <li>Rational Thought and Independent Thinking/Autonomy</li>
              <li>Health and Well-being</li>
              <li>Democratic and Community Participation</li>
              <li>Economic Participation</li>
              <li>Cultural Participation</li>
            </ul>
            <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
              A society comprising healthy, knowledgeable individuals with the
              capacities, values, and dispositions to actively engage in
              community life, contribute to the economy, enrich culture, and
              uphold democratic principles would foster a pluralistic,
              prosperous, just, culturally vibrant, and democratic knowledge
              society.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <img
              src={aim}
              alt="education"
              className="w-full h-auto max-w-xs lg:max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Next Page Button */}
      <div className="flex justify-end items-end p-4">
        <button
          onClick={handleNextPage}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Slide5;
