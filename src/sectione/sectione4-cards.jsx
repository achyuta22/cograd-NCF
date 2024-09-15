import React, { useState } from "react";
import headImage from "../images/Screenshot_2024_0817_073537.png"
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
      title: "Inviting Parents to School",
      description: "Capacity building for implementation",
      image: headImage,
      keywords: [
        {
          name: "Participation",
          description:
            "Schools should invite parents and families to participate actively in school functions and celebrations rather than merely being spectators",
        },
        {
          name: "School Operations",
          description:
            "Parents can be invited to observe regular school operations including attending morning assemblies and spending time in classrooms",
        },
        {
          name: "Community",
          description:
            "School should extend enaggement beyond curent parents to larger community. Community can support school invarious ways such as ensuring student enrollment ,rasising funds, health camps etc",
        },
        {
          name: "Infra",
          description:
            "Unused school infrastrucutre can be leverages for community activities during non-school hours,promoting social cohesion  ",
        },
      ],
    },
    {
      title: "Orientation",
      description: "Capacity building for Teachers",
      image: headImage,
      keywords: [
        {
          name: "Intial",
          description:
            "When parents enroll their chldren, they should be provided with an orientation that explains schools mission teaching learning processses and expectations from parents",
        },
        {
          name: "Community",
          description:
            "When members of larger community visit school,similar orientation sessions,tours,or exhibitions should be organized to familiarize them with school operations",
        },
      ],
    },
    {
      title: "Parent Teacher Meetings",
      description: "Ensuring an Appropriate Environment for Learning",
      image: headImage,
      keywords: [
        {
          name: "Approach",
          description:"Parents are indispensable partners in their childrens education, fostering an ongoing and comfortable communication process"
        },
        {
          name: "Updates",
          description:
"Update Parents on progess not just during PTMS but through continous communication . thsi includes sharing updates on academic performance as well as socio emotional developement"        },
        {
          name: "Support",
          description:
"Teachers should also understande home and community context of students. PTMs should focus on what students are learning and efforts being made by school"        },
      ],
    },
    {
      title: "Resource persons",
      description: "Enabling and Empowering Teachers",
      image: headImage,
      keywords: [
        {
          name: "Resource",
          description:
"Parents,community members can serve as resource persons in school. They can contribute academically asssit with local field trips share expertise during specific lessons and align school practices with local context"        },
        {
          name: "Volunteer",
          description:
"Schools should build a database of literate and willing individuals who can volunteer to tutor students"        },
       
      ],
    },
    {
      title: "School Management Committees",
      description: "Community and family Engagement",
      image: headImage,
      keywords: [
        {
          name: "Role",
          description:
"SMC  are official channels for community invlovement. These should include mothers alumni and local individuals with relevant expertise or strong public spirit"        },
        {
          name: "School Development",
          description:
"SMC AND SDP are crucila documents that outline school short term goals aligned with its vision and current vision."        },
        {
          name: "Partnership",
          description:
"A strong partnership between schools and the community can significantly enhance student learning and contribute to community developmemnt. Schools should work to build quality relationships with parents ,families and community t support learning process"        },
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
            Community and Family Engagement
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
