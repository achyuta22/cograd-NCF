import React from "react";

const CareerAndProfessionalDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-purple-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Career and Professional Development Opportunities</h1>
        <p className="text-lg mt-2">
          Enhancing career growth and progression for teachers
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {/* Equal Growth Opportunities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Equal Growth Opportunities</h2>
          <p className="text-gray-700 mb-4">
            NEP 2020 emphasizes providing equal career growth opportunities for teachers across all stages of school education. This includes improving pay and service conditions to attract and retain talented professionals in the teaching field. Ensuring that teachers have access to fair and equitable growth opportunities is vital for sustaining a motivated and effective teaching workforce.
          </p>
        </div>

        {/* Career Progression */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Career Progression</h2>
          <p className="text-gray-700 mb-4">
            Teachers should have clear opportunities to advance their careers within their current stage of education. It is important that career progression does not require moving to later stages of education unless desired. Teachers should also have the option to transition into roles such as teacher educators or administrative positions if they meet the relevant criteria, fostering a supportive career path within the education sector.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-purple-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">
          Building a robust career framework to support and advance the professional development of educators.
        </p>
      </div>
    </div>
  );
};

export default CareerAndProfessionalDevelopmentPage;
