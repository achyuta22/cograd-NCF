import React, { useState } from "react";
import culture3 from "../images/culture3.png";

const Cultureprocess = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <section className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
            School Processes
          </h2>
          <p className="text-gray-800 text-lg lg:text-xl mb-6">
            This chapter outlines the various processes that schools must
            implement to ensure both smooth functioning and progress towards
            curricular goals.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={culture3}
            alt="School Processes"
            className="w-full max-w-md h-auto rounded-lg shadow-xl border-4 border-blue-400"
          />
        </div>
      </section>

      {/* Section 2.1 */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl border border-blue-300 mb-3">
        <h2
          className="text-xl font-bold text-blue-800 cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => toggleSection("section1")}
        >
          Section 2.1: Curricular Processes
        </h2>
        {expandedSection === "section1" && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                School Timetable
              </h3>
              <p className="text-gray-700">
                The importance of a well-structured timetable that accommodates
                various curricular and extracurricular activities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                School Assembly
              </h3>
              <p className="text-gray-700">
                Describes how assemblies can foster a sense of community and
                shared learning.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Library
              </h3>
              <p className="text-gray-700">
                The role of a vibrant library in supporting student learning
                beyond textbooks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Student Committees and Forums
              </h3>
              <p className="text-gray-700">
                Encourages student committees to promote responsibility and
                leadership.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Events and Celebrations
              </h3>
              <p className="text-gray-700">
                Integrating events and celebrations into the academic calendar
                to enhance learning.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Section 2.2 */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl border border-green-300 mb-3">
        <h2
          className="text-xl font-bold text-green-800 cursor-pointer hover:text-green-600 transition-colors"
          onClick={() => toggleSection("section2")}
        >
          Section 2.2: Curriculum-Associated Processes
        </h2>
        {expandedSection === "section2" && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Teacher Collaboration and Professional Development
              </h3>
              <p className="text-gray-700">
                Focuses on the importance of teacher collaboration and ongoing
                professional development to improve teaching quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Engaging with Parents, Families, and Communities
              </h3>
              <p className="text-gray-700">
                Stresses the need for strong relationships between schools and
                the broader community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Mealtime, Health, and Hygiene
              </h3>
              <p className="text-gray-700">
                Highlights the importance of nutrition, health, and hygiene in
                supporting student learning.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Time and Resource Allocation
              </h3>
              <p className="text-gray-700">
                The importance of efficient time and resource allocation in
                school planning.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Section 2.3 */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl border border-red-300 mb-3">
        <h2
          className="text-xl font-bold text-red-800 cursor-pointer hover:text-red-600 transition-colors"
          onClick={() => toggleSection("section3")}
        >
          Section 2.3: Organisational Processes
        </h2>
        {expandedSection === "section3" && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                School Development Plan
              </h3>
              <p className="text-gray-700">
                Outlines the process for creating a school development plan to
                address challenges and achieve educational goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Time and Resource Allocation
              </h3>
              <p className="text-gray-700">
                Discusses the efficient use of time and resources in school
                planning.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Data Management and Reporting
              </h3>
              <p className="text-gray-700">
                Emphasizes effective data management for planning and reporting.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Ensuring Student Safety
              </h3>
              <p className="text-gray-700">
                Covers both physical and emotional safety measures schools must
                implement.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cultureprocess;
