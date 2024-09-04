import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
  { id: 1, text: '1975', isCorrect: true },
  { id: 2, text: '1986', isCorrect: false },
  { id: 3, text: '1988', isCorrect: true},
  { id: 4, text: '1992', isCorrect: false },
  { id: 5, text: '2000', isCorrect: true },
  { id: 6, text: '2005', isCorrect: true },
  { id: 7, text: '2023', isCorrect: true },
  { id: 8, text: '2020', isCorrect: false },
  
];

const QuizPage = () => {
    const navigate=useNavigate();
  const [selected, setSelected] = useState([]);

  const handleClick = (optionId) => {
    setSelected([...selected,optionId]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Select Years in whci various nfc's were formed in INDIA?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClick(option.id)}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selected.includes(option.id) 
                ? option.isCorrect
                  ? 'bg-green-500 border-green-700 text-white'
                  : 'bg-red-500 border-red-700 text-white'
                : 'bg-gray-100 border-gray-300'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="flex justify-between m-4" >
        <button
           onClick={()=>{navigate("/history")}}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Revise
        </button>
        <button
        //   onClick={handleNextLesson}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
        >
          Next Lesson
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
