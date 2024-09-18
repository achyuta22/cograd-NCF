import React, { useState } from "react";

const questions = [
  {
    question:
      "1. What is a key focus of the NCFSE 2023 regarding school culture?",
    options: [
      "Enhancing competitive academic achievements",
      "Creating a supportive and inclusive environment",
      "Standardizing school infrastructure",
      "Emphasizing traditional teaching methods",
    ],
    answer: 1,
  },
  {
    question:
      "2. According to the NCFSE 2023, how should schools promote student agency?",
    options: [
      "By providing additional homework",
      "By limiting student participation in school activities",
      "By focusing only on academic performance",
      "By involving students in decision-making processes",
    ],
    answer: 3,
  },
  {
    question:
      "3. Which of the following is emphasized for effective school management under NCFSE 2023?",
    options: [
      "Ensuring clear goals, strategic planning, and efficient resource management",
      "Centralizing decision-making authority",
      "Reducing professional development opportunities for teachers",
      "Limiting feedback and assessment practices",
    ],
    answer: 0,
  },
  {
    question:
      "4. How does the NCFSE 2023 suggest schools should address diversity?",
    options: [
      "By focusing solely on academic subjects",
      "By celebrating cultural, linguistic, and socio-economic diversity",
      "By minimizing the inclusion of diverse perspectives",
      "By standardizing educational practices across all schools",
    ],
    answer: 1,
  },
  {
    question:
      "5. What role does community and parental involvement play according to NCFSE 2023?",
    options: [
      "It is not considered important",
      "It is limited to extracurricular activities only",
      "It helps build partnerships to support student learning and development",
      "It primarily focuses on administrative tasks",
    ],
    answer: 2,
  },
];

const Quiz4 = () => {
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
        Quiz 4: School Culture & School Processes
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

export default Quiz4;
