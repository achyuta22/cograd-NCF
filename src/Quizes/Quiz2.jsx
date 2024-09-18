import React, { useState } from "react";

const questions = [
  {
    question:
      "1. Which of the following is a primary focus of the 'Sustainability and Environmental Education' theme in the NCFSE 2023?",
    options: [
      "Instilling responsibility towards nature and promoting sustainable practices",
      "Promoting technological advancements",
      "Encouraging economic growth",
      "Fostering competition among students",
    ],
    answer: 0,
  },
  {
    question:
      "2. What is the main objective of Global Citizenship Education (GCE) as described in the NCFSE 2023?",
    options: [
      "Preparing students for local employment opportunities",
      "Encouraging students to excel in competitive exams",
      "Preparing students to be responsible, active participants in a global society",
      "Focusing solely on national issues",
    ],
    answer: 2,
  },
  {
    question:
      "3. How does the NCFSE 2023 propose to address gender sensitivity in education?",
    options: [
      "By creating separate curricula for boys and girls",
      "By integrating gender-sensitive content across all subjects",
      "By minimizing discussions about gender in the classroom",
      "By promoting traditional gender roles",
    ],
    answer: 1,
  },
  {
    question:
      "4. What is a key component of the 'Health and Well-being' theme in the NCFSE 2023?",
    options: [
      "Emphasizing only physical fitness",
      "Promoting mental health, physical fitness, and nutrition education",
      "Focusing solely on academic performance",
      "Encouraging competition in sports",
    ],
    answer: 1,
  },
  {
    question:
      "5. The 'Digital Literacy and Cyber Safety' theme in the NCFSE 2023 primarily aims to:",
    options: [
      "Teach students advanced programming skills",
      "Prepare students for competitive coding competitions",
      "Educate students on responsible and safe use of digital tools",
      "Limit students' access to technology",
    ],
    answer: 2,
  },
];

const Quiz2 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (!submitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: optionIndex,
      });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getOptionClass = (questionIndex, optionIndex) => {
    if (!submitted) return "";
    if (questions[questionIndex].answer === optionIndex)
      return "bg-green-600 text-white border-green-600";
    if (selectedAnswers[questionIndex] === optionIndex)
      return "bg-red-600 text-white border-red-600";
    return "";
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-10 rounded-xl shadow-2xl">
      <h1 className="text-2xl font-extrabold text-center text-indigo-800 mb-8">
        Quiz 2: Cross-Cutting Themes
      </h1>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex} className="mb-8">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            {q.question}
          </h2>
          <div className="space-y-3">
            {q.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleOptionClick(questionIndex, optionIndex)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none ${getOptionClass(
                  questionIndex,
                  optionIndex
                )} ${
                  selectedAnswers[questionIndex] === optionIndex
                    ? "border-2 border-indigo-600"
                    : "border border-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz2;
