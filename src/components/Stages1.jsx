import React, { useState } from "react";
import stagesImage from "../images/stages.jpg"; // Update the path according to your file structure
import vikasImage from "../images/vikas.png"; // Update the path according to your file structure
import Popup from "./Popup";
const Stages1 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const toggleDetails = (section) => {
    setShowDetails(section === "stages");
    setShowDetails2(section === "family");
    setShowDetails3(section === "peers");
  };

  const [popup, setPopup] = useState({
    visible: false,
    title: "",
    content: "",
  });

  const handleOpenPopup = (title, content) => {
    setPopup({ visible: true, title, content });
  };

  const handleClosePopup = () => {
    setPopup({ visible: false, title: "", content: "" });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16 px-4 md:px-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center text-teal-800 mb-12">
        School Stages
      </h1>

      {/* Image and Description Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* NEP 2020 Description */}
        <div className="text-lg text-gray-700 leading-relaxed text-center md:text-left p-8 md:w-1/2">
          <p>
            NEP 2020 recommends that schooling will now be imagined in four
            stages in a new 5+3+3+4 design covering ages 3-18, which is based on
            the stages of physical, cognitive, and socioemotional-ethical
            development of children/students.
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={stagesImage}
            alt="Stages"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Secondary Heading */}
      <h2 className="text-4xl font-semibold text-center text-teal-700 mb-8">
        Child Development
      </h2>

      {/* Child Development Description */}
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-4xl mx-auto px-4">
        Child development is influenced by the interplay of three different
        processes, namely, biological processes, cognitive processes, and
        socio-emotional processes. These processes are intricately interwoven
        with each other. Each of these processes plays a role in the physical,
        cognitive, linguistic, socio-emotional, and moral development of a
        child.
      </p>

      {/* Development Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Left Box */}
        <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
          <div
            className={`bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${
              showDetails ? "ring-4 ring-teal-300" : ""
            }`}
            onClick={() => toggleDetails("stages")}
            aria-expanded={showDetails}
            aria-controls="details1"
          >
            <h3 className="text-xl font-bold mb-4 text-center text-white">
              Stages of Child Development
            </h3>
            <p className="text-white text-center text-sm">
              Click to learn more
            </p>
          </div>
        </div>
        {/* Center Box */}
        <div className="flex flex-col col-span-1">
          <div
            className={`bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${
              showDetails2 ? "ring-4 ring-teal-300" : ""
            }`}
            onClick={() => toggleDetails("family")}
            aria-expanded={showDetails2}
            aria-controls="details2"
          >
            <h3 className="text-xl font-bold mb-4 text-center text-white">
              Role of Family in Child Development
            </h3>
            <p className="text-white text-center text-sm">
              Click to learn more
            </p>
          </div>
        </div>
        {/* Right Box */}
        <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
          <div
            className={`bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${
              showDetails3 ? "ring-4 ring-teal-300" : ""
            }`}
            onClick={() => toggleDetails("peers")}
            aria-expanded={showDetails3}
            aria-controls="details3"
          >
            <h3 className="text-xl mb-4 font-bold text-center text-white">
              Role of Peers in Child Development
            </h3>
            <p className="text-white text-center text-sm">
              Click to learn more
            </p>
          </div>
        </div>
      </div>

      {/* Conditionally Rendered Child Development Stages */}
      {showDetails && (
        <div
          id="details1"
          className="bg-white p-8 rounded-xl shadow-lg mb-16 max-w-3xl mx-auto transition-opacity duration-300 ease-in-out opacity-100"
        >
          <h3 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
            Child Development Stages
          </h3>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
            <li>
              <strong>Infancy (birth to 3 years):</strong> This period is
              characterized by rapid growth, dependency on adults, and initial
              exploration of the environment.
            </li>
            <li>
              <strong>Early Childhood (3-6/7 years):</strong> Children become
              more independent, interact with peers, and engage in exploratory
              play during this stage.
            </li>
            <li>
              <strong>Middle to Late Childhood (8-11/12 years):</strong>{" "}
              Physical, emotional, and cognitive development accelerates as
              children master essential life skills and expand their social
              world.
            </li>
            <li>
              <strong>Adolescence (12 years onwards):</strong> Marked by
              physical maturation, identity formation, and a growing desire for
              independence, adolescence is a transitional phase between
              childhood and adulthood.
            </li>
          </ul>
        </div>
      )}
      {showDetails2 && (
        <div
          id="details2"
          className="bg-white p-8 rounded-xl shadow-lg mb-16 max-w-3xl mx-auto transition-opacity duration-300 ease-in-out opacity-100"
        >
          <h3 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
            Role of Family in Child Development
          </h3>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
            <li>
              <strong>Infancy:</strong> Secure attachment bonds and early social
              interactions are crucial for infant development.
            </li>
            <li>
              <strong>Early Childhood:</strong> Families significantly influence
              children's emotional development and sense of security.
            </li>
            <li>
              <strong>Middle Childhood:</strong> While peer relationships become
              more influential, families continue to play a vital role in
              emotional development.
            </li>
            <li>
              <strong>Adolescence:</strong> Peer influence increases, but family
              dynamics still impact emotional and identity development.
            </li>
          </ul>
        </div>
      )}
      {showDetails3 && (
        <div
          id="details3"
          className="bg-white p-8 rounded-xl shadow-lg mb-16 max-w-3xl mx-auto transition-opacity duration-300 ease-in-out opacity-100"
        >
          <h3 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
            Role of Peers in Child Development
          </h3>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
            <li>
              <strong>Early Childhood:</strong> Peers serve as valuable social
              learning partners, providing opportunities for play, cooperation,
              and conflict resolution. While children distinguish between
              friends and acquaintances, parental support remains crucial during
              times of stress.
            </li>
            <li>
              <strong>Middle Childhood:</strong> Peer relationships deepen as
              children form close friendships and peer groups. These social
              connections contribute significantly to emotional development and
              a sense of belonging.
            </li>
            <li>
              <strong>Adolescence:</strong> Peer influence becomes paramount as
              adolescents seek identity, acceptance, and independence. Peer
              groups often shape attitudes, behaviors, and aspirations during
              this stage.
            </li>
          </ul>
        </div>
      )}

      {/* New Heading and Square Boxes */}
      <div className="my-16 px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-center text-teal-800 mb-12">
          Developmental Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left and Right Boxes */}
          <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
            <div
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Physical Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Development of basic emotions
                        and attachment.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Increased emotional
                        awareness and regulation.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Greater
                        understanding and management of complex emotions.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Advanced emotional
                        processing and self-concept development.
                      </li>
                    </ul>
                  </div>
                )
              }
            >
              <h3 className="text-xl font-bold text-center text-white mb-4">
                Physical Development
              </h3>
              <p className="text-white text-center text-sm">
                Click to learn more about the physical changes during different
                developmental stages.
              </p>
            </div>
            <div
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Moral Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Development of basic emotions
                        and attachment.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Increased emotional
                        awareness and regulation.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Greater
                        understanding and management of complex emotions.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Advanced emotional
                        processing and self-concept development.
                      </li>
                    </ul>
                  </div>
                )
              }
            >
              <h3 className="text-xl font-bold text-center text-white mb-4">
                Moral Development
              </h3>
              <p className="text-white text-center text-sm">
                Click to learn more about the development of moral reasoning.
              </p>
            </div>
          </div>
          {/* Center Box */}
          <div className="flex flex-col col-span-1 md:col-span-1">
            <div
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Cognitive Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Development of basic emotions
                        and attachment.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Increased emotional
                        awareness and regulation.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Greater
                        understanding and management of complex emotions.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Advanced emotional
                        processing and self-concept development.
                      </li>
                    </ul>
                  </div>
                )
              }
            >
              <h3 className="text-xl font-bold text-center text-white mb-4">
                Cognitive Development
              </h3>
              <p className="text-white text-center text-sm">
                Click to learn more about cognitive milestones and changes.
              </p>
            </div>
          </div>
          {/* Right Two Vertical Boxes */}
          <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
            <div
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Language Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Development of basic emotions
                        and attachment.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Increased emotional
                        awareness and regulation.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Greater
                        understanding and management of complex emotions.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Advanced emotional
                        processing and self-concept development.
                      </li>
                    </ul>
                  </div>
                )
              }
            >
              <h3 className="text-xl font-bold text-center text-white mb-4">
                Language Development
              </h3>
              <p className="text-white text-center text-sm">
                Click to learn more about language acquisition and growth.
              </p>
            </div>
            <div
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Emotional Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Development of basic emotions
                        and attachment.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Increased emotional
                        awareness and regulation.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Greater
                        understanding and management of complex emotions.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Advanced emotional
                        processing and self-concept development.
                      </li>
                    </ul>
                  </div>
                )
              }
            >
              <h3 className="text-xl font-bold text-center text-white mb-4">
                Emotional Development
              </h3>
              <p className="text-white text-center text-sm">
                Click to learn more about emotional growth throughout childhood.
              </p>
            </div>
          </div>
        </div>

        {/* Popup Component */}
        {popup.visible && (
          <Popup
            title={popup.title}
            content={popup.content}
            onClose={handleClosePopup}
          />
        )}
      </div>

      {/* Panchkosha Vikas Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold text-teal-700 mb-8 text-center md:text-left">
            Panchkosha Vikas
          </h2>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
            <li>
              <strong>Physical Development (Sharirik Vikas):</strong> This
              refers to the development of the physical body and its functions.
            </li>
            <li>
              <strong>Development of Life Energy (Pranik Vikas):</strong> This
              involves the growth and enhancement of vital energy within the
              body.
            </li>
            <li>
              <strong>Emotional/Mental Development (Manasik Vikas):</strong>{" "}
              This encompasses the growth of emotional and mental capacities.
            </li>
            <li>
              <strong>Intellectual Development (Bauddhik Vikas):</strong> This
              pertains to the advancement of cognitive abilities and
              intellectual growth.
            </li>
            <li>
              <strong>Spiritual Development (Chaitsik Vikas):</strong> This
              focuses on the growth of spiritual awareness and understanding.
            </li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={vikasImage}
            alt="Panchkosha Vikas"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-semibold text-teal-800 text-center mb-2">
          Stages Design
        </h1>
        <table className=" border border-teal-800">
          <thead className="bg-teal-600 dark:bg-teal-700">
            <tr>
              <th className="border border-white p-4 text-left">Aspect</th>
              <th className="border border-white p-4 text-left">
                Foundational Stage (Ages 3-8)
              </th>
              <th className="border border-white p-4 text-left">
                Preparatory Stage (Ages 8-11)
              </th>
              <th className="border border-white p-4 text-left">
                Middle Stage (Ages 11-14)
              </th>
              <th className="border border-white p-4 text-left">
                Secondary Stage (Ages 14-18)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-white p-4">Content</td>
              <td className="border border-white p-4">
                Play-based; focus on basics.
              </td>
              <td className="border border-white p-4">
                Structured basics in core subjects.
              </td>
              <td className="border border-white p-4">
                Subject-specific, interdisciplinary.
              </td>
              <td className="border border-white p-4">
                In-depth study with electives.
              </td>
            </tr>
            <tr>
              <td className="border border-white p-4">Curriculum</td>
              <td className="border border-white p-4">
                Flexible, holistic development.
              </td>
              <td className="border border-white p-4">
                Structured with continued flexibility.
              </td>
              <td className="border border-white p-4">
                Discipline-based, critical thinking.
              </td>
              <td className="border border-white p-4">
                Specialized, career-oriented.
              </td>
            </tr>
            <tr>
              <td className="border border-white p-4">Subject Combination</td>
              <td className="border border-white p-4">
                Language, numeracy, motor skills.
              </td>
              <td className="border border-white p-4">
                Core subjects (Language, Math, Science, Social Studies), arts.
              </td>
              <td className="border border-white p-4">
                Core subjects plus introductory vocational subjects.
              </td>
              <td className="border border-white p-4">
                Core subjects, electives, vocational courses.
              </td>
            </tr>
            <tr>
              <td className="border border-white p-4">Pedagogy</td>
              <td className="border border-white p-4">
                Play and activity-based.
              </td>
              <td className="border border-white p-4">
                Interactive, inquiry-based.
              </td>
              <td className="border border-white p-4">
                Collaborative, experiential.
              </td>
              <td className="border border-white p-4">
                Analytical, research-based.
              </td>
            </tr>
            <tr>
              <td className="border border-white p-4">Assessment</td>
              <td className="border border-white p-4">
                Observational, qualitative feedback.
              </td>
              <td className="border border-white p-4">
                Formative, project-based.
              </td>
              <td className="border border-white p-4">
                Blend of formative and summative.
              </td>
              <td className="border border-white p-4">
                Formal exams, standardized tests.
              </td>
            </tr>
            <tr>
              <td className="border border-white p-4">Teacher's Role</td>
              <td className="border border-white p-4">Nurturer and guide.</td>
              <td className="border border-white p-4">
                Mentor and facilitator.
              </td>
              <td className="border border-white p-4">
                Subject expert and guide.
              </td>
              <td className="border border-white p-4">
                Specialist and career counselor.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stages1;
