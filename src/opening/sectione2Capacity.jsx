import React from "react";

const CapacityBuildingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-0">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-0 w-full">
        {/* <h1 className="text-4xl font-bold">Capacity Building Overview</h1> */}
        <p className="text-lg mt-2">
          Building capacity for effective curriculum implementation
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg mt-1">
        <h2 className="text-2xl font-bold mb-3">Overall Approach to Capacity Building</h2>
        <p className="text-gray-700 mb-3">
          Face-to-Face Mode: This is the preferred mode, followed by frequent
          interactions and on-site support, supplemented with digital materials
          and handbooks. Capacity building may be organized by DIETs or other
          bodies, with continuous support from block and cluster-level
          functionaries.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-1">Private Schools</h3>
          <p className="text-gray-600">
            Private schools should participate in these processes or develop
            their own plans to enhance capacity building and ensure alignment
            with the curriculum framework.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-1">Modules for Capacity Building</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>CF literacy</li>
            <li>Learning standards</li>
            <li>Competency-based approaches</li>
            <li>Stage-wise pedagogy and assessment</li>
            <li>Textbooks and experiential learning</li>
            <li>
              Leveraging local resources for various curricular areas
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapacityBuildingPage;
