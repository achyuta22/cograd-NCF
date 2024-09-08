import React, { useState } from "react";
import AppLS from "./AppLS";

// Data for each box
const boxData = {
  box1: (
    <div className="p-2 bg-white rounded-lg ">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        How does Learning Standards look like?
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        <li>
          <strong className="text-green-700">Specific and Actionable:</strong>{" "}
          Clearly defined and relevant to different stages of education.
        </li>
        <li>
          <strong className="text-green-700">
            Aligned with Educational Goals:
          </strong>{" "}
          Directly linked to the overall aims of education.
        </li>
        <li>
          <strong className="text-green-700">Coherent and Connected:</strong>{" "}
          Forming a logical and interconnected system that supports holistic
          development.
        </li>
      </ul>
      <p className="mt-4 text-gray-800">
        By establishing clear and measurable Learning Standards, education can
        be more focused and effective in achieving its desired outcomes.
      </p>
    </div>
  ),
  box2: (
    <div className="p-2 bg-white ">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-6 text-green-800">
        From Aims to Learning Outcomes
      </h1>

      {/* Framework Description */}
      <div className="max-w-3xl mx-auto mb-6 text-center">
        <p className="text-lg text-gray-800">
          This framework emphasizes a clear and logical progression from broad
          educational goals to specific, measurable learning objectives. This
          process, known as{" "}
          <strong className="text-green-700">"flow-down"</strong>, ensures
          alignment and coherence across all levels of curriculum development.
        </p>
      </div>

      {/* Hierarchical Structure */}
      <div className="space-y-6">
        {/* Aims of Education */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Aims of Education
          </h2>
          <p className="text-gray-700">
            Derived from the overall vision of education, they outline the
            desired outcomes for students.
          </p>
        </div>

        {/* Curricular Goals */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Curricular Goals
          </h2>
          <p className="text-gray-700">
            Specify the knowledge, skills, and values to be achieved within
            specific subject areas or domains.
          </p>
        </div>

        {/* Competencies */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Competencies
          </h2>
          <p className="text-gray-700">
            Define the capabilities students should develop to meet curricular
            goals.
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Learning Outcomes
          </h2>
          <p className="text-gray-700">
            Clearly articulate the specific knowledge, skills, and behaviors
            students should demonstrate.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="text-center mt-6">
        <p className="text-lg text-gray-800">
          This hierarchical structure ensures that all components of the
          curriculum contribute to the overarching goals of education.
        </p>
      </div>
    </div>
  ),
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

const Approach3 = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const closeData = () => {
    setSelectedBox(null);
  };

  return (
    <div className="p-8 bg-gradient-to-b from-blue-100 to-blue-100 min-h-screen">
      {/* Existing Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-green-800">
        Approach to Learning Standards
      </h1>

      {/* Existing Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Box 1 */}
        <div
          className="w-80 h-80 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out"
          onClick={() => setSelectedBox("box1")}
        >
          <div className="text-center p-8 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="text-lg font-semibold text-teal-800 mb-3">
              Approach to Learning Standards
            </div>
            <div className="text-sm text-gray-600">
              Click to explore the details and learn more about our approach to
              learning standards.
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className="w-80 h-80 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out"
          onClick={() => setSelectedBox("box2")}
        >
          <div className="text-center p-8 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="text-lg font-semibold text-teal-800 mb-3">
              From Aims to Learning Outcomes
            </div>
            <div className="text-sm text-gray-600">
              Click to explore the details and learn more about our approach to
              learning outcomes.
            </div>
          </div>
        </div>
      </div>

      {/* New Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-green-800">
        Approach to Pedagogy{" "}
      </h2>

      {/* New Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Box 3 */}
        <div
          className="w-80 h-80 bg-green-200 shadow-lg rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-xl"
          onClick={() => setSelectedBox("box3")}
        >
          <div className="text-center text-xl font-bold text-green-900">
            How does a teacher help in attaining the aims of education?
          </div>
        </div>

        {/* Box 4 */}
        <div
          className="w-80 h-80 bg-green-200 shadow-lg rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-xl"
          onClick={() => setSelectedBox("box4")}
        >
          <div className="text-center text-xl font-bold text-green-900">
            What elements do effective pedagogy consisits?
          </div>
        </div>

        {/* Box 5 */}
        <div
          className="w-80 h-80 bg-green-200 shadow-lg rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-xl"
          onClick={() => setSelectedBox("box5")}
        >
          <div className="text-center text-xl font-bold text-green-900">
            What is a good lesson planning?
          </div>
        </div>

        {/* Box 6 */}
        <div
          className="w-80 h-80 bg-green-200 shadow-lg rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-xl"
          onClick={() => setSelectedBox("box6")}
        >
          <div className="text-center text-xl font-bold text-green-900">
            What homework should be given to learners?{" "}
          </div>
        </div>
        <div
          className="w-80 h-80 bg-green-200 shadow-lg rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-xl"
          onClick={() => setSelectedBox("box7")}
        >
          <div className="text-center text-xl font-bold text-green-900">
            How students should be handle in classroom?{" "}
          </div>
        </div>

        <div
          className="w-80 h-80 bg-green-200 shadow-lg rounded-2xl flex items-center justify-center cursor-pointer hover:bg-green-300 transition-transform transform hover:scale-105 hover:shadow-xl"
          onClick={() => setSelectedBox("box8")}
        >
          <div className="text-center text-xl font-bold text-green-900">
            How should a teacher cater to individual needs of learners?{" "}
          </div>
        </div>
      </div>

      {/* Display selected box data */}
      {selectedBox && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-full max-w-4xl bg-white p-8 border border-gray-300 rounded-lg shadow-xl relative overflow-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
              onClick={closeData}
            >
              &times;
            </button>
            <div className="text-gray-800">{boxData[selectedBox]}</div>
          </div>
        </div>
      )}

      <AppLS />
    </div>
  );
};

export default Approach3;
