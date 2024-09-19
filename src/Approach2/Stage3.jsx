import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Popup from "../components/Popup";
import BackButton from "../components/Backbutton";

const Stage3 = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState({
    visible: false,
    title: "",
    content: "",
  });

  const handleNextPage = () => {
    navigate("/stage4");
  };

  const handleOpenPopup = (title, content) => {
    setPopup({ visible: true, title, content });
  };

  const handleClosePopup = () => {
    setPopup({ visible: false, title: "", content: "" });
  };

  return (
    <div className="bg-gradient-to-b min-h-screen from-gray-50 via-gray-100 to-gray-200 py-2 px-4 md:px-8">
      {/* New Heading and Square Boxes */}
      <div className="my-4 px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center text-teal-800 mb-12">
          Developmental Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left and Right Boxes */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
            <div
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-4 h-32 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Physical Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Rapid height and weight
                        increase. By the first birthday, infants nearly triple
                        their birth weight.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Growth slows down, but
                        muscle tone improves. Strength capacity doubles.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Consistent
                        growth in height and weight. Adolescents experience a
                        growth spurt during puberty.
                      </li>
                      <li>
                        <strong>Puberty:</strong> Girls typically experience it
                        about two years earlier than boys. Body features change
                        for reproduction.
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
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-4 h-32 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Moral Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Infants' sense of right and
                        wrong is initially based on personal needs and desires.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Young children view
                        rules as absolute and judge actions based on their
                        consequences rather than intentions.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Children
                        develop a growing sense of fairness and equity,
                        considering factors like individual circumstances.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Adolescents begin to
                        question existing moral values, developing their ethical
                        framework while considering the broader societal
                        implications of their actions.
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
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-4 h-32 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Cognitive Development",

                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Infants progress from crying
                        to babbling, eventually producing their first words and
                        simple sentences. Vocabulary expands rapidly in the
                        latter part of this stage.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Language skills expand
                        significantly, with children mastering grammar,
                        vocabulary, and conversational skills. They become more
                        attuned to the social aspects of language use.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Language
                        becomes more complex and analytical. Children develop
                        metalinguistic awareness, enabling them to reflect on
                        language use.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Language skills continue
                        to refine, with increased vocabulary, understanding of
                        complex literary devices, and development of distinct
                        peer language styles.
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
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
            <div
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-4 h-32 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Language Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Infants begin to coordinate
                        sensory experiences with physical actions, developing
                        object permanence and basic memory.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Children expand their
                        mental world through language and imagination,
                        developing a basic understanding of people and objects.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong> Children
                        develop logical thinking, problem-solving, and memory
                        skills, enabling them to categorize and analyze
                        information.
                      </li>
                      <li>
                        <strong>Adolescence:</strong> Adolescents acquire
                        abstract reasoning, planning, and evaluation abilities,
                        leading to increased self-awareness and complex thought
                        processes.
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
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-4 h-32 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
              onClick={() =>
                handleOpenPopup(
                  "Emotional Development",
                  <div className="border-t border-teal-200 pt-4">
                    <h4 className="text-teal-500 text-lg font-semibold mb-2">
                      Key Stages:
                    </h4>
                    <ul className="list-disc list-inside text-black text-sm">
                      <li>
                        <strong>Infancy:</strong> Emotions serve as the primary
                        mode of communication between infants and caregivers.
                        Infants exhibit a range of emotions and rely on crying
                        as a primary means of expression.
                      </li>
                      <li>
                        <strong>Early Childhood:</strong> Children develop a
                        broader range of emotions, including self-conscious
                        emotions. They begin to understand and regulate their
                        emotional responses.
                      </li>
                      <li>
                        <strong>Middle and Late Childhood:</strong>{" "}
                        Self-understanding deepens as children engage in social
                        comparison. Self-regulation skills improve, and children
                        develop strategies for managing emotions.
                      </li>
                      <li>
                        <strong>Adolescents:</strong> Identity formation is
                        central to this stage, often accompanied by fluctuations
                        in self-esteem. Societal expectations can impact
                        self-perception during this period.
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
      <BackButton />
      <button
        onClick={handleNextPage}
        className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next
      </button>
    </div>
  );
};

export default Stage3;
