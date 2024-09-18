import React, { useState } from "react";

const questions = [
  {
    question:
      "1. What is the primary aim of school education according to the NCFSE 2023?",
    options: [
      "Focus solely on academic excellence",
      "Prepare students for competitive exams",
      "Teach students only technical skills",
      "Foster the holistic development of students",
    ],
    answer: 3,
  },
  {
    question:
      "2. The NCFSE 2023 emphasizes a shift towards which type of learning?",
    options: [
      "Rote learning",
      "Competency-based learning",
      "Memorization-based learning",
      "Textbook-centered learning",
    ],
    answer: 1,
  },
  {
    question:
      "3. Which of the following is NOT listed as a key curricular area in the NCFSE 2023?",
    options: [
      "Languages",
      "Science and Technology",
      "Ethics and Philosophy",
      "Physical Education",
    ],
    answer: 2,
  },
  {
    question:
      "4. According to the NCFSE 2023, what is the role of language education in the curriculum?",
    options: [
      "To develop communication skills and cultural understanding through multilingualism",
      "To focus only on English as the medium of instruction",
      "To limit students to their mother tongue",
      "To prioritize regional languages over all others",
    ],
    answer: 0,
  },
  {
    question:
      "5. What is the goal of integrating arts and aesthetics into the curriculum as per NCFSE 2023?",
    options: [
      "To improve mathematical skills",
      "To foster creativity and self-expression",
      "To reduce the number of academic subjects",
      "To focus on theoretical knowledge only",
    ],
    answer: 1,
  },
];

const Quiz1 = () => {
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
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow-2xl">
      <h1 className="text-2xl font-extrabold text-center text-indigo-800 mb-8">
        Quiz 1
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

export default Quiz1;
