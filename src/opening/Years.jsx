import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { id: 1, text: "1975", isCorrect: true },
  { id: 2, text: "1986", isCorrect: false },
  { id: 3, text: "1988", isCorrect: true },
  { id: 4, text: "1992", isCorrect: false },
  { id: 5, text: "2000", isCorrect: true },
  { id: 6, text: "2005", isCorrect: true },
  { id: 7, text: "2023", isCorrect: true },
  { id: 8, text: "2020", isCorrect: false },
];

const QuizPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const handleClick = (optionId) => {
    if (!selected.includes(optionId)) {
      setSelected([...selected, optionId]);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Select Years in which various NFCs were formed in India
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClick(option.id)}
            className={`p-4 rounded-lg border-2 shadow-lg transition-transform transform ${
              selected.includes(option.id)
                ? option.isCorrect
                  ? "bg-green-500 border-green-700 text-white scale-105"
                  : "bg-red-500 border-red-700 text-white scale-105"
                : "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="flex justify-between w-full max-w-3xl mt-6">
        <button
          onClick={() => navigate("/history")}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Revise
        </button>
        <button
          // onClick={handleNextLesson}
          className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors transform hover:scale-105"
        >
          Next Lesson
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
