import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cct1 from "../images/cct1.png";
import cct2 from "../images/cct2.png";
import cct3 from "../images/cct3.png";
import cct4 from "../images/cct4.png";
import cct5 from "../images/cct5.png";
import cct6 from "../images/cct6.png";
import cct7 from "../images/cct7.png";
import { useNavigate } from "react-router-dom";

const CCT = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const handleNextSection = () => {
    navigate("/school-subjects");
  };
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const cardData = [
    {
      id: 1,
      image: cct2,
      title: "🌳 Rootedness in India",
      description: "Learning about the rich cultural heritage of India.",
      color: "border-teal-400",
      textColor: "text-teal-700",
      content: (
        <div className="p-4 max-h-[50vh] overflow-auto flex flex-col items-start bg-gradient-to-r from-blue-50 to-blue-100 min-w-[300px]">
          <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
            Key Highlights of Integrating Indian Culture
          </h1>
          <p className="text-gray-600 mb-4">
            Emphasizes integrating Indian culture, history, and local wisdom
            into the curriculum to create a sense of pride and identity among
            students. Encourages the inclusion of diverse regional languages,
            arts, crafts, and traditional knowledge systems, and advocates for
            experiential learning methods drawn from India’s heritage.
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">
              Examples
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Incorporating lessons on ancient Indian mathematics (e.g.,
                Aryabhata and Brahmagupta) in the math curriculum.
              </li>
              <li>
                Organizing activities like storytelling sessions on Indian
                epics, local folklore, and traditional festivals to foster
                cultural understanding.
              </li>
              <li>
                Teaching sustainable agricultural practices inspired by
                traditional Indian farming techniques, such as crop rotation and
                organic farming.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      image: cct3,
      title: "❤️ Values & Dispositions",
      description: "Instilling strong moral values and positive dispositions.",
      color: "border-pink-400",
      textColor: "text-pink-700",
      content: (
        <div className="p-4 max-h-[50vh] overflow-auto flex flex-col items-start bg-gradient-to-r from-blue-50 to-blue-100 min-w-[300px] min-h-[200px]">
          <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
            Key Highlights of Values & Dispositions
          </h1>
          <p className="text-gray-600 mb-4">
            Focuses on instilling core values like empathy, respect, honesty,
            and responsibility. Encourages social-emotional skills, critical
            thinking, and ethical decision-making. Promotes an inclusive school
            culture that nurtures self-awareness, resilience, and positive
            attitudes toward learning.
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">
              Examples
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Conducting classroom activities that promote empathy and
                kindness, such as group projects, peer mentoring, and community
                service.
              </li>
              <li>
                Using role-playing exercises to help students navigate ethical
                dilemmas and build decision-making skills.
              </li>
              <li>
                Integrating reflective practices like gratitude journals,
                mindfulness sessions, and discussions on values during
                assemblies.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      image: cct4,
      title: "🌱 Caring for Nature",
      description: "Encouraging respect and care for the environment.",
      color: "border-green-400",
      textColor: "text-green-700",
      content: (
        <div className="p-4 max-h-[50vh] overflow-auto flex flex-col items-start bg-gradient-to-r from-blue-50 to-blue-100 min-w-[300px] min-h-[200px]">
          <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
            Key Highlights of Caring for Nature
          </h1>
          <p className="text-gray-600 mb-4">
            Promotes environmental consciousness through climate education,
            conservation, and sustainable living practices. Encourages hands-on
            activities to instill a sense of stewardship for the planet and
            cultivate a mindset of respect for nature and commitment to
            sustainable development.
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">
              Examples
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Organizing school-wide initiatives like tree-planting drives,
                recycling programs, and ‘zero waste’ challenges.
              </li>
              <li>
                Developing a curriculum unit on local ecosystems and
                biodiversity, where students create projects on endangered
                species or climate action plans.
              </li>
              <li>
                Facilitating outdoor learning experiences such as nature walks,
                visits to conservation sites, or conducting water and energy
                audits of the school campus.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      image: cct5,
      title: "🏫 Inclusion in Schools",
      description: "Promoting inclusive education for all students.",
      color: "border-blue-400",
      textColor: "text-blue-700",
      content: (
        <div className="p-4 max-h-[50vh] overflow-auto flex flex-col items-start bg-gradient-to-r from-blue-50 to-blue-100 min-w-[300px] min-h-[200px]">
          <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
            Key Highlights of Inclusion in Schools
          </h1>
          <p className="text-gray-600 mb-4">
            Advocates for creating a welcoming environment for all students,
            regardless of their backgrounds or learning needs. Focuses on
            differentiated instruction, universal design for learning (UDL), and
            assistive technologies to ensure equal access to education. Promotes
            sensitivity training for educators to build a culture of acceptance,
            diversity, and equity.
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">
              Examples
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Providing accessible learning materials (e.g., Braille books,
                audio resources) and adaptive technology tools (like screen
                readers) for students with disabilities.
              </li>
              <li>
                Implementing peer-support programs where students with different
                abilities or backgrounds learn from and support each other.
              </li>
              <li>
                Offering professional development workshops for teachers on
                inclusive pedagogy, sensitivity training, and differentiated
                instruction strategies.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      image: cct6,
      title: "💬 Guidance & Counselling",
      description: "Offering support and guidance for personal development.",
      color: "border-purple-400",
      textColor: "text-purple-700",
      content: (
        <div className="p-4 max-h-[50vh] overflow-auto flex flex-col items-start bg-gradient-to-r from-blue-50 to-blue-100 min-w-[300px] min-h-[200px]">
          <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
            Key Highlights of Guidance & Counselling
          </h1>
          <p className="text-gray-600 mb-4">
            Emphasizes the need for structured guidance and counseling programs
            to support students’ emotional, social, and academic development.
            Advocates for career counseling to help students make informed
            choices and encourages mental health awareness and social-emotional
            learning (SEL).
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">
              Examples
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Setting up a dedicated counseling center with trained counselors
                to provide individual or group sessions for students facing
                challenges.
              </li>
              <li>
                Conducting regular career guidance workshops, aptitude
                assessments, and interactive sessions with professionals from
                various fields.
              </li>
              <li>
                Integrating social-emotional learning (SEL) modules into the
                curriculum to help students build self-awareness, manage
                emotions, and improve interpersonal skills.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      image: cct7,
      title: "💻 Educational Tech",
      description: "Integrating technology for enhanced learning experiences.",
      color: "border-red-400",
      textColor: "text-red-700",
      content: (
        <div className="p-4 max-h-[50vh] overflow-auto flex flex-col items-start bg-gradient-to-r from-blue-50 to-blue-100 min-w-[300px] min-h-[200px]">
          <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
            Key Highlights of Educational Technology
          </h1>
          <p className="text-gray-600 mb-4">
            Highlights the role of technology as an enabler for personalized,
            engaging, and effective learning experiences. Promotes digital
            literacy, cybersecurity awareness, and the ethical use of
            technology, and encourages the use of AI, virtual labs, and
            collaborative platforms to enhance teaching and learning outcomes.
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-2 border-b pb-2">
              Examples
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Using digital tools and platforms (like Medha AI, Google
                Classroom, Microsoft Teams) for virtual classrooms, assignments,
                and collaborative projects.
              </li>
              <li>
                Introducing coding and robotics clubs to develop computational
                thinking, problem-solving skills, and creativity among students.
              </li>
              <li>
                Implementing interactive digital content such as AR/VR
                experiences to make subjects like history or science more
                engaging and experiential.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="relative w-full h-80 mb-4 rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cct1}
            alt="Cross Cutting Themes Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-blue-500 bg-opacity-60 p-6">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl xl:text-6xl leading-tight tracking-tight text-center shadow-lg">
            Cross Cutting Themes
          </h1>
          <p className="text-white text-center mt-4 max-w-3xl">
            These cross-cutting themes and examples illustrate how schools can
            align with the National Curriculum Framework for School Education
            2023 to provide a holistic, inclusive, and future-ready education.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center md:text-left mb-4">
            Embracing Diversity in Education
          </h2>
          <p className="text-gray-600 text-center md:text-left">
            Understanding and integrating cross-cutting themes that influence
            educational success.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={cct1}
            alt="Educational Theme"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className={`relative bg-white rounded-lg shadow-md p-6 ${card.color} cursor-pointer`}
            onClick={() => handleCardClick(card.id)}
            initial={{ scale: 1, y: 0, zIndex: 1 }}
            animate={{
              scale: selectedCard === card.id ? 1.1 : 1,
              y: selectedCard === card.id ? -20 : 0,
              zIndex: selectedCard === card.id ? 10 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2
              className={`text-xl font-bold mb-2 text-center ${card.textColor}`}
            >
              {card.title}
            </h2>
            <p className="text-gray-600 text-center">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-[40vh] rounded-2xl p-4 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              <div className="text-gray-700">
                {cardData.find((card) => card.id === selectedCard)?.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleNextSection}
        className="fixed bottom-8 z-10 right-8 bg-gradient-to-br from-teal-500 to-teal-700 text-white p-4 sm:p-5 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next Section
      </button>
    </div>
  );
};

export default CCT;
