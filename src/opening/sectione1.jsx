import React, { useState } from "react";
import headImage from "../images/Screenshot_2024_0817_072815.png";
const Card = ({ title, description, image, keywords, onKeywordClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {/* <p className="text-gray-600 mb-4">{description}</p> */}
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white px-3 py-1 rounded"
              // onClick={() => onKeywordClick(keyword)}
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

// const Modal = ({ isOpen, onClose, keyword }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-xl font-bold mb-2">{keyword.name}</h2>
//         <p className="text-gray-700">{keyword.description}</p>
//         <button
//           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

const Sectione1 = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState({
    name: "",
    description: "",
  });

  // const handleKeywordClick = (keyword) => {
  //   setSelectedKeyword(keyword);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedKeyword({ name: "", description: "" });
  // };

  const cardsData = [
    {
      title: "Capacity building for implementation",
      description: "Capacity building for implementation",
      image: headImage,
      keywords: [
        {
          name: "Implementation Overview",
          description:
            "The chapter discuss the steps necessary for implementing framework emphasizing the importance of developing capacity among various stkeholders to ensure succesful execution",
        },
        {
          name: "Ciriculum FrameWork",
          description:
            "Implementation Overview Implementation Steps: The NCF implementation involves several stages, including the development of State Curriculum Frameworks (SCFs) and other relevant frameworks, the creation of syllabi, textbooks, and other educational materials. Curriculum Framework (CF) will be used as a general term to refer to these frameworks.Curricular Literacy: Understanding the curriculum framework is essential for all stakeholders, including those in public and private schools, academic support structures, and teacher education institutions. This literacy is critical for the effective implementation of the NCF.",
        },
       
      ],
    },
    {
      title: "Capacity building for Teachers",
      description: "Capacity building for Teachers",
      image: headImage,
      keywords: [
        {
          name: "Approach",
          description: "The standard markup language for creating web pages.",
        },
        {
          name: "Specific Subjects",
          description:
            "A style sheet language used for describing the presentation of a document.",
        },
        {
          name: "World Around Us",
          description:
            "The process of creating visual content to communicate messages.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        {/* Heading Section with Background Image */}
        <div
          className="bg-cover bg-center h-48 flex items-center justify-center mb-8"
          style={{ backgroundImage: `url(${headImage})` }}
        >
          {" "}
          <h1 className="text-3xl font-bold text-white">
            Supportive Ecosystem
          </h1>
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
              // onKeywordClick={handleKeywordClick}
            />
          ))}
        </div>

        {/* Center the last two cards */}
        

        {/* Modal */}
        {/* <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          keyword={selectedKeyword}
        /> */}
      </div>
    </div>
  );
};

export default Sectione1;
