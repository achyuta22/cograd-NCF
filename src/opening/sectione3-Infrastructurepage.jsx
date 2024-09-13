import React from "react";

const InfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Infrastructure for Safe and Inclusive Schools</h1>
        <p className="text-lg mt-2">Ensuring a secure and inclusive environment for all students</p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Safety Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Infrastructure that Ensures Safety</h2>
            <p className="text-gray-700 mb-4">
              <strong>Overview:</strong> Safety in schools starts with the choice of building materials and extends to ensuring safety during emergencies.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li><strong>Choice of Building Material:</strong> School buildings should be constructed with materials that ensure long-term stability and meet safety standards.</li>
              <li><strong>Electrification and Plumbing:</strong> These should be standardized and concealed for safety.</li>
              <li><strong>Doors, Windows, and Gates:</strong> Proper installation is essential for privacy and safety. Multiple entry and exit points should be provided for emergency evacuations.</li>
              <li><strong>Safety during Emergencies:</strong> Schools should have fire safety mechanisms, conduct regular drills, and ensure that safety and first-aid kits are easily accessible.</li>
            </ul>
          </div>

          {/* Inclusion Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Infrastructure that Ensures Inclusion</h2>
            <p className="text-gray-700 mb-4">
              <strong>Overview:</strong> All common spaces in schools should be accessible to all students, including those with disabilities. Proper infrastructure, such as barrier-free access to various parts of the school, is crucial for inclusivity.
            </p>
            <p className="text-gray-700">
              Inadequate infrastructure, particularly poor sanitation facilities, can create barriers for specific groups of students, such as adolescent girls, leading to poor school attendance.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-blue-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">Creating a safe and inclusive environment for effective learning.</p>
      </div>
    </div>
  );
};

export default InfrastructurePage;
