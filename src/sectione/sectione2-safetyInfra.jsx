import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfrastructureSafety = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-0">
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Safety Infrastructure</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-yellow-700">Choice of Building Material</h2>
            <p className="text-gray-700 mt-2">
              School buildings should be constructed with materials that ensure long-term stability and meet safety standards. Choosing the right materials is crucial for the structural integrity and safety of the building.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-700">Electrification and Plumbing</h2>
            <p className="text-gray-700 mt-2">
              Electrification and plumbing should be standardized and concealed to avoid hazards. Proper installation and regular maintenance are essential to ensure the safety of these systems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-700">Doors, Windows, and Gates</h2>
            <p className="text-gray-700 mt-2">
              Proper doors, windows, and gates should be installed to ensure privacy and safety. Multiple entry and exit points are essential for emergency evacuations and to ensure smooth access and exit.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-red-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-red-700">Safety during Emergencies</h2>
            <p className="text-gray-700 mt-2">
              Schools should have fire safety mechanisms, conduct regular drills, and ensure that safety and first-aid kits are easily accessible. Regular training and preparedness are key to handling emergencies effectively.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/enablingEmpoweringTeachers")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureSafety;
