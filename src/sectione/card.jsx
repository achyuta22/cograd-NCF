import React from 'react';
import bgImage from '../images/Screenshot_2024_0817_073410.png';
import cardImage1 from '../images/Screenshot_2024_0817_073454.png';
import cardImage3 from '../images/Screenshot_2024_0817_073510.png';
import cardImage4 from '../images/Screenshot_2024_0817_073524.png';
import cardImage5 from '../images/Screenshot_2024_0817_073537.png';

const cards = [
  { id: 1, title: "Capacity building ", image: cardImage1 },
  { id: 3, title: "Ensuring an Appropriate Environment for Learning", image: cardImage3 },
  { id: 4, title: "Enabling and Empowering Teachers", image: cardImage4 },
  { id: 5, title: "Community and Family Engagement", image: cardImage5 },
];

const PageWithCards = () => {
  return (
    <div>
      {/* Heading Section with Background Image */}
      <header
        className="w-full h-64 md:h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-teal-800 opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Creating Supportive Ecosystem
          </h1>
        </div>
      </header>

      {/* Cards Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8">
            Key Areas of Focus
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col" // Ensure content is in column and no extra space
                style={{ height: '275px' }} // Fixed height for cards
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-t-xl" // Fixed height and rounded corners
                />
                <div className="p-4 flex-grow bg-teal-50"> {/* Flex-grow to fill space */}
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">{card.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageWithCards;
