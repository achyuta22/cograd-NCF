import React from "react";

const Sectione1mplementationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          NCF Implementation Overview
        </h1>

        {/* Implementation Steps */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Implementation Steps
          </h2>
          <p className="text-gray-600 mb-4">
            The NCF implementation involves several stages, including the
            development of State Curriculum Frameworks (SCFs) and other relevant
            frameworks, the creation of syllabi, textbooks, and other
            educational materials. Curriculum Framework (CF) will be used as a
            general term to refer to these frameworks.
          </p>
        </section>

        {/* Curricular Literacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Curricular Literacy
          </h2>
          <p className="text-gray-600 mb-4">
            Understanding the curriculum framework is essential for all
            stakeholders, including those in public and private schools,
            academic support structures, and teacher education institutions.
            This literacy is critical for the effective implementation of the
            NCF.
          </p>
        </section>

        {/* Key Stakeholders */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Curriculum Framework Literacy for All Stakeholders
          </h2>
          <p className="text-gray-600 mb-4">
            Key stakeholders include teachers, head teachers, principals,
            syllabus developers, and TLM (Teaching-Learning Material)
            developers. Additionally, all personnel in academic and
            administrative support structures, as well as Teacher Education
            institutions, should understand and support the CFs. Parents and
            community members must also be curriculum literate to understand the
            changes in curriculum and processes.
          </p>
        </section>

        {/* Components of Curriculum Framework Literacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Components of Curriculum Framework Literacy
          </h2>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li className="mb-2">
              <strong>Understanding the CF:</strong> Stakeholders must
              comprehend the approaches and principles of the CF to achieve
              educational aims, the key curricular changes, the roles and
              responsibilities of each stakeholder, and the importance of these
              components.
            </li>
            <li className="mb-2">
              <strong>Orientation to the Relevant Curriculum Framework:</strong>{" "}
              SCERT or other relevant bodies will design and develop modules for
              this program, to be implemented by DIETs. An intensive 2-3 day
              orientation program should be designed for each stakeholder group,
              focusing on the specific aspects of the CF relevant to their
              roles.
            </li>
            <li className="mb-2">
              <strong>Specialized Capacity Building:</strong> Academic
              functionaries specializing in areas like Art Education, Vocational
              Education, Physical Education, and Interdisciplinary Areas must
              undergo an intensive face-to-face capacity-building program
              annually for 2-3 years after CF implementation, with at least six
              days of face-to-face interaction and pre-scheduled online
              sessions.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sectione1mplementationPage;
