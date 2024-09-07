import React from 'react';

// Import the images
import image1 from "../images/vision.png";
import image2 from "../images/vision.png";
import image3 from "../images/vision.png";
import image4 from "../images/vision.png";

const ImageGallery = () => {
  // Array of images and their descriptions
  const galleryData = [
    { image: image1, description: 'A beautiful mountain landscape at sunset.' },
    { image: image2, description: 'A serene beach with crystal clear water.' },
    { image: image3, description: 'A lush green forest with tall trees.' },
    { image: image4, description: 'A night sky full of stars and galaxies.' },
  ];

  return (
    <section className="bg-white py-8 px-4 flex justify-center items-center">
      <div className="relative w-[500px] h-[500px] flex justify-center items-center">
        {/* Circle container */}
        {galleryData.map((item, index) => {
          const angle = (index / galleryData.length) * 360; // Calculate angle for each image
          const x = Math.cos((angle * Math.PI) / 180) * 200; // Calculate X position
          const y = Math.sin((angle * Math.PI) / 180) * 200; // Calculate Y position

          return (
            <div
              key={index}
              className="absolute w-32 h-32 flex flex-col justify-center items-center rounded-full border-4 border-gray-300 bg-white"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img
                src={item.image}
                alt={`Gallery ${index + 1}`}
                className="w-24 h-24 object-cover rounded-full"
              />
              <p className="text-center text-sm mt-2 text-gray-700">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );};

export default ImageGallery;
