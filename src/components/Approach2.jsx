import React from "react";
import app2 from "../images/app2.png";
import app3 from "../images/app3.png";
import app4 from "../images/app4.png";
import app5 from "../images/app5.png";
import app6 from "../images/app6.png";

const Approach2 = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Heading for Learning Standards */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-teal-800">
            Approach to Learning Standards
          </h2>
          <div className="border-t-4 border-teal-500 mt-4 mx-auto w-24"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1 md:pr-8">
            <p className="text-lg text-gray-800 mb-6 font-medium">
              <strong>How do Learning Standards look like?</strong>
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                <p className="text-gray-700">
                  <strong>Specific and Actionable:</strong> Clearly defined and
                  relevant to different stages of education.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                <p className="text-gray-700">
                  <strong>Aligned with Educational Goals:</strong> Directly
                  linked to the overall aims of education.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                <p className="text-gray-700">
                  <strong>Coherent and Connected:</strong> Forming a logical and
                  interconnected system that supports holistic development.
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              By establishing clear and measurable Learning Standards, education
              can be more focused and effective in achieving its desired
              outcomes.
            </p>
          </div>
          {/* Image on the Right */}
          <div className="flex-shrink-0 max-w-md mx-auto">
            <img
              src={app2}
              alt="Learning Standards"
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Heading for Learning Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-teal-800">
            From Aims to Learning Outcomes
          </h2>
          <div className="border-t-4 border-teal-500 mt-4 mx-auto w-24"></div>
        </div>
        <p className="text-lg text-gray-800 mb-6">
          This framework emphasizes a clear and logical progression from broad
          educational goals to specific, measurable learning objectives. This
          process, known as "flow-down," ensures alignment and coherence across
          all levels of curriculum development.
        </p>
        <div className="space-y-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Aims of Education
            </h3>
            <p className="text-gray-700">
              Derived from the overall vision of education, they outline the
              desired outcomes for students.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Curricular Goals
            </h3>
            <p className="text-gray-700">
              Specify the knowledge, skills, and values to be achieved within
              specific subject areas or domains.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Competencies
            </h3>
            <p className="text-gray-700">
              Define the capabilities students should develop to meet curricular
              goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800 mb-2">
              Learning Outcomes
            </h3>
            <p className="text-gray-700">
              Clearly articulate the specific knowledge, skills, and behaviors
              students should demonstrate.
            </p>
          </div>
        </div>
      </section>

      {/* Heading for Approach to Pedagogy */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-teal-800">
            Approach to Pedagogy
          </h2>
          <div className="border-t-4 border-teal-500 mt-4 mx-auto w-24"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800">
              How does a teacher help in attaining the aims of education?{" "}
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800">
              What is a good lesson planning?
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800">
              How students should be handle in classroom?
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800">
              What elements do effective pedagogy consisits?
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800">
              What homework should be given to learners?
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-teal-800">
              How should a teacher cater to individual needs of learners?
            </h3>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Image on the Left */}
          <div className="flex-shrink-0 max-w-md mx-auto md:order-1">
            <img
              src={app3}
              alt="Effective Lesson Planning"
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-300"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 md:pl-8 md:order-2">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              Effective Lesson Planning
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Clear Learning Objectives:</strong> Defining specific
                and measurable outcomes for students.
              </li>
              <li>
                <strong>Student-Centred Approach:</strong> Considering students'
                prior knowledge and tailoring instruction accordingly.
              </li>
              <li>
                <strong>Diverse Teaching Strategies:</strong> Incorporating a
                variety of activities to engage different learners.
              </li>
              <li>
                <strong>Appropriate Resources:</strong> Selecting and utilizing
                a range of materials to support learning.
              </li>
              <li>
                <strong>Assessment Integration:</strong> Planning for ongoing
                assessment to monitor student progress.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Image on the Right */}
          <div className="flex-shrink-0 max-w-md mx-auto md:order-2">
            <img
              src={app2}
              alt="Classroom Management and Student Behavior"
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-300"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 md:pl-8 md:order-1">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              Classroom Management and Student Behavior
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Clear Expectations:</strong> Setting and communicating
                clear behavioral expectations.
              </li>
              <li>
                <strong>Positive Reinforcement:</strong> Using rewards and
                recognition to encourage desirable behavior.
              </li>
              <li>
                <strong>Consistent Procedures:</strong> Implementing consistent
                routines and procedures for managing the classroom environment.
              </li>
              <li>
                <strong>Engaging Learning Activities:</strong> Designing
                activities that maintain students' interest and motivation.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Image on the Left */}
          <div className="flex-shrink-0 max-w-md mx-auto md:order-1">
            <img
              src={app4}
              alt="Differentiated Instruction"
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-300"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 md:pl-8 md:order-2">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              Differentiated Instruction
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Varied Instructional Strategies:</strong> Using multiple
                methods to cater to different learning styles.
              </li>
              <li>
                <strong>Flexible Grouping:</strong> Grouping students based on
                their needs and interests.
              </li>
              <li>
                <strong>Ongoing Assessment:</strong> Continuously assessing
                student progress to inform instruction.
              </li>
              <li>
                <strong>Adjustments to Content:</strong> Modifying the content
                and delivery to meet diverse needs.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Image on the Right */}
          <div className="flex-shrink-0 max-w-md mx-auto md:order-2">
            <img
              src={app5}
              alt="Engaging Activities and Assessments"
              className="w-full h-auto object-cover rounded-lg shadow-lg border border-gray-300"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 md:pl-8 md:order-1">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              Engaging Activities and Assessments
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Active Learning:</strong> Incorporating interactive and
                participatory activities.
              </li>
              <li>
                <strong>Formative Assessments:</strong> Using assessments to
                provide feedback and guide instruction.
              </li>
              <li>
                <strong>Real-World Connections:</strong> Relating learning
                activities to real-life scenarios.
              </li>
              <li>
                <strong>Student Choice:</strong> Allowing students to make
                choices in their learning to increase engagement.
              </li>
            </ul>
          </div>
        </div>

      
      </section>
    </div>
  );
};

export default Approach2;
