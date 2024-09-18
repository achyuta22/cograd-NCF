import React, { useState } from "react";

const questions = [
  {
    question:
      "1. What is a key responsibility of school leaders according to NCFSE 2023?",
    options: [
      "Create a supportive environment for teaching and learning",
      "Focus solely on administrative tasks",
      "Limit professional development to new teachers only",
      "Avoid engaging with parents and the community",
    ],
    answer: 0,
  },
  {
    question:
      "2. Why is continuous professional development important for teachers under the NCFSE 2023?",
    options: [
      "To comply with bureaucratic requirements",
      "To maintain status quo in teaching practices",
      "To adapt to new pedagogical approaches and technologies",
      "To reduce the need for classroom management",
    ],
    answer: 2,
  },
  {
    question:
      "3. What role do community and parental involvement play in the NCFSE 2023?",
    options: [
      "They are considered optional and not crucial",
      "They are only involved in extracurricular activities",
      "They focus solely on monitoring student performance",
      "They are vital for understanding perspectives and supporting educational initiatives",
    ],
    answer: 3,
  },
  {
    question:
      "4. Which of the following is NOT a focus area for creating a supportive ecosystem as per the NCFSE 2023?",
    options: [
      "Providing adequate resources and infrastructure",
      "Limiting the use of technology in classrooms",
      "Engaging with local organizations and businesses",
      "Ensuring the physical and emotional well-being of students",
    ],
    answer: 1,
  },
  {
    question:
      "5. What does the NCFSE 2023 suggest about policy and governance in relation to implementing the curriculum framework?",
    options: [
      "Policies should be restrictive and discourage innovation",
      "Governance should be centralized and inflexible",
      "Supportive policies are essential for successful implementation",
      "Monitoring and evaluation are optional and not required",
    ],
    answer: 2,
  },
];

const Quiz5 = () => {
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
        Quiz 5: Creating a Supportive Ecosystem
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

export default Quiz5;
