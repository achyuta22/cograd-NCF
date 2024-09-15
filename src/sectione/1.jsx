import React from 'react';

const Sectione1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Image with Text Overlay */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/1200x400')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Your Image Title</h1>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Card 1</h2>
          <p className="text-gray-700">
            This is a description for card 1. You can add more content here as needed.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Card 2</h2>
          <p className="text-gray-700">
            This is a description for card 2. You can add more content here as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectione1;
