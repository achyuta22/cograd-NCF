import React from "react";
import stagesImage from "../images/stages.jpg"; // Update the path according to your file structure
import vikasImage from "../images/vikas.png"; // Update the path according to your file structure

const Stages1 = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16 px-4 md:px-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center text-teal-800 mb-12">
        School Stages
      </h1>

      {/* Image and Description Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* NEP 2020 Description */}
        <div className="text-lg text-gray-700 leading-relaxed text-center md:text-left p-8 md:w-1/2">
          <p>
            NEP 2020 recommends that schooling will now be imagined in four
            stages in a new 5+3+3+4 design covering ages 3-18, which is based on
            the stages of physical, cognitive, and socioemotional-ethical
            development of children/students.
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={stagesImage}
            alt="Stages"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Secondary Heading */}
      <h2 className="text-4xl font-semibold text-center text-teal-700 mb-8">
        Child Development
      </h2>

      {/* Child Development Description */}
      <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-4xl mx-auto px-4">
        Child development is influenced by the interplay of three different
        processes, namely, biological processes, cognitive processes, and
        socio-emotional processes. These processes are intricately interwoven
        with each other. Each of these processes plays a role in the physical,
        cognitive, linguistic, socio-emotional, and moral development of a
        child.
      </p>

      {/* Development Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Left Box */}
        <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
          <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-center text-white">
              Stages of Child Development
            </h3>
          </div>
        </div>
        {/* Center Box */}
        <div className="flex flex-col col-span-1">
          <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-center text-white">
              Role of Family in Child Development
            </h3>
          </div>
        </div>
        {/* Right Box */}
        <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
          <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-center text-white">
              Role of Peers in Child Development
            </h3>
          </div>
        </div>
      </div>

      {/* Child Development Stages */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16 max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
          Child Development Stages
        </h3>
        <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
          <li>
            <strong>Infancy (birth to 3 years):</strong> This period is
            characterized by rapid growth, dependency on adults, and initial
            exploration of the environment.
          </li>
          <li>
            <strong>Early Childhood (3-6/7 years):</strong> Children become more
            independent, interact with peers, and engage in exploratory play
            during this stage.
          </li>
          <li>
            <strong>Middle to Late Childhood (8-11/12 years):</strong> Physical,
            emotional, and cognitive development accelerates as children master
            essential life skills and expand their social world.
          </li>
          <li>
            <strong>Adolescence (12 years onwards):</strong> Marked by physical
            maturation, identity formation, and a growing desire for
            independence, adolescence is a transitional phase between childhood
            and adulthood.
          </li>
        </ul>
      </div>

      {/* New Heading and Square Boxes */}
      <div className="my-16">
        <h2 className="text-4xl font-semibold text-center text-teal-700 mb-12">
          Developmental Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Box */}
          <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-center text-white">
                Physical Development
              </h3>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-center text-white">
                Moral Development
              </h3>
            </div>
          </div>
          {/* Center Box */}
          <div className="flex flex-col col-span-1">
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-center text-white">
                Cognitive Development
              </h3>
            </div>
          </div>
          {/* Right Two Vertical Boxes */}
          <div className="flex flex-col gap-8 col-span-1 md:col-span-1">
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-center text-white">
                Language Development
              </h3>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-center text-white">
                Emotional Development
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Panchkosha Vikas Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold text-teal-700 mb-8 text-center md:text-left">
            Panchkosha Vikas
          </h2>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
            <li>
              <strong>Physical Development (Sharirik Vikas):</strong> This
              refers to the development of the physical body and its functions.
            </li>
            <li>
              <strong>Development of Life Energy (Pranik Vikas):</strong> This
              involves the growth and enhancement of vital energy within the
              body.
            </li>
            <li>
              <strong>Emotional/Mental Development (Manasik Vikas):</strong>{" "}
              This encompasses the growth of emotional and mental capacities.
            </li>
            <li>
              <strong>Intellectual Development (Bauddhik Vikas):</strong> This
              pertains to the advancement of cognitive abilities and
              intellectual growth.
            </li>
            <li>
              <strong>Spiritual Development (Chaitsik Vikas):</strong> This
              focuses on the growth of spiritual awareness and understanding.
            </li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={vikasImage}
            alt="Panchkosha Vikas"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-zinc-300">
          <thead className="bg-zinc-200 dark:bg-zinc-700">
            <tr>
              <th className="border border-zinc-300 p-4 text-left">Aspect</th>
              <th className="border border-zinc-300 p-4 text-left">
                Foundational Stage (Ages 3-8)
              </th>
              <th className="border border-zinc-300 p-4 text-left">
                Preparatory Stage (Ages 8-11)
              </th>
              <th className="border border-zinc-300 p-4 text-left">
                Middle Stage (Ages 11-14)
              </th>
              <th className="border border-zinc-300 p-4 text-left">
                Secondary Stage (Ages 14-18)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-300 p-4">Content</td>
              <td className="border border-zinc-300 p-4">
                Play-based; focus on basics.
              </td>
              <td className="border border-zinc-300 p-4">
                Structured basics in core subjects.
              </td>
              <td className="border border-zinc-300 p-4">
                Subject-specific, interdisciplinary.
              </td>
              <td className="border border-zinc-300 p-4">
                In-depth study with electives.
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-300 p-4">Curriculum</td>
              <td className="border border-zinc-300 p-4">
                Flexible, holistic development.
              </td>
              <td className="border border-zinc-300 p-4">
                Structured with continued flexibility.
              </td>
              <td className="border border-zinc-300 p-4">
                Discipline-based, critical thinking.
              </td>
              <td className="border border-zinc-300 p-4">
                Specialized, career-oriented.
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-300 p-4">
                Subject Combination
              </td>
              <td className="border border-zinc-300 p-4">
                Language, numeracy, motor skills.
              </td>
              <td className="border border-zinc-300 p-4">
                Core subjects (Language, Math, Science, Social Studies), arts.
              </td>
              <td className="border border-zinc-300 p-4">
                Core subjects plus introductory vocational subjects.
              </td>
              <td className="border border-zinc-300 p-4">
                Core subjects, electives, vocational courses.
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-300 p-4">Pedagogy</td>
              <td className="border border-zinc-300 p-4">
                Play and activity-based.
              </td>
              <td className="border border-zinc-300 p-4">
                Interactive, inquiry-based.
              </td>
              <td className="border border-zinc-300 p-4">
                Collaborative, experiential.
              </td>
              <td className="border border-zinc-300 p-4">
                Analytical, research-based.
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-300 p-4">Assessment</td>
              <td className="border border-zinc-300 p-4">
                Observational, qualitative feedback.
              </td>
              <td className="border border-zinc-300 p-4">
                Formative, project-based.
              </td>
              <td className="border border-zinc-300 p-4">
                Blend of formative and summative.
              </td>
              <td className="border border-zinc-300 p-4">
                Formal exams, standardized tests.
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-300 p-4">Teacher's Role</td>
              <td className="border border-zinc-300 p-4">
                Nurturer and guide.
              </td>
              <td className="border border-zinc-300 p-4">
                Mentor and facilitator.
              </td>
              <td className="border border-zinc-300 p-4">
                Subject expert and guide.
              </td>
              <td className="border border-zinc-300 p-4">
                Specialist and career counselor.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stages1;
