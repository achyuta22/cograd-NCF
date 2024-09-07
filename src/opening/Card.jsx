import React from 'react';

const Card = ({ title, description, image, keywords, onKeywordClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword, index) => (
            <button
              key={index}
              onClick={() => onKeywordClick(keyword)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              {keyword.name}
            </button>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
      </div>
    </div>
  );
};

export default Card;
