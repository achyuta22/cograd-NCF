import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeadTeachersQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setSelectedAnswers((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = [
      'help with class planning',
      'provide resources',
      'observe classes',
      'foster a learning-centered ethos',
      'build relationships with parents and the community',
      'continuously improve their capacities',
      'work on their biases',
      'maintain transparent communication',
    ];

    const isAllCorrect = correctAnswers.every((answer) => selectedAnswers.includes(answer));
    
    if (isAllCorrect) {
      alert('You are right. All options are correct!');
      navigate('/academic'); // Navigate to the /academic page
    } else {
      alert('Note that .All options are correct. ');
      navigate('/academic'); // Navigate to the /academic page

    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">How Can Head Teachers and School Principals Support Teachers?</h1>

        <form onSubmit={handleSubmit}>
          <p className="text-lg mb-4">Select all the ways head teachers and school principals can support :</p>

          <div className="mb-4">
            <label className="block mb-2">
              <input
                type="checkbox"
                value="help with class planning"
                checked={selectedAnswers.includes('help with class planning')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Help with class planning</span>
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                value="provide resources"
                checked={selectedAnswers.includes('provide resources')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Provide resources</span>
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                value="observe classes"
                checked={selectedAnswers.includes('observe classes')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Observe classes</span>
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                value="foster a learning-centered ethos"
                checked={selectedAnswers.includes('foster a learning-centered ethos')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Foster a learning-centered ethos</span>
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                value="build relationships with parents and the community"
                checked={selectedAnswers.includes('build relationships with parents and the community')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Build relationships with parents and the community</span>
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                value="continuously improve their capacities"
                checked={selectedAnswers.includes('continuously improve their capacities')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Continuously improve their capacities</span>
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                value="work on their biases"
                checked={selectedAnswers.includes('work on their biases')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Work on their biases</span>
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                value="maintain transparent communication"
                checked={selectedAnswers.includes('maintain transparent communication')}
                onChange={handleAnswerChange}
              />
              <span className="ml-2">Maintain transparent communication</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeadTeachersQuiz;
