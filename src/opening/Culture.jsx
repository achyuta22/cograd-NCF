import React from "react";
import culture1 from "../images/culture1.png";
import culture2 from "../images/culture2.png";
import culture3 from "../images/culture3.png";

const Culture = () => {
  return (
    <div className=" px-8 py-8 mx-auto bg-blue-50">
      {/* Intro Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Text Content */}
        <div className="flex-1 lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-800 mb-6">
            SCHOOL CULTURE AND PROCESSES
          </h1>
          <p className="font-light text-gray-700 mb-8 md:text-lg lg:text-xl ">
            The NCF 2023 focuses on the all-round development of students,
            emphasizing not just academic learning but also life skills,
            emotional well-being, and values like empathy, ethics, and teamwork.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1 lg:w-1/2 flex justify-center">
          <img
            src={culture1}
            alt="School Culture"
            className="w-full max-w-md h-auto rounded-lg shadow-lg border-4 border-blue-300"
          />
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="w-full flex flex-col lg:flex-row items-center gap-12 mb-12">
        {/* Image */}
        <div className="flex-1 lg:w-1/2 flex justify-center">
          <img
            src={culture2}
            alt="Culture Image 2"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg border-4 border-blue-300"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            School Culture
          </h2>
          <p className="text-gray-700 mb-8 md:text-lg lg:text-xl ">
            The chapter introduces the concept of school culture, describing it
            as a key factor in creating an effective learning environment. It
            highlights the dual role of school culture in motivating students
            and shaping their values.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="max-w-screen-xl px-4 py-4 mx-auto bg-white rounded-lg shadow-lg border border-blue-200 mb-4">
        <div className="bg-blue-50 rounded-lg p-4 mb-2">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
            What is School Culture?
          </h1>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Definition
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              School culture is defined by values, norms, beliefs, behaviors,
              relationships, and practices. These elements are deeply
              interrelated and influence the overall learning experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Categories of School Culture
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4 pl-6">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M3 6h18M3 14h18M3 18h18"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Relationships:
                  </h3>
                  <p>
                    Focus on the interactions among staff, students, and other
                    stakeholders.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M3 6h18M3 14h18M3 18h18"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Symbols:
                  </h3>
                  <p>
                    Visual displays and celebrations that communicate what is
                    valued by the school.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M3 6h18M3 14h18M3 18h18"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Arrangements and Practices:
                  </h3>
                  <p>
                    These include seating arrangements, classroom activities,
                    and the organization of school processes.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact and Elements Section */}
      <section className="max-w-screen-xl px-4 py-4 mb-4 mx-auto bg-white rounded-lg shadow-lg border border-green-200">
        <div className="bg-green-50 p-4 rounded-lg ">
          <h1 className="text-4xl font-extrabold text-green-800 mb-6 border-b-2 border-green-300 pb-2">
            Section 1.2: School Culture and its Impact on Learning
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Enabling Learning Environment
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              School culture contributes to creating a safe and encouraging
              environment, which is essential for learning.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Development of Values and Dispositions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Schools must systematically and deliberately cultivate values and
              dispositions as part of their culture.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl px-4 py-4 mb-4 mx-auto bg-white rounded-lg shadow-lg border border-red-200">
        <div className="bg-red-50 p-6 rounded-lg ">
          <h1 className="text-4xl font-extrabold text-red-800 mb-6 border-b-2 border-red-300 pb-2">
            Section 1.3: Constituent Elements of School Culture
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Relationships
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Explores the importance of mutual trust, respect, communication,
              collaboration, care, and responsibility within the school
              community.
            </p>
          </div>
          <div className="mb-8 border-t border-red-200 pt-4">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Symbols</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Discusses the symbolic representations in schools, such as visual
              displays and the use of symbols to communicate values.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              Arrangements and Practices
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Highlights the importance of classroom practices, school assembly,
              mealtime, and the engagement of students and parents in shaping
              school culture.
            </p>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="w-full flex flex-col lg:flex-row items-center gap-12 my-12 px-4 lg:px-0">
        {/* Text Content */}
        <div className="flex-1 lg:w-1/2   ml-4 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 lg:mb-4">
            School Processes
          </h2>
          <p className="text-gray-700 mb-8 md:text-lg lg:text-xl leading-relaxed">
            This chapter outlines the various processes that schools must
            implement to ensure both the smooth functioning of day-to-day
            activities and progress towards curricular goals
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 lg:w-1/2 flex justify-center">
          <img
            src={culture3}
            alt="Culture Image 2"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg border-4 border-blue-300"
          />
        </div>
      </section>

      <section className="max-w-screen-xl px-4 py-8 mx-auto bg-white rounded-lg shadow-lg border border-blue-200 mb-8">
        <h2 className="text-3xl font-extrabold text-indigo-800 mb-6">
          Section 2.1: Curricular Processes
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              School Timetable
            </h3>
            <p className="text-gray-700">
              The importance of a well-structured timetable that accommodates
              various curricular and extracurricular activities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              School Assembly
            </h3>
            <p className="text-gray-700">
              Describes how school assemblies can be used creatively to foster a
              sense of community and shared learning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Library
            </h3>
            <p className="text-gray-700">
              Emphasizes the role of a vibrant library in supporting student
              learning beyond textbooks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Student Committees and Forums
            </h3>
            <p className="text-gray-700">
              Encourages the formation of student committees to promote
              responsibility and leadership.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              Events and Celebrations
            </h3>
            <p className="text-gray-700">
              Discusses the integration of events and celebrations into the
              academic calendar to enhance learning.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl px-4 py-8 mx-auto bg-gray-50 rounded-lg shadow-lg border border-green-200 mb-8">
        <h2 className="text-3xl font-extrabold text-green-800 mb-6">
          Section 2.2: Curriculum-Associated Processes
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Teacher Collaboration and Professional Development
            </h3>
            <p className="text-gray-700">
              Focuses on the importance of teacher collaboration and ongoing
              professional development to improve teaching quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Engaging with Parents, Families, and Communities
            </h3>
            <p className="text-gray-700">
              Stresses the need for strong relationships between schools and the
              broader community to support student learning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Mealtime, Health, and Hygiene
            </h3>
            <p className="text-gray-700">
              Highlights the importance of nutrition, health, and hygiene in
              supporting student learning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Time and Resource Allocation
            </h3>
            <p className="text-gray-700">
              Discusses the importance of efficient use of time and resources in
              school planning.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl px-4 py-8 mx-auto bg-gray-100 rounded-lg shadow-lg border border-red-200">
        <h2 className="text-3xl font-extrabold text-red-800 mb-6">
          Section 2.3: Organisational Processes
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              School Development Plan
            </h3>
            <p className="text-gray-700">
              Outlines the process for creating a school development plan to
              address challenges and achieve educational goals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              Time and Resource Allocation
            </h3>
            <p className="text-gray-700">
              Discusses the importance of efficient use of time and resources in
              school planning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              Data Management and Reporting
            </h3>
            <p className="text-gray-700">
              Emphasizes the need for effective data management to inform
              planning and reporting.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              Ensuring Student Safety
            </h3>
            <p className="text-gray-700">
              Covers both physical and emotional safety measures that schools
              must implement to protect students.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;
