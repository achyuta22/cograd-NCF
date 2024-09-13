import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SchoolSubjectQuiz = () => {
  const navigate=useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [correctSelections, setCorrectSelections] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const questions = [
    {
      question:
        "Which of the following best describes the areas of education that focus on integrating multiple disciplines and preparing students for practical skills and specialized knowledge?",
      options: [
        {
          id: 1,
          text: "Education in Interdisciplinary Areas",
          isCorrect: true,
        },
        { id: 2, text: "Physical Education", isCorrect: false },
        { id: 3, text: "Vocational Education", isCorrect: true },
        { id: 4, text: "Computer Programming", isCorrect: false },
        { id: 5, text: "General Studies", isCorrect: false },
        { id: 6, text: "Subjects in Grades 11 and 12", isCorrect: true },
      ],
    },
    // Add more questions here if needed
  ];

  const currentQuestion = questions[questionIndex];

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option.id)) return;

    setSelectedOptions((prev) => [...prev, option.id]);

    if (option.isCorrect) {
      setCorrectSelections((prev) => [...prev, option.id]);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect.");
    }

    if (correctSelections.length === 2 && option.isCorrect) {
      setShowNext(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOptions([]);
    setCorrectSelections([]);
    setFeedback("");
    setShowNext(false);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Quiz completed! Restarting...");
      setQuestionIndex(0);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Quiz: School Subjects
        </h2>
        <p className="mb-4 text-lg text-gray-700">{currentQuestion.question}</p>
        <ul className="space-y-3">
          {currentQuestion.options.map((option) => (
            <li
              key={option.id}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                selectedOptions.includes(option.id)
                  ? option.isCorrect
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.text}
            </li>
          ))}
        </ul>

        {feedback && (
          <p
            className={`mt-4 text-lg text-center font-semibold ${
              feedback.includes("Incorrect") ? "text-red-600" : "text-green-600"
            }`}
          >
            {feedback}
          </p>
        )}

        {showNext && (
          <button
            onClick={() => {
              navigate("/keyAspects");
            }}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-all duration-300 ease-in-out"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default SchoolSubjectQuiz;
