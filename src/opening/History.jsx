import React from "react";
import { useNavigate } from "react-router-dom";
import his1 from "../images/history1.png";

const HistoryPage = () => {
  const navigate = useNavigate();

  // Handler for navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-300 min-h-screen">
      {/* Header Section */}
      <header className="relative bg-blue-800 text-white py-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${his1})`, zIndex: -1 }}
        ></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            History of National Curriculum Framework (NCF)
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            An Overview of the NCF Structure and its Components
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 md:py-12 space-y-8">
        {/* Grid Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image Section */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={his1}
              alt="History of NCF"
              className="rounded-lg shadow-lg w-full max-w-md object-cover transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 space-y-8">
            {/* Approach Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
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
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
                onClick={() => handleNavigate("/approach")}
              >
                Explore More
              </button>
            </section>

            {/* Cross-Cutting Themes Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
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
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
                onClick={() => handleNavigate("/cct")}
              >
                Explore More
              </button>
            </section>
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Subjects Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
              School Subjects
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Learning in the Foundational Stage</li>
              <li>Language Education</li>
              <li>Mathematics Education</li>
              <li>Science Education</li>
              <li>Social Science Education</li>
              <li>Art Education</li>
              <li>Physical Education and Well-being</li>
              <li>Vocational Education</li>
              <li>Subjects in Grades 11 and 12</li>
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
              onClick={() => handleNavigate("/school-subjects")}
            >
              Explore More
            </button>
          </section>

          {/* School Culture and Processes Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
              School Culture and Processes
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>School Culture</li>
              <li>School Processes</li>
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
              onClick={() => handleNavigate("/culture")}
            >
              Explore More
            </button>
          </section>

          {/* Supportive Ecosystem Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
              Creating a Supportive Ecosystem
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Capacity Building for Implementation</li>
              <li>Ensuring an Appropriate Environment for Learning</li>
              <li>Enabling and Empowering Teachers</li>
              <li>Community and Family Engagement</li>
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
              onClick={() => handleNavigate("/ecosystem")}
            >
              Explore More
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HistoryPage;
