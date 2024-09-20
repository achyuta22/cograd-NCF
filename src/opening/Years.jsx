import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined, ReloadOutlined } from "@ant-design/icons"; // Ant Design icons

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

  const handleNextPage = () => {
    navigate("/history");
  };

  return (
    <div className="bg-gradient-to-br  from-teal-100 via-teal-200 to-teal-300 p-4 sm:p-8 flex flex-col items-center">
      {/* Main content area */}
      <div className="flex-grow flex flex-col items-center w-full max-w-lg sm:max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-4 sm:mb-10 text-center">
          Select NCF Formation Years in India
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleClick(option.id)}
              className={`p-3 sm:p-5 rounded-lg border-2 shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:scale-105 ${
                selected.includes(option.id)
                  ? option.isCorrect
                    ? "bg-teal-500 border-teal-700 text-white"
                    : "bg-red-500 border-red-700 text-white"
                  : "bg-white border-teal-200 text-teal-900 hover:bg-teal-50"
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* Footer area with fixed buttons */}
      <div className="w-full fixed bottom-0 py-4 sm:py-5 bg-gray-50 shadow-lg">
        <div className="flex justify-between w-full max-w-lg sm:max-w-2xl mx-auto px-4">
          <button
            onClick={() => navigate("/table")}
            className="fixed bottom-4 left-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
          >
            <ReloadOutlined className="mr-2" />
            Revise
          </button>
          <button
            onClick={handleNextPage}
            className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
          >
            <ArrowRightOutlined className="mr-2" />
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
