import React from "react";

const PreServiceEducationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Pre-Service Teacher Education</h1>
        <p className="text-lg mt-2">
          Preparing future educators through comprehensive and rigorous training
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {/* Interdisciplinary Curriculum */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interdisciplinary Curriculum</h2>
          <p className="text-gray-700 mb-4">
            Pre-service teacher education should focus on preparing teachers with a robust knowledge base and a strong professional identity through an interdisciplinary curriculum. The four-year Integrated Teacher Education Programme (ITEP) is designed to connect theory with practice, providing student teachers with hands-on experience and a deep understanding of educational practices and theories.
          </p>
        </div>

        {/* Teacher Eligibility and Recruitment */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Teacher Eligibility and Recruitment</h2>
          <p className="text-gray-700">
            The Teacher Eligibility Test (TET) should be extended to encompass all stages of education to ensure that teachers are adequately prepared. The recruitment process should involve rigorous assessments, including interviews and classroom demonstrations, to ensure that only qualified and capable individuals are selected for teaching positions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreServiceEducationPage;
