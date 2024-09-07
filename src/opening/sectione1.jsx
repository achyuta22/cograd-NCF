import React from 'react'

const Sectione1 = () => {
    return(
        <>
    <div className="relative bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://via.placeholder.com/1920x1080"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay with Heading */}
      <div className="relative z-10 text-center text-white p-6 bg-opacity-50 bg-black rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Your Heading Here</h1>
        <p className="text-lg">Your subheading or description here.</p>
      </div>
      
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Points List</h2>
      <div className="inline-flex flex-col gap-4">
        <div className="flex items-start">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
          <p className="text-lg">First point description goes here.</p>
        </div>
        <div className="flex items-start">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
          <p className="text-lg">Second point description goes here.</p>
        </div>
        <div className="flex items-start">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
          <p className="text-lg">Third point description goes here.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sectione1