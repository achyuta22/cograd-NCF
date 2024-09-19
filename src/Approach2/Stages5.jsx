import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/Backbutton";

const Stages5 = () => {
  const navigate = useNavigate();
  const handleNextChapter = () => {
    navigate("/approach-learning");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-bold text-teal-900 text-center mb-6">
          Stages Design
        </h1>
        <table className="min-w-full bg-white border border-teal-800 shadow-md rounded-lg">
          <thead className="bg-teal-700 text-white">
            <tr>
              <th className="border border-teal-800 p-4 text-left">Aspect</th>
              <th className="border border-teal-800 p-4 text-left">
                Foundational Stage (Ages 3-8)
              </th>
              <th className="border border-teal-800 p-4 text-left">
                Preparatory Stage (Ages 8-11)
              </th>
              <th className="border border-teal-800 p-4 text-left">
                Middle Stage (Ages 11-14)
              </th>
              <th className="border border-teal-800 p-4 text-left">
                Secondary Stage (Ages 14-18)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-teal-50 transition-colors">
              <td className="border border-teal-800 p-4">Content</td>
              <td className="border border-teal-800 p-4">
                Play-based; focus on basics.
              </td>
              <td className="border border-teal-800 p-4">
                Structured basics in core subjects.
              </td>
              <td className="border border-teal-800 p-4">
                Subject-specific, interdisciplinary.
              </td>
              <td className="border border-teal-800 p-4">
                In-depth study with electives.
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors">
              <td className="border border-teal-800 p-4">Curriculum</td>
              <td className="border border-teal-800 p-4">
                Flexible, holistic development.
              </td>
              <td className="border border-teal-800 p-4">
                Structured with continued flexibility.
              </td>
              <td className="border border-teal-800 p-4">
                Discipline-based, critical thinking.
              </td>
              <td className="border border-teal-800 p-4">
                Specialized, career-oriented.
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors">
              <td className="border border-teal-800 p-4">
                Subject Combination
              </td>
              <td className="border border-teal-800 p-4">
                Language, numeracy, motor skills.
              </td>
              <td className="border border-teal-800 p-4">
                Core subjects (Language, Math, Science, Social Studies), arts.
              </td>
              <td className="border border-teal-800 p-4">
                Core subjects plus introductory vocational subjects.
              </td>
              <td className="border border-teal-800 p-4">
                Core subjects, electives, vocational courses.
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors">
              <td className="border border-teal-800 p-4">Pedagogy</td>
              <td className="border border-teal-800 p-4">
                Play and activity-based.
              </td>
              <td className="border border-teal-800 p-4">
                Interactive, inquiry-based.
              </td>
              <td className="border border-teal-800 p-4">
                Collaborative, experiential.
              </td>
              <td className="border border-teal-800 p-4">
                Analytical, research-based.
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors">
              <td className="border border-teal-800 p-4">Assessment</td>
              <td className="border border-teal-800 p-4">
                Observational, qualitative feedback.
              </td>
              <td className="border border-teal-800 p-4">
                Formative, project-based.
              </td>
              <td className="border border-teal-800 p-4">
                Blend of formative and summative.
              </td>
              <td className="border border-teal-800 p-4">
                Formal exams, standardized tests.
              </td>
            </tr>
            <tr className="hover:bg-teal-50 transition-colors">
              <td className="border border-teal-800 p-4">Teacher's Role</td>
              <td className="border border-teal-800 p-4">
                Nurturer and guide.
              </td>
              <td className="border border-teal-800 p-4">
                Mentor and facilitator.
              </td>
              <td className="border border-teal-800 p-4">
                Subject expert and guide.
              </td>
              <td className="border border-teal-800 p-4">
                Specialist and career counselor.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <BackButton />
      <button
        onClick={handleNextChapter}
        className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next Chapter
      </button>
    </div>
  );
};

export default Stages5;
