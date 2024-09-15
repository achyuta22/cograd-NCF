import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IndoorInfrastructureQuiz = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    navigate("/indoorInfrastructure1")
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-6">
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Indoor Infrastructure Quiz</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Which aspects are crucial for ensuring effective indoor infrastructure in schools?</h2>
          <div className="flex flex-col">
            <label className="mb-2">
              <input
                type="radio"
                name="indoorInfra"
                value="Classroom Design"
                checked={selectedOption === "Classroom Design"}
                onChange={handleChange}
                className="mr-2"
              />
              Classroom Design
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="indoorInfra"
                value="Library Types"
                checked={selectedOption === "Library Types"}
                onChange={handleChange}
                className="mr-2"
              />
              Library Types
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="indoorInfra"
                value="Laboratories"
                checked={selectedOption === "Laboratories"}
                onChange={handleChange}
                className="mr-2"
              />
              Laboratories
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="indoorInfra"
                value="Dining Area"
                checked={selectedOption === "Dining Area"}
                onChange={handleChange}
                className="mr-2"
              />
              Dining Area
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="indoorInfra"
                value="Toilets"
                checked={selectedOption === "Toilets"}
                onChange={handleChange}
                className="mr-2"
              />
              Toilets
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="indoorInfra"
                value="Semi-open Areas"
                checked={selectedOption === "Semi-open Areas"}
                onChange={handleChange}
                className="mr-2"
              />
              Semi-open Areas
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="indoorInfra"
                value="Utilities"
                checked={selectedOption === "Utilities"}
                onChange={handleChange}
                className="mr-2"
              />
              Utilities
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Submit
          </button>
        </div>
        {submitted && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Your Choice</h2>
            <p className="text-md">
              You selected: <span className="font-semibold">{selectedOption}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndoorInfrastructureQuiz;
