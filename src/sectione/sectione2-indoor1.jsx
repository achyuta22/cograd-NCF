import React from 'react';
import classroomImage from '../images/vision.png';
import libraryImage from '../images/vision.png';
import labImage from '../images/vision.png';

const IndoorInfrastructurePart1 = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-6">
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Indoor Infrastructure Overview - Part 1</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div 
            className="bg-blue-800 p-6 rounded-lg shadow-md text-white flex flex-col justify-between"
            // style={{ backgroundImage: `url(${classroomImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-2xl font-bold">Classrooms</h2>
            <p className="mt-2">
              Classrooms should be well-ventilated, well-lit, and designed to accommodate flexible seating arrangements and various learning activities. They should also be accessible to students with disabilities.
            </p>
          </div>

          {/* Card 2 */}
          <div 
            className="bg-green-800 p-6 rounded-lg shadow-md text-white flex flex-col justify-between"
            // style={{ backgroundImage: `url(${libraryImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-2xl font-bold">Libraries</h2>
            <p className="mt-2">
              Depending on the space available, schools can have different types of libraries:
              <ul className="list-disc ml-6 mt-2">
                <li><strong>School Library:</strong> A separate room with a wide range of books and resources.</li>
                <li><strong>Classroom Library Corner:</strong> A smaller library setup within a classroom.</li>
                <li><strong>Community Library:</strong> A library extended for community use, promoting reading and learning beyond school hours.</li>
              </ul>
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="bg-red-800 p-6 rounded-lg shadow-md text-white flex flex-col justify-between"
            // style={{ backgroundImage: `url(${labImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h2 className="text-2xl font-bold">Laboratories</h2>
            <p className="mt-2">
              Laboratories should be accessible to students during learning hours and should extend beyond science to include other subjects, allowing students to explore and experiment.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="/indoorInfrastructure2" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Next Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndoorInfrastructurePart1;
