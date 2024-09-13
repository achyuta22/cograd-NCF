import React from "react";

const InServiceEducationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">
          In-Service Teacher Education, Mentoring, and Support
        </h1>
        <p className="text-lg mt-2">
          Ensuring continuous professional growth and support for educators
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {/* Continuous Professional Development */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Continuous Professional Development
          </h2>
          <p className="text-gray-700 mb-4">
            Teacher professional development is an ongoing journey, with
            different teachers at different phases requiring holistic support.
            In-service education is essential, especially during transitions in
            the education system under NEP 2020, to ensure that teachers
            continue to grow and adapt to new educational practices and
            standards.
          </p>
        </div>

        {/* School-Based Support */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">School-Based Support</h2>
          <p className="text-gray-700 mb-4">
            Schools should establish mechanisms for continuous professional
            development, including regular meetings and individual mentoring.
            New teachers should undergo a structured induction process to ease
            their transition, while senior teachers can offer valuable guidance
            as mentors, supporting their peers in professional growth.
          </p>
        </div>

        {/* Academic Support */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Academic Support</h2>
          <p className="text-gray-700">
            Institutions such as NCERT, SCERTs, DIETs, BITEs, BRCs, and CRCs
            play a crucial role in providing academic mentoring and support.
            These organizations ensure that teachers have access to continuous
            professional development opportunities, helping them stay updated
            with the latest educational practices and standards.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-blue-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">
          Committing to continuous improvement and support for teachers to
          enhance their effectiveness and satisfaction.
        </p>
      </div>
    </div>
  );
};

export default InServiceEducationPage;
