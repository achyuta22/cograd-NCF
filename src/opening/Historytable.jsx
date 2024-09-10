import React from "react";
import { useNavigate } from "react-router-dom";

const Historytable = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/years");
  };

  return (
    <div className="p-4">
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          National Curriculum Framework Highlights
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-blue-200">
              <tr>
                <th className="px-3 py-3 text-left text-blue-800 text-xs md:text-sm">
                  Aspect
                </th>
                <th className="px-3 py-3 text-left text-blue-800 text-xs md:text-sm">
                  NCF 1975
                </th>
                <th className="px-3 py-3 text-left text-blue-800 text-xs md:text-sm">
                  NCF 1988
                </th>
                <th className="px-3 py-3 text-left text-blue-800 text-xs md:text-sm">
                  NCF 2000
                </th>
                <th className="px-3 py-3 text-left text-blue-800 text-xs md:text-sm">
                  NCF 2005
                </th>
                <th className="px-3 py-3 text-left text-blue-800 text-xs md:text-sm">
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
                  className={`hover:bg-gray-200 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="px-3 py-4 border-b text-gray-700 text-xs md:text-sm font-medium">
                    {row.aspect}
                  </td>
                  {row.values.map((value, idx) => (
                    <td
                      key={idx}
                      className="px-3 py-4 border-b text-gray-600 text-xs md:text-sm"
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
        className="fixed bottom-5 right-5 bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        onClick={handleNextPage}
      >
        Next Page
      </button>
    </div>
  );
};

export default Historytable;
