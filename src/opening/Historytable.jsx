import React from "react";
import { useNavigate } from "react-router-dom";

const Historytable = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/years");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <section className="mt-6">
        <h2 className="text-xl font-bold text-teal-700 mb-12 text-center md:text-2xl">
          National Curriculum Framework Highlights
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-teal-500">
              <tr>
                <th className="px-3 py-3 text-left text-white text-sm md:text-base font-semibold">
                  Aspect
                </th>
                <th className="px-3 py-3 text-left text-white text-sm md:text-base font-semibold">
                  NCF 1975
                </th>
                <th className="px-3 py-3 text-left text-white text-sm md:text-base font-semibold">
                  NCF 1988
                </th>
                <th className="px-3 py-3 text-left text-white text-sm md:text-base font-semibold">
                  NCF 2000
                </th>
                <th className="px-3 py-3 text-left text-white text-sm md:text-base font-semibold">
                  NCF 2005
                </th>
                <th className="px-3 py-3 text-left text-white text-sm md:text-base font-semibold">
                  NCF 2023
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  aspect: "Philosophical Approach",
                  values: [
                    "Unity and National Integration",
                    "Cultural Heritage and Values",
                    "Learning without Burden",
                    "Constructivist Learning",
                    "Holistic and Multidisciplinary",
                  ],
                },
                {
                  aspect: "Curriculum Structure",
                  values: [
                    "Uniform Curriculum",
                    "Science and Technology",
                    "Child-Centered, Activity-Based",
                    "Interdisciplinary, Thematic",
                    "Competency-Based, Flexible",
                  ],
                },
                {
                  aspect: "Pedagogy",
                  values: [
                    "Didactic and Prescriptive",
                    "Student-Centered",
                    "Activity-Oriented",
                    "Contextual Learning",
                    "Experiential and Inquiry-Based",
                  ],
                },
                {
                  aspect: "Assessment",
                  values: [
                    "Examinations and Tests",
                    "Comprehensive and Continuous",
                    "Formative and Summative",
                    "Holistic Assessment",
                    "Learner-Centric and Dynamic",
                  ],
                },
                {
                  aspect: "Teacher Role",
                  values: [
                    "Knowledge Transmitter",
                    "Facilitator of Learning",
                    "Guide and Mentor",
                    "Collaborator",
                    "Innovator and Learner",
                  ],
                },
                {
                  aspect: "Student Engagement",
                  values: [
                    "Passive",
                    "Active Participation",
                    "Interactive",
                    "Collaborative Learning",
                    "Participatory and Engaged",
                  ],
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition-colors duration-300 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="px-3 py-4 border-b text-gray-800 text-sm md:text-base font-medium">
                    {row.aspect}
                  </td>
                  {row.values.map((value, idx) => (
                    <td
                      key={idx}
                      className="px-3 py-4 border-b text-gray-700 text-sm md:text-base"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Next Page Button */}
      <button
        className="fixed bottom-8 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
        onClick={handleNextPage}
      >
        Next Page
      </button>
    </div>
  );
};

export default Historytable;
