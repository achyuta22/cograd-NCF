import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StakeholderQuiz = () => {
  const navigate=useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    alert('All options are important stakeholders in Curriculum Framework Literacy.');
    navigate("/curriculumFramework")
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Stakeholder Quiz</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Who do you think are the main stakeholders involved in Curriculum Framework Literacy?
            </label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="teachers"
                  checked={selectedAnswer === 'teachers'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Teachers</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="head_teachers"
                  checked={selectedAnswer === 'head_teachers'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Head Teachers</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="principals"
                  checked={selectedAnswer === 'principals'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Principals</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="syllabus_developers"
                  checked={selectedAnswer === 'syllabus_developers'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Syllabus Developers</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="tlm_developers"
                  checked={selectedAnswer === 'tlm_developers'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">TLM Developers</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="academic_support"
                  checked={selectedAnswer === 'academic_support'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Academic Support Structures</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="teacher_education"
                  checked={selectedAnswer === 'teacher_education'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Teacher Education Institutions</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="parents"
                  checked={selectedAnswer === 'parents'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Parents</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="stakeholder"
                  value="community_members"
                  checked={selectedAnswer === 'community_members'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Community Members</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

        {isSubmitted && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Your Answer:</h2>
            <p className="text-gray-700">{selectedAnswer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StakeholderQuiz;
