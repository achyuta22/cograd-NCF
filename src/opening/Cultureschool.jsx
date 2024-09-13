import React, { useState } from "react";
import culture2 from "../images/culture2.png";

const Cultureschool = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* School Culture Section */}
      <section className="flex flex-col lg:flex-row items-center gap-4 mb-4">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            School Culture
          </h2>
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            The chapter introduces school culture as a key factor in creating an
            effective learning environment, motivating students, and shaping
            their values.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={culture2}
            alt="School Culture"
            className="w-full mb-4 max-w-sm h-auto rounded-lg shadow-lg border-4 border-blue-300"
          />
        </div>
      </section>

      {/* Definition Section */}
      <section className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg border border-blue-200 mb-2">
        <h1
          className="text-xl font-extrabold text-blue-800 cursor-pointer"
          onClick={() => toggleSection("section1")}
        >
          Section 1.1: What is School Culture?
        </h1>
        {expandedSection === "section1" && (
          <div className="bg-blue-50 rounded-lg p-4 mt-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Definition
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                School culture is defined by values, norms, beliefs, behaviors,
                relationships, and practices. These elements influence the
                overall learning experience.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Categories of School Culture
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4 pl-6">
              <li>
                <strong>Relationships:</strong> Focus on the interactions among
                staff, students, and other stakeholders.
              </li>
              <li>
                <strong>Symbols:</strong> Visual displays and celebrations that
                communicate what is valued by the school.
              </li>
              <li>
                <strong>Arrangements and Practices:</strong> Classroom setups,
                school processes, and activities.
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* Impact and Elements Section */}
      <section className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg border border-green-200 mb-2">
        <h1
          className="text-xl font-extrabold text-green-800 cursor-pointer"
          onClick={() => toggleSection("section2")}
        >
          Section 1.2: School Culture and its Impact on Learning
        </h1>
        {expandedSection === "section2" && (
          <div className="bg-green-50 rounded-lg p-4 mt-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Enabling Learning Environment
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                School culture fosters a safe and encouraging environment,
                promoting learning.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Development of Values and Dispositions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Schools systematically cultivate values and dispositions through
              their culture.
            </p>
          </div>
        )}
      </section>

      {/* Constituent Elements Section */}
      <section className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg border border-red-200">
        <h1
          className="text-xl font-extrabold text-red-800 cursor-pointer"
          onClick={() => toggleSection("section3")}
        >
          Section 1.3: Constituent Elements of School Culture
        </h1>
        {expandedSection === "section3" && (
          <div className="bg-red-50 rounded-lg p-4 mt-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-red-700 mb-4">
                Relationships
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Mutual trust, respect, and collaboration are essential
                components of school culture.
              </p>
            </div>
            <div className="mb-6 border-t border-red-200 pt-4">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Symbols</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Schools use visual displays and symbols to communicate core
                values and ideals.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-700 mb-4">
                Arrangements and Practices
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Classroom setups, school assemblies, and parent involvement help
                shape school culture.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cultureschool;
