import React, { useState } from 'react';

const SchoolQuiz = () => {
  // Correct answers (array of indices of correct options)
  const correctAnswers = [1, 3, 5];

  // Track the selected answers
  const [selectedAnswers, setSelectedAnswers] = useState(Array(7).fill(null)); // 7 options

  // Function to handle click on option
  const handleAnswerClick = (index) => {
    const updatedAnswers = [...selectedAnswers];
    // If the option is correct, mark it as 'correct', else 'incorrect'
    if (correctAnswers.includes(index)) {
      updatedAnswers[index] = 'correct';
    } else {
      updatedAnswers[index] = 'incorrect';
    }
    setSelectedAnswers(updatedAnswers);
  };

  // Array of options
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ];

  return (
    <div className="p-6 bg-gray-100 text-center">
      <h1 className="text-2xl font-bold mb-6">Choose the Correct Options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-lg font-semibold
              ${selectedAnswers[index] === 'correct' ? 'bg-green-500 text-white' : ''}
              ${selectedAnswers[index] === 'incorrect' ? 'bg-red-500 text-white' : ''}
              ${selectedAnswers[index] === null ? 'bg-gray-200 text-black' : ''}`}
            onClick={() => handleAnswerClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SchoolQuiz;
