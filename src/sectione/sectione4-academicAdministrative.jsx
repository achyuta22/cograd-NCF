import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Screenshot_2024_0817_073524.png';; // Background image for the page

const AcademicAndAdministrativeFunctionaries = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/cards');
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md opacity-90">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">Role of Academic and Administrative Functionaries</h1>
        <p className="text-lg mb-6 text-gray-800 text-center">
          Academic and administrative functionaries play pivotal roles in guiding and supporting school education, ensuring proper resource allocation, and maintaining education quality.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Academic Functionaries</h2>
        <p className="text-lg mb-6 text-gray-800">
          Academic leaders guide school improvement through on-site visits, professional development, and the creation of learning materials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">On-Site Visits</h3>
            <p className="text-gray-800">
              Academic leaders visit schools to provide guidance and support for improvement.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Professional Development</h3>
            <p className="text-gray-800">
              They organize professional development programs to enhance teacher skills.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Learning Materials</h3>
            <p className="text-gray-800">
              Support the creation and distribution of learning materials for schools.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">Administrative Functionaries</h2>
        <p className="text-lg mb-6 text-gray-800">
          Administrative leaders ensure proper resource allocation, manage data, and support special education needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Resource Allocation</h3>
            <p className="text-gray-800">
              Administrative functionaries ensure the allocation of resources to schools.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Data Management</h3>
            <p className="text-gray-800">
              They manage educational data and monitor progress using surveys like NAS.
            </p>
          </div>
          {/* Card 6 */}
          {/* <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Support for Special Needs</h3>
            <p className="text-gray-800">
              Administrative functionaries support the integration of special education needs.
            </p>
          </div> */}
          {/* Card 7 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Technology Integration</h3>
            <p className="text-gray-800">
              They help integrate technology into schools for improved learning and management.
            </p>
          </div>
        </div>

        {/* Button to navigate to /cards */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleNavigate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            View More Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicAndAdministrativeFunctionaries;
