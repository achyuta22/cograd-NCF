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
  const [selectedKeyword, setSelectedKeyword] = useState({
    name: "",
    description: "",
  });

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedKeyword({ name: "", description: "" });
  };

  const cardsData = [
    {
      title: "Capacity building for implementation",
      description: "Capacity building for implementation",
      image: headImage,
      keywords: [
        {
          name: "Overview",
          description:
            "The chapter discuss the steps necessary for implementing framework emphasizing the importance of developing capacity among various stkeholders to ensure succesful execution",
        },
        {
          name: "Implementation",
          description:
            "Implementation Overview Implementation Steps: The NCF implementation involves several stages, including the development of State Curriculum Frameworks (SCFs) and other relevant frameworks, the creation of syllabi, textbooks, and other educational materials. Curriculum Framework (CF) will be used as a general term to refer to these frameworks.Curricular Literacy: Understanding the curriculum framework is essential for all stakeholders, including those in public and private schools, academic support structures, and teacher education institutions. This literacy is critical for the effective implementation of the NCF.",
        },
        {
          name: "Curriculum",
          description: "Curriculum Framework Literacy for All Stakeholders Stakeholders Involved: Key stakeholders include teachers, head teachers, principals, syllabus developers, and TLM (Teaching-Learning Material) developers. Additionally, all personnel in academic and administrative support structures, as well as Teacher Education institutions, should understand and support the CFs. Parents and community members must also be curriculum literate to understand the changes in curriculum and processes. Components of Curriculum Framework Literacy: Understanding the CF: Stakeholders must comprehend the approaches and principles of the CF to achieve educational aims, the key curricular changes, the roles and responsibilities of each stakeholder, and the importance of these components.Orientation to the Relevant Curriculum Framework: SCERT or other relevant bodies will design and develop modules for this program, to be implemented by DIETs. An intensive 2-3 day orientation program should be designed for each stakeholder group, focusing on the specific aspects of the CF relevant to their roles.Specialized Capacity Building: Academic functionaries specializing in areas like Art Education, Vocational Education, Physical Education, and Interdisciplinary Areas must undergo an intensive face-to-face capacity-building program annually for 2-3 years after CF implementation, with at least six days of face-to-face interaction and pre-scheduled online sessions.",
        },
      ],
    },
    {
      title: "Capacity building for Teachers",
      description: "Capacity building for Teachers",
      image: headImage,
      keywords: [
        {
          name: "HTML",
          description: "The standard markup language for creating web pages.",
        },
        {
          name: "CSS",
          description:
            "A style sheet language used for describing the presentation of a document.",
        },
        {
          name: "Design",
          description:
            "The process of creating visual content to communicate messages.",
        },
      ],
    },
    {
      title: "Ensuring an Appropriate Environment for Learning",
      description: "Ensuring an Appropriate Environment for Learning",
      image: headImage,
      keywords: [
        {
          name: "Node.js",
          description:
            "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        {
          name: "Express",
          description:
            "A minimal and flexible Node.js web application framework.",
        },
        {
          name: "API",
          description:
            "A set of functions and procedures allowing the creation of applications.",
        },
      ],
    },
    {
      title: "Enabling and Empowering Teachers",
      description: "Enabling and Empowering Teachers",
      image: headImage,
      keywords: [
        {
          name: "MongoDB",
          description:
            "A NoSQL database that uses a document-oriented data model.",
        },
        {
          name: "Database",
          description:
            "An organized collection of structured information or data.",
        },
        {
          name: "NoSQL",
          description:
            "A database model that provides a mechanism for storage and retrieval of data.",
        },
      ],
    },
    {
      title: "Community and family Engagement",
      description: "Community and family Engagement",
      image: headImage,
      keywords: [
        {
          name: "Cloud",
          description:
            "A model for delivering information technology services over the internet.",
        },
        {
          name: "Deployment",
          description:
            "The process of making a software application available for use.",
        },
        {
          name: "DevOps",
          description:
            "A set of practices that combines software development and IT operations.",
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
