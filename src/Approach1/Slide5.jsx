import React from "react";
import { useNavigate } from "react-router-dom";
import aim from "../images/aim.png"; // Adjust the path to your image
import BackButton from "../components/Backbutton";

const Slide5 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/slide6");
  };

  return (
    <div className="bg-gradient-to-b from-teal-50 via-white to-teal-100 min-h-screen flex flex-col py-6 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto flex-grow">
        <div className="grid gap-8 p-4 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-teal-900">
              Aims of School Education
            </h2>
            <ul className="list-disc list-inside mb-4 text-gray-800 text-base lg:text-lg leading-relaxed space-y-3">
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
              className="w-full h-auto max-w-xs lg:max-w-md rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* Next Page Button */}
      <div className="flex justify-end items-end p-4">
        <BackButton />
        <button
          onClick={handleNextPage}
          className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slide5;
