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
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen">
      {/* Header Section */}
      <header className="relative bg-blue-900 text-white py-6 md:py-10">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 shadow-sm">
            History of National Curriculum Framework (NCF)
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            An Overview of the NCF Structure and its Components
          </p>
          <div>
            <img src={his1} alt=""
            className="w-full h-96 mt-4"/>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-6 md:py-10 space-y-3">
        {/* Grid Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Approach Section */}
          <section className="bg-white rounded-lg shadow-md p-5 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
              Approach
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
              <li>Aims and Curricular Areas of School Education</li>
              <li>School Stages — Logic and Design</li>
              <li>Learning Standards, Content, Pedagogy, and Assessment</li>
              <li>Time Allocation</li>
            </ul>
            <button
              className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-md"
              onClick={() => handleNavigate("/approach")}
            >
              Explore More
            </button>
          </section>

          {/* Cross-Cutting Themes Section */}
          <section className="bg-white rounded-lg shadow-md p-5 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
              Cross-Cutting Themes
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
              <li>Rootedness in India and Indian Knowledge Systems</li>
              <li>Values and Dispositions</li>
              <li>Environmental Care</li>
              <li>Inclusion in Schools</li>
              <li>Educational Technology in Schools</li>
            </ul>
            <button
              className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-md"
              onClick={() => handleNavigate("/cct")}
            >
              Explore More
            </button>
          </section>
        </div>

        {/* Additional Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Subjects Section */}
          <section className="bg-white rounded-lg shadow-md p-5 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
              School Subjects
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
              <li>Foundational Stage Learning</li>
              <li>Language Education</li>
              <li>Mathematics Education</li>
              <li>Science & Social Science Education</li>
              <li>Art, Physical, and Vocational Education</li>
            </ul>
            <button
              className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-md"
              onClick={() => handleNavigate("/school-subjects")}
            >
              Explore More
            </button>
          </section>

          {/* School Culture and Processes Section */}
          <section className="bg-white rounded-lg shadow-md p-5 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
              School Culture and Processes
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
              <li>School Culture</li>
              <li>School Processes</li>
            </ul>
            <button
              className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-md"
              onClick={() => handleNavigate("/culture")}
            >
              Explore More
            </button>
          </section>

          {/* Supportive Ecosystem Section */}
          <section className="bg-white rounded-lg shadow-md p-5 transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3">
              Creating a Supportive Ecosystem
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base md:text-lg">
              <li>Capacity Building</li>
              <li>Appropriate Learning Environments</li>
              <li>Empowering Teachers</li>
              <li>Community & Family Engagement</li>
            </ul>
            <button
              className="mt-3 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-md"
              onClick={() => handleNavigate("/sectione")}
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
