import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Data for each box
const boxData = {
  box3: (
    <div className="p-2">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-teal-900">
        Principles of Effective Pedagogy
      </h1>

      <div className="max-w-4xl mx-auto bg-white ">
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Knowledge Acquisition
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong className="text-teal-600">Active Learning:</strong>{" "}
              Students construct knowledge through engagement and exploration.
            </li>
            <li>
              <strong className="text-teal-600">Meaningful Connections:</strong>{" "}
              New information should be linked to prior knowledge.
            </li>
            <li>
              <strong className="text-teal-600">The Role of Memory:</strong>{" "}
              Memory is essential for learning, but rote memorization should be
              avoided in favor of deeper understanding.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Skill Development
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong className="text-teal-600">Practice and Feedback:</strong>{" "}
              Deliberate practice is crucial for skill mastery.
            </li>
            <li>
              <strong className="text-teal-600">Real-World Application:</strong>{" "}
              Skills should be taught in context to enhance relevance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Value Formation
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              <strong className="text-teal-600">
                Modeling and Role-Modeling:
              </strong>{" "}
              Teachers and school culture serve as powerful influences on
              students' values.
            </li>
            <li>
              <strong className="text-teal-600">Experiential Learning:</strong>{" "}
              Engaging in activities that promote desired values.
            </li>
            <li>
              <strong className="text-teal-600">
                Critical Thinking and Dialogue:
              </strong>{" "}
              Encouraging students to question, reflect, and form their own
              opinions.
            </li>
          </ul>
        </section>

        <p className="mt-6 text-gray-700 text-center">
          By incorporating these principles into classroom practice, teachers
          can create engaging and effective learning experiences that lead to
          the development of knowledge, skills, and values.
        </p>
      </div>
    </div>
  ),
  box4: (
    <div className="p-2">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-teal-900">
        Key Elements of Effective Pedagogy
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6">
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Creating a Supportive Learning Environment
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-teal-600">Respect and Inclusion:</strong>{" "}
              Ensuring all students feel valued and have equal opportunities to
              succeed.
            </li>
            <li>
              <strong className="text-teal-600">Caring Relationships:</strong>{" "}
              Building strong bonds between teachers and students to foster
              trust and emotional well-being.
            </li>
            <li>
              <strong className="text-teal-600">
                Safe and Stimulating Spaces:
              </strong>{" "}
              Designing classrooms that promote learning, exploration, and
              collaboration.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Effective Teaching Practices
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-teal-600">
                Student-Centered Learning:
              </strong>{" "}
              Focusing on students' needs, interests, and prior knowledge.
            </li>
            <li>
              <strong className="text-teal-600">
                Differentiated Instruction:
              </strong>{" "}
              Adapting teaching to meet the diverse needs of learners.
            </li>
            <li>
              <strong className="text-teal-600">Scaffolding:</strong> Providing
              appropriate support to help students progress.
            </li>
            <li>
              <strong className="text-teal-600">Formative Assessment:</strong>{" "}
              Using ongoing assessment to inform instruction and provide timely
              feedback.
            </li>
            <li>
              <strong className="text-teal-600">Collaborative Learning:</strong>{" "}
              Encouraging students to work together to solve problems and share
              ideas.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Developing Essential Skills
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-teal-600">Critical Thinking:</strong>{" "}
              Fostering students' ability to analyze information, evaluate
              evidence, and draw conclusions.
            </li>
            <li>
              <strong className="text-teal-600">Problem-Solving:</strong>{" "}
              Helping students develop strategies for overcoming challenges.
            </li>
            <li>
              <strong className="text-teal-600">Communication:</strong>{" "}
              Encouraging effective oral, written, and digital communication.
            </li>
            <li>
              <strong className="text-teal-600">Creativity:</strong> Cultivating
              students' imagination and ability to generate new ideas.
            </li>
          </ul>
        </section>
      </div>
    </div>
  ),
  box5: (
    <div className="p-2 ">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-teal-900">
        Effective Lesson Planning
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-4">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Elements
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-teal-600">
                Clear Learning Objectives:
              </strong>{" "}
              Defining specific and measurable outcomes for students.
            </li>
            <li>
              <strong className="text-teal-600">
                Student-Centered Approach:
              </strong>{" "}
              Considering students' prior knowledge and tailoring instruction
              accordingly.
            </li>
            <li>
              <strong className="text-teal-600">
                Diverse Teaching Strategies:
              </strong>{" "}
              Incorporating a variety of activities to engage different
              learners.
            </li>
            <li>
              <strong className="text-teal-600">Appropriate Resources:</strong>{" "}
              Selecting and utilizing a range of materials to support learning.
            </li>
            <li>
              <strong className="text-teal-600">Assessment Integration:</strong>{" "}
              Planning for ongoing assessment to monitor student progress.
            </li>
          </ul>
        </section>
      </div>
    </div>
  ),
  box6: (
    <div className="p-2 b">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-green-900">
        Classroom Management and Student Behavior
      </h1>

      <div className="max-w-4xl mx-auto p-4">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Elements
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-green-600">
                Understanding Student Behavior:
              </strong>{" "}
              Recognizing that behavior often reflects underlying emotional or
              developmental needs.
            </li>
            <li>
              <strong className="text-green-600">
                Establishing Positive Classroom Norms:
              </strong>{" "}
              Creating a culture of respect, cooperation, and responsibility.
            </li>
            <li>
              <strong className="text-green-600">Responsive Discipline:</strong>{" "}
              Addressing behavioral challenges with empathy and firmness.
            </li>
            <li>
              <strong className="text-green-600">
                Building Relationships:
              </strong>{" "}
              Fostering strong teacher-student relationships based on trust and
              mutual respect.
            </li>
            <li>
              <strong className="text-green-600">
                Promoting Self-Discipline:
              </strong>{" "}
              Empowering students to take responsibility for their own behavior.
            </li>
          </ul>
        </section>
      </div>
    </div>
  ),
  box7: (
    <div className="p-2">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-teal-900">
        Effective Homework
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-4">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Elements
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-teal-600">Meaningful:</strong> Aligned
              with learning objectives and promoting critical thinking.
            </li>
            <li>
              <strong className="text-teal-600">Manageable:</strong> Appropriate
              in terms of quantity and difficulty level for students' age and
              abilities.
            </li>
            <li>
              <strong className="text-teal-600">Independent:</strong> Designed
              to foster self-reliance and time management skills.
            </li>
            <li>
              <strong className="text-teal-600">Engaging:</strong> Stimulating
              curiosity and interest in the subject matter.
            </li>
          </ul>
        </section>
      </div>
    </div>
  ),
  box8: (
    <div className="p-2">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-teal-900">
        Responding to Diverse Learner Needs
      </h1>

      <div className="max-w-4xl mx-auto bg-white  p-4">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Elements
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong className="text-teal-600">
                Universal Design for Learning (UDL):
              </strong>{" "}
              Creating flexible learning environments that accommodate a wide
              range of learner needs.
            </li>
            <li>
              <strong className="text-teal-600">
                Differentiated Instruction:
              </strong>{" "}
              Tailoring instruction to meet individual student differences in
              readiness, interests, and learning profiles.
            </li>
            <li>
              <strong className="text-teal-600">Formative Assessment:</strong>{" "}
              Continuously monitoring student progress to identify areas of
              strength and need.
            </li>
            <li>
              <strong className="text-teal-600">Collaboration:</strong> Working
              with parents, specialists, and other professionals to support
              students with disabilities or special needs.
            </li>
          </ul>
        </section>
      </div>
    </div>
  ),
};

const Learning2 = () => {
  const navigate = useNavigate();
  const handleNextChapter = () => {
    navigate("/approach-assessment");
  };
  const [selectedBox, setSelectedBox] = useState(null);

  const closeData = () => {
    setSelectedBox(null);
  };

  return (
    <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* New Heading */}
      <h2 className="text-3xl font-extrabold text-center mb-8 text-green-800">
        Approach to Pedagogy
      </h2>

      {/* New Boxes */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* Box 3 */}
        <div
          className="w-full h-24 p-2 bg-green-200 shadow-md rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-lg"
          onClick={() => setSelectedBox("box3")}
        >
          <div className="text-center text-lg font-bold text-green-900">
            How does a teacher help in attaining the aims of education?
          </div>
        </div>

        {/* Box 4 */}
        <div
          className="w-full h-24 p-2 bg-green-200 shadow-md rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-lg"
          onClick={() => setSelectedBox("box4")}
        >
          <div className="text-center text-lg font-bold text-green-900">
            What elements do effective pedagogy consist of?
          </div>
        </div>

        {/* Box 5 */}
        <div
          className="w-full h-24 p-2 bg-green-200 shadow-md rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-lg"
          onClick={() => setSelectedBox("box5")}
        >
          <div className="text-center text-lg font-bold text-green-900">
            What is good lesson planning?
          </div>
        </div>

        {/* Box 6 */}
        <div
          className="w-full h-24 p-2 bg-green-200 shadow-md rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-lg"
          onClick={() => setSelectedBox("box6")}
        >
          <div className="text-center text-lg font-bold text-green-900">
            What homework should be given to learners?
          </div>
        </div>

        {/* Box 7 */}
        <div
          className="w-full h-24 p-2 bg-green-200 shadow-md rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-lg"
          onClick={() => setSelectedBox("box7")}
        >
          <div className="text-center text-lg font-bold text-green-900">
            How should students be handled in the classroom?
          </div>
        </div>

        {/* Box 8 */}
        <div
          className="w-full h-24 p-2 bg-green-200 shadow-md rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-lg"
          onClick={() => setSelectedBox("box8")}
        >
          <div className="text-center text-lg font-bold text-green-900">
            How should a teacher cater to individual needs of learners?
          </div>
        </div>
      </div>

      {/* Display selected box data */}
      {selectedBox && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-6 border border-gray-300 rounded-lg shadow-xl max-w-sm w-full mx-auto overflow-auto max-h-[80vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold transition-transform transform hover:scale-110"
              onClick={closeData}
            >
              &times;
            </button>
            <div className="text-gray-800 text-sm">{boxData[selectedBox]}</div>
          </div>
        </div>
      )}
      <button
        onClick={handleNextChapter}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next Chapter
      </button>
    </div>
  );
};

export default Learning2;
