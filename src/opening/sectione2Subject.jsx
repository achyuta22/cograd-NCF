import React from "react";

const CapacityBuildingSubjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-2">
      {/* Header Section */}
      {/* <div className="bg-green-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Capacity Building for Specific Subjects</h1>
        <p className="text-lg mt-2">A structured approach for subject-specific capacity building</p>
      </div> */}

      {/* Main Content Section */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-0">
        {/* Mathematics, Languages, Science, Social Science Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h6 className="text-2xl font-bold mb-4">
            Mathematics, Languages,  Science
          </h6>
          <p className="text-gray-700 mb-4">
            Intensive face-to-face programs of about 10 days, supplemented by single-day interactions at block and cluster levels, spread over a year. This will continue for at least 2-3 years post-CF implementation.
          </p>
          <p className="text-gray-700">
            <strong>Secondary Stage Teachers:</strong> The capacity development must align with the subjects being offered and their design.
          </p>
        </div>

        {/* The World Around Us, Art Education, Vocational Education Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h6 className="text-2xl font-bold mb-4">
            Capacity Building in The World Around Us, 
          </h6>
          <h3 className="text-xl font-semibold mb-3">Special Orientation</h3>
          <p className="text-gray-700 mb-4">
            Teachers may need to teach subjects outside their qualifications due to the curriculum design. For example, Social Science teachers might teach Individuals in Society in Grade 9. Special orientation and intense ongoing support will be necessary.
          </p>
        </div>

        {/* Face-to-Face Programs Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Face-to-Face Programs</h3>
          <p className="text-gray-700 mb-4">
            For these teachers, 10-day intensive face-to-face programs should be conducted twice in the first year post-CF implementation, totaling 20 days. This will be supplemented by follow-up on-site visits and single-day interactions at block and cluster levels.
          </p>
        </div>

        {/* Second Year Post-Implementation Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Second Year Post-Implementation</h3>
          <p className="text-gray-700">
            A single 10-day face-to-face program, with continued single-day interactions, should be planned for 2-3 years after CF implementation.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      {/* <div className="bg-green-600 text-white text-center py-4 w-full mt-8">
        <p className="text-lg">Building a brighter future through capacity building.</p>
      </div> */}
    </div>
  );
};

export default CapacityBuildingSubjectsPage;
