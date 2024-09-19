import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/Backbutton";

// Data for each box
const boxData = {
  box3: (
    <div className="p-2">
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
      <div className="max-w-4xl mx-auto bg-white ">
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
      <div className="max-w-4xl mx-auto bg-white ">
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
  box7: (
    <div className="p-2 b">
      <div className="max-w-4xl mx-auto ">
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
  box6: (
    <div className="p-2">
      <div className="max-w-4xl mx-auto bg-white">
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
      <div className="max-w-4xl mx-auto bg-white ">
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
  const handleNextPage = () => {
    navigate("/assess1");
  };
  const [selectedBox, setSelectedBox] = useState(null);

  const closeData = () => {
    setSelectedBox(null);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* New Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-green-800">
        Approach to Pedagogy
      </h2>

      {/* New Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 px-4">
        {/* Box Template */}
        {[
          "How does a teacher help in attaining the aims of education?",
          "What elements do effective pedagogy consist of?",
          "What is good lesson planning?",
          "What homework should be given to learners?",
          "How should students be handled in the classroom?",
          "How should a teacher cater to individual needs of learners?",
        ].map((question, index) => (
          <div
            key={index}
            className="w-full h-28 p-3 bg-gray-200 border border-green-600 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105"
            onClick={() => setSelectedBox(`box${index + 3}`)}
          >
            <div className="text-center text-lg font-bold text-green-900">
              {question}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Displaying Selected Box Data */}
      {selectedBox && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-6 border border-gray-300 rounded-lg shadow-xl max-w-md w-full mx-auto overflow-auto max-h-[80vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold transition-transform transform hover:scale-110"
              onClick={closeData}
            >
              &times;
            </button>
            <div className="text-gray-800 text-base">
              {boxData[selectedBox]}
            </div>
          </div>
        </div>
      )}

      {/* Next Chapter Button */}
      <BackButton />
      <button
        onClick={handleNextPage}
        className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next
      </button>
    </div>
  );
};

export default Learning2;
