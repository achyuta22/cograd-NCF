import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OutdoorInfrastructureReminderQuiz = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    navigate("/outdoorInfrastructure")
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-6">
      <div className="container mx-auto px-4 md:px-12 py-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Outdoor Infrastructure Reminder Quiz</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What does outdoor infrastructure in schools remind you of?</h2>
          <div className="flex flex-col">
            <label className="mb-2">
              <input
                type="radio"
                name="outdoorInfraReminder"
                value="Parks and Playgrounds"
                checked={selectedOption === "Parks and Playgrounds"}
                onChange={handleChange}
                className="mr-2"
              />
              Parks and Playgrounds
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="outdoorInfraReminder"
                value="Community Centers"
                checked={selectedOption === "Community Centers"}
                onChange={handleChange}
                className="mr-2"
              />
              Community Centers
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="outdoorInfraReminder"
                value="Sports Facilities"
                checked={selectedOption === "Sports Facilities"}
                onChange={handleChange}
                className="mr-2"
              />
              Sports Facilities
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="outdoorInfraReminder"
                value="Gardens and Green Spaces"
                checked={selectedOption === "Gardens and Green Spaces"}
                onChange={handleChange}
                className="mr-2"
              />
              Gardens and Green Spaces
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="outdoorInfraReminder"
                value="Play Equipment"
                checked={selectedOption === "Play Equipment"}
                onChange={handleChange}
                className="mr-2"
              />
              Play Equipment
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="outdoorInfraReminder"
                value="Trees and Greenery"
                checked={selectedOption === "Trees and Greenery"}
                onChange={handleChange}
                className="mr-2"
              />
              Trees and Greenery
            </label>
            <label className="mb-2">
              <input
                type="radio"
                name="outdoorInfraReminder"
                value="Open Spaces for Assembly"
                checked={selectedOption === "Open Spaces for Assembly"}
                onChange={handleChange}
                className="mr-2"
              />
              Open Spaces for Assembly
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

export default OutdoorInfrastructureReminderQuiz;
