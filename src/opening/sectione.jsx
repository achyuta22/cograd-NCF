import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2> {/* Larger font size */}

        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
      </div>
    </div>
  );
};

const CardsPage = () => {
  const cardsData = [
    {
      title: "Chapter1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Chapter2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Chapter3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Chapter4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Chapter5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">

        {/* Heading Section with Background Image */}
        <div className="bg-[url('https://via.placeholder.com/1200')] bg-cover bg-center h-48 flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-white">Supportive Ecosystem</h1>
        </div>

        {/* First row with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>

        {/* Center the last two cards */}
        <div className="flex justify-center mt-6 space-x-6">
          {cardsData.slice(3, 5).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
