import React from "react";

const AcademicAndAdministrativeFunctionariesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Role of Academic and Administrative Functionaries</h1>
        <p className="text-lg mt-2">
          Key roles in enhancing school education and administration
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {/* Academic Functionaries */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Academic Functionaries</h2>
          <p className="text-gray-700">
            Academic functionaries are pivotal in guiding and improving school education. They assist schools through on-site visits, provide professional development opportunities, and help in the creation of learning materials. Their support is crucial for the continuous enhancement of educational quality and effectiveness.
          </p>
        </div>

        {/* Administrative Functionaries */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Administrative Functionaries</h2>
          <p className="text-gray-700">
            Administrative functionaries play an essential role in managing school resources, overseeing data management, and supporting special education needs. They are also instrumental in integrating technology into the educational process and monitoring education quality through assessments like the National Achievement Survey (NAS).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicAndAdministrativeFunctionariesPage;
