import React from "react";

const HeadTeachersAndPrincipalsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-0">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-8 w-full">
        <h1 className="text-4xl font-bold">Head Teachers and School Principals</h1>
        <p className="text-lg mt-2">
          Essential roles in fostering a supportive and effective school environment
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        {/* Supportive Leadership */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Supportive Leadership</h2>
          <p className="text-gray-700 mb-4">
            Head teachers and school principals are crucial in creating an empowering culture for teachers. They should assist with class planning, provide necessary resources, observe teaching practices, and foster a learning-centered ethos. Building strong relationships with parents and the community is also a key aspect of their role.
          </p>
        </div>

        {/* Continuous Improvement */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
          <p className="text-gray-700">
            It is vital for head teachers and principals to continuously enhance their skills and capacities. This involves addressing personal biases, maintaining transparent communication, and supporting teachers effectively to ensure a positive and productive school environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadTeachersAndPrincipalsPage;
