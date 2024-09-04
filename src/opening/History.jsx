import React from "react";
import his1 from "../images/history1.png";

const HistoryPage = () => {
  return (
    <div className="bg-gradient-to-r from-teal-100 to-blue-100 min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-900 text-white py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${his1})`, zIndex: -1 }}
        ></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            History of the National Curriculum Framework (NCF)
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            An Overview of the NCF Structure and its Components
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-12">
        {/* Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image Section - First Column */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={his1}
              alt="History of NCF"
              className="rounded-lg shadow-xl w-full max-w-md object-cover transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>

          {/* Content Sections - Second and Third Columns */}
          <div className="md:col-span-2 space-y-8">
            {/* Part A: Approach */}
            <section className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl relative">
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                Approach
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Aims and Curricular Areas of School Education</li>
                <li>School Stages — Logic and Design</li>
                <li>
                  Approach to Learning Standards, Content, Pedagogy, and
                  Assessment
                </li>
                <li>Time Allocation</li>
              </ul>
              <button className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                Know More
              </button>
            </section>

            {/* Part B: Cross-Cutting Themes */}
            <section className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                Cross-Cutting Themes
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Rootedness in India and Indian Knowledge Systems</li>
                <li>Values and Dispositions</li>
                <li>Learning about and Caring for the Environment</li>
                <li>Inclusion in Schools</li>
                <li>Guidance and Counselling in Schools</li>
                <li>Educational Technology in Schools</li>
              </ul>
              <button className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                Know More
              </button>
            </section>
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Part C: School Subjects */}
          <section className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              School Subjects
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Learning in the Foundational Stage</li>
              <li>Language Education</li>
              <li>Mathematics Education</li>
              <li>Science Education</li>
              <li>Social Science Education</li>
              <li>Art Education</li>
              <li>Education in Interdisciplinary Areas</li>
              <li>Physical Education and Well-being</li>
              <li>Vocational Education</li>
              <li>Subjects in Grades 11 and 12</li>
            </ul>
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Know More
            </button>
          </section>

          {/* Part D: School Culture and Processes */}
          <section className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              School Culture and Processes
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>School Culture</li>
              <li>School Processes</li>
            </ul>
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Know More
            </button>
          </section>

          {/* Part E: Creating a Supportive Ecosystem */}
          <section className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              Creating a Supportive Ecosystem
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity Building for Implementation</li>
              <li>Ensuring an Appropriate Environment for Learning</li>
              <li>Enabling and Empowering Teachers</li>
              <li>Community and Family Engagement</li>
            </ul>
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Know More
            </button>
          </section>
        </div>

        {/* 6x6 Table Section */}

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            National Curriculum Framework Highlights
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead className="bg-blue-200">
                <tr>
                  <th className="px-6 py-3 border-b text-left text-blue-800">
                    Aspect
                  </th>
                  <th className="px-6 py-3 border-b text-left text-blue-800">
                    NCF 1975
                  </th>
                  <th className="px-6 py-3 border-b text-left text-blue-800">
                    NCF 1988
                  </th>
                  <th className="px-6 py-3 border-b text-left text-blue-800">
                    NCF 2000
                  </th>
                  <th className="px-6 py-3 border-b text-left text-blue-800">
                    NCF 2005
                  </th>
                  <th className="px-6 py-3 border-b text-left text-blue-800">
                    NCF 2023
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="px-6 py-4 border-b text-gray-700">
                    Philosophical Approach
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Unity and National Integration
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Cultural Heritage and Values
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Learning without Burden
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Constructivist Learning
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Holistic and Multidisciplinary
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 border-b text-gray-700">
                    Curriculum Structure
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Uniform Curriculum
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Science and Technology
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Child-Centered, Activity-Based
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Interdisciplinary, Thematic
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Competency-Based, Flexible
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="px-6 py-4 border-b text-gray-700">Pedagogy</td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Didactic and Prescriptive
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Student-Centered
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Activity-Oriented
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Contextual Learning
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Experiential and Inquiry-Based
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 border-b text-gray-700">
                    Assessment
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Examinations and Tests
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Comprehensive and Continuous
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Formative and Summative
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Holistic Assessment
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Learner-Centric and Dynamic
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-gray-200">
                  <td className="px-6 py-4 border-b text-gray-700">
                    Teacher Role
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Knowledge Transmitter
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Facilitator of Learning
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Guide and Mentor
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Collaborator
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Innovator and Learner
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-4 border-b text-gray-700">
                    Student Engagement
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">Passive</td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Active Participation
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Interactive
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Collaborative Learning
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    Participatory and Engaged
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          ;
        </section>
      </main>
    </div>
  );
};

export default HistoryPage;
