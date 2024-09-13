import React from "react";

const SafetyAndInclusionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">
          Infrastructure Ensuring Safety and Inclusion
        </h1>
        <p className="text-lg mt-2">
          Building a secure and inclusive environment for all students
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Safety Infrastructure Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Infrastructure that Ensures Safety</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Choice of Building Material</h3>
              <p className="text-gray-700">
                School buildings should be constructed with materials that ensure long-term stability and meet safety standards.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Electrification and Plumbing</h3>
              <p className="text-gray-700">
                These systems should be standardized and concealed to enhance safety and prevent hazards.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Doors, Windows, and Gates</h3>
              <p className="text-gray-700">
                Proper installation of doors, windows, and gates is crucial to ensure privacy and safety. Multiple entry and exit points should be available for emergency evacuations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Safety during Emergencies</h3>
              <p className="text-gray-700">
                Schools should have fire safety mechanisms, conduct regular drills, and ensure that safety and first-aid kits are easily accessible.
              </p>
            </div>
          </div>

          {/* Inclusion Infrastructure Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Infrastructure that Ensures Inclusion</h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Barrier-Free Access</h3>
              <p className="text-gray-700">
                All common spaces in schools should be accessible to all students, including those with disabilities. Proper infrastructure is essential for barrier-free access to various parts of the school.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Sanitation Facilities</h3>
              <p className="text-gray-700">
                Inadequate infrastructure, particularly poor sanitation facilities, can create barriers for specific groups of students, such as adolescent girls. Ensuring good sanitation facilities is crucial to maintain high school attendance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-blue-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">
          Creating safe and inclusive learning environments for every student.
        </p>
      </div>
    </div>
  );
};

export default SafetyAndInclusionPage;
