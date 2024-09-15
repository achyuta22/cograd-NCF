import React from 'react';
import { useNavigate } from 'react-router-dom';

const OutdoorInfrastructure = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-6">
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-12 py-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4 text-teal-700">Outdoor Infrastructure</h1>
          {/* <p className="text-lg text-gray-700">
            Overview: Schools operate in varied environments, and it is crucial to ensure that infrastructure meets basic safety and learning standards.
          </p> */}
        </div>

        {/* Points Section */}
        <div className="space-y-6">
          {/* Basic Structure and Compound Wall */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Basic Structure and Compound Wall</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>School buildings should be permanent, stable structures.</li>
              <li>A secure compound wall and gate are essential to protect the school grounds.</li>
              <li>The compound wall and gate should regulate entry and exit effectively.</li>
            </ul>
          </div>

          {/* Open Space for Play and Safe Assembly */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-green-700">Open Space for Play and Safe Assembly</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Schools should have open spaces for outdoor play and sports.</li>
              <li>Designated areas should be available for gatherings and emergency assemblies.</li>
              <li>Play equipment should be installed for younger students to promote physical activity.</li>
            </ul>
          </div>

          {/* Trees, Plants, and Nature */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">Trees, Plants, and Nature</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>The presence of trees and plants enhances the learning environment.</li>
              <li>Schools could benefit from having a kitchen garden for practical learning experiences.</li>
              <li>Composting pits can be used to promote environmental education and sustainability.</li>
            </ul>
          </div>

          {/* Accessibility and Inclusion */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-purple-700">Accessibility and Inclusion</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>The physical environment must be accessible to students with disabilities.</li>
              <li>Features should include ramps, handrails, and tactile pavers.</li>
              <li>Appropriate signage and assistive devices are necessary for inclusivity.</li>
            </ul>
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/indoorInfraQuiz")} // Adjust the path as necessary
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutdoorInfrastructure;
