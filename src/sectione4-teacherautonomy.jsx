import React from "react";

const TeacherAutonomyAndAccountabilityPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">
          Teacher Autonomy and Accountability
        </h1>
        <p className="text-lg mt-2">
          Balancing autonomy and accountability for effective teaching and
          learning
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {/* Balancing Autonomy and Accountability */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Balancing Autonomy and Accountability
          </h2>
          <p className="text-gray-700 mb-4">
            Teachers are responsible for student learning and must be held
            accountable. However, true accountability is achieved through
            empowerment via autonomy. Accountability in education should not be
            narrowly defined by student test scores alone but should take into
            account the broader context in which teachers operate.
          </p>
        </div>

        {/* Importance of Teacher Autonomy */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            The Importance of Teacher Autonomy
          </h2>
          <p className="text-gray-700 mb-4">
            Competent teachers, when given autonomy, can make sound educational
            judgments and adapt their teaching to meet the diverse needs of
            their students. For autonomy to be effective, it must be linked to
            the teachers' capacity and the environment in which they work.
            Accountability should consider the broader systemic factors that
            influence teacher performance.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-blue-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">
          Fostering an environment where autonomy and accountability are
          balanced enhances educational effectiveness and teacher satisfaction.
        </p>
      </div>
    </div>
  );
};

export default TeacherAutonomyAndAccountabilityPage;
