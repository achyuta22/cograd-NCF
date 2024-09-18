import React, { useState } from "react";

const questions = [
  {
    question:
      "1. Which of the following is emphasized in the interdisciplinary approach outlined in the NCFSE 2023?",
    options: [
      "Integrating subjects to highlight interconnectedness",
      "Focusing solely on core subjects",
      "Teaching subjects in isolation",
      "Prioritizing rote memorization",
    ],
    answer: 0,
  },
  {
    question:
      "2. In the Preparatory Stage (Ages 8-11), which subjects are introduced according to NCFSE 2023?",
    options: [
      "Advanced sciences and vocational subjects",
      "Languages, mathematics, science, social studies, and the arts",
      "Only mathematics and language",
      "Only arts and physical education",
    ],
    answer: 1,
  },
  {
    question:
      "3. What is the focus of the curriculum in the Secondary Stage (Ages 14-18) as per NCFSE 2023?",
    options: [
      "Providing a rigid curriculum with no subject choices",
      "Offering flexibility in subject choices based on student interests and career aspirations",
      "Emphasizing only basic education and life skills",
      "Focusing exclusively on vocational training",
    ],
    answer: 1,
  },
  {
    question: "4. How does the NCFSE 2023 address language education?",
    options: [
      "By limiting language education to the national language only",
      "By excluding local languages from the curriculum",
      "By focusing only on English as the medium of instruction",
      "By promoting multilingual education and proficiency in at least three languages",
    ],
    answer: 3,
  },
  {
    question:
      "5. Which emerging areas are included in the curriculum according to the NCFSE 2023?",
    options: [
      "Only traditional academic subjects",
      "Basic reading and writing skills",
      "Artificial intelligence, environmental studies, coding, and financial literacy",
      "Only physical education and sports",
    ],
    answer: 2,
  },
];

const Quiz3 = () => {
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
        Quiz 3: School Subject
      </h1>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex} className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
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

export default Quiz3;
