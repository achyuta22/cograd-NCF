import React from "react";

const PupilTeacherRatioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-green-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Pupil-Teacher Ratio (PTR)</h1>
        <p className="text-lg mt-2">
          Understanding the impact of PTR on student engagement and achievement
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {/* Significance of PTR */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Significance of PTR</h2>
          <p className="text-gray-700 mb-4">
            The right Pupil-Teacher Ratio (PTR) is essential for providing individual attention to students. A lower PTR facilitates better engagement and achievement, particularly in the early years of schooling. It ensures that each student receives the attention needed to foster their learning and development, which increases the likelihood of their continued education.
          </p>
        </div>

        {/* Improving PTR */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Improving PTR</h2>
          <p className="text-gray-700 mb-4">
            To improve PTR effectively, it is crucial to focus on appointing and professionally developing qualified teachers rather than hiring underqualified staff. Additionally, the PTR should account for students' home resources; lower PTRs are particularly necessary in areas where students lack adequate support at home. By addressing these factors, schools can ensure that they provide a supportive and effective learning environment for all students.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-green-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">
          Achieving an optimal PTR is key to enhancing student engagement and success through individualized attention and support.
        </p>
      </div>
    </div>
  );
};

export default PupilTeacherRatioPage;
