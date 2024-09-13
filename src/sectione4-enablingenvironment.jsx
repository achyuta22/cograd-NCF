import React from "react";
import { Link } from "react-router-dom";

const EnablingEnvironmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-green-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">
          Ensuring an Enabling Environment for Teachers
        </h1>
        <p className="text-lg mt-2">
          A positive school culture that promotes learning and collaboration,
          characterized by trust and respect, is essential. NEP 2020 emphasizes
          the importance of placing teachers at the center of educational
          reforms, recognizing their critical role in shaping future
          generations. To achieve this, teachers need resource-rich
          environments, professional development opportunities, and a sense of
          pride in their profession.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teacher Autonomy & Accountability Card */}
          <Link
            to="/teacher-autonomy"
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">
              Teacher Autonomy & Accountability
            </h2>
            <p className="text-gray-700">
              Explore how granting autonomy and ensuring accountability enhances
              teaching effectiveness.
            </p>
          </Link>

          {/* Pupil-Teacher Ratio Card */}
          <Link
            to="/pupil-teacher-ratio"
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">Pupil-Teacher Ratio</h2>
            <p className="text-gray-700">
              Learn about the importance of maintaining an optimal pupil-teacher
              ratio for effective education.
            </p>
          </Link>

          {/* Career and Professional Development Card */}
          <Link
            to="/career-development"
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">
              Career and Professional Development
            </h2>
            <p className="text-gray-700">
              Understand the significance of ongoing career and professional
              development for teachers.
            </p>
          </Link>

          {/* In-Service Teacher Education Card */}
          <Link
            to="/in-service-education"
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">
              In-Service Teacher Education
            </h2>
            <p className="text-gray-700">
              Discover the role of in-service education in updating and
              enhancing teachers' skills.
            </p>
          </Link>

          {/* Pre-Service Teacher Education Card */}
          <Link
            to="/pre-service-education"
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">
              Pre-Service Teacher Education
            </h2>
            <p className="text-gray-700">
              Examine the foundational training provided to future teachers
              before they enter the classroom.
            </p>
          </Link>

          {/* Head Teachers & Principals Card */}
          <Link
            to="/head-teachers-principals"
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">
              Head Teachers & Principals
            </h2>
            <p className="text-gray-700">
              Learn about the roles and responsibilities of head teachers and
              principals in supporting the school environment.
            </p>
          </Link>

          {/* Academic and Administrative Functionaries Card */}
          <Link
            to="/academic-administrative-functionaries"
            className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-4">
              Academic and Administrative Functionaries
            </h2>
            <p className="text-gray-700">
              Explore the roles of academic and administrative staff in the
              smooth functioning of schools.
            </p>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-green-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">
          Creating supportive environments for effective teaching and learning.
        </p>
      </div>
    </div>
  );
};

export default EnablingEnvironmentPage;
