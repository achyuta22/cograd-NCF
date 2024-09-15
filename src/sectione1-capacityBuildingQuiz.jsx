import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CapacityBuildingQuiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setShowExplanation(true);
  };

  // Use useEffect to navigate after showing the explanation
  useEffect(() => {
    if (showExplanation) {
      const timer = setTimeout(() => {
        navigate("/environmentLearning");
      }, 3000); // Delay navigation by 3 seconds to allow user to read the explanation

      return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }
  }, [showExplanation, navigate]);

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center p-6">
      <div className="bg-teal-600 w-full h-1/4 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white text-center">Capacity Building Quiz</h1>
      </div>

      <div className="container mx-auto px-4 md:px-12 py-6 flex-grow">
        {/* Question */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-2">How often should face-to-face programs be conducted for teachers involved in Art Education, Vocational Education, Physical Education, and Interdisciplinary Areas during the first year post-CF implementation?</h2>
          <form>
            <div className="mb-4">
              <input
                type="radio"
                id="option1"
                name="capacity-building"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option1">Once a year</label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="option2"
                name="capacity-building"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option2">Twice a year</label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="option3"
                name="capacity-building"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option3">Three times a year</label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="option4"
                name="capacity-building"
                value="option4"
                checked={selectedOption === 'option4'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              <label htmlFor="option4">Four times a year</label>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-teal-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-bold mb-2 text-teal-600">Explanation</h2>
            <p className="text-gray-800 leading-relaxed">
              The correct answer is "Twice a year." For teachers involved in Art Education, Vocational Education, Physical Education, and Interdisciplinary Areas, the capacity-building program involves 10-day intensive face-to-face sessions conducted twice in the first year post-CF implementation. This totals 20 days, with additional follow-up and interactions. In the second year and beyond, a single 10-day program along with continued single-day interactions is planned.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapacityBuildingQuiz;
