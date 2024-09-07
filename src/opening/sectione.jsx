import React, { useState } from 'react';

const Card = ({ title, description, image, keywords, onKeywordClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => onKeywordClick(keyword)}
            >
              {keyword.name}
            </button>
          ))}
        </div>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button> */}
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, keyword }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2">{keyword.name}</h2>
        <p className="text-gray-700">{keyword.description}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CardsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState({ name: '', description: '' });

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedKeyword({ name: '', description: '' });
  };

  const cardsData = [
    {
      title: "Chapter1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
      keywords: [
        { name: "React", description: "A JavaScript library for building user interfaces." },
        { name: "Tailwind", description: "A utility-first CSS framework for creating custom designs." },
        { name: "JavaScript", description: "A programming language for web development." }
      ],
    },
    {
      title: "Chapter2",
      description: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      keywords: [
        { name: "HTML", description: "The standard markup language for creating web pages." },
        { name: "CSS", description: "A style sheet language used for describing the presentation of a document." },
        { name: "Design", description: "The process of creating visual content to communicate messages." }
      ],
    },
    {
      title: "Chapter3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/150",
      keywords: [
        { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
        { name: "Express", description: "A minimal and flexible Node.js web application framework." },
        { name: "API", description: "A set of functions and procedures allowing the creation of applications." }
      ],
    },
    {
      title: "Chapter4",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://via.placeholder.com/150",
      keywords: [
        { name: "MongoDB", description: "A NoSQL database that uses a document-oriented data model." },
        { name: "Database", description: "An organized collection of structured information or data." },
        { name: "NoSQL", description: "A database model that provides a mechanism for storage and retrieval of data." }
      ],
    },
    {
      title: "Chapter5",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://via.placeholder.com/150",
      keywords: [
        { name: "Cloud", description: "A model for delivering information technology services over the internet." },
        { name: "Deployment", description: "The process of making a software application available for use." },
        { name: "DevOps", description: "A set of practices that combines software development and IT operations." }
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        {/* Heading Section with Background Image */}
        <div className="bg-[url('https://via.placeholder.com/1200')] bg-cover bg-center h-48 flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-white">Supportive Ecosystem</h1>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              keywords={card.keywords}
              onKeywordClick={handleKeywordClick}
            />
          ))}
        </div>

        {/* Center the last two cards */}
        <div className="flex justify-center mt-6 gap-6">
          <div className="w-full max-w-sm">
            <Card
              title={cardsData[3].title}
              description={cardsData[3].description}
              image={cardsData[3].image}
              keywords={cardsData[3].keywords}
              onKeywordClick={handleKeywordClick}
            />
          </div>
          <div className="w-full max-w-sm">
            <Card
              title={cardsData[4].title}
              description={cardsData[4].description}
              image={cardsData[4].image}
              keywords={cardsData[4].keywords}
              onKeywordClick={handleKeywordClick}
            />
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          keyword={selectedKeyword}
        />
      </div>
    </div>
  );
};

export default CardsPage;
