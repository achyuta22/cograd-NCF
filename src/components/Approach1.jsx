import React from "react";
import approach1 from "../images/approach1.png"; // Update the path according to your file structure
import vision from "../images/vision.png"; // Update the path according to your file structure
import aim from "../images/aim.png"; // Update the path according to your file structure

const Approach1 = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-200 text-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Existing Content */}
        <div className="grid max-w-screen-xl lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 mr-auto">
            <h1 className="max-w-2xl mb-6 text-4xl font-bold tracking-tight leading-tight md:text-5xl xl:text-6xl text-blue-900">
              Approach
            </h1>
            <p className="max-w-2xl mb-8 text-gray-700 md:text-lg lg:text-xl">
              Our approach to education is comprehensive, focusing not just on
              academic excellence but also on holistic development. We aim to
              foster a learning environment that nurtures curiosity, critical
              thinking, and personal growth.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5">
            <img
              src={approach1}
              alt="approach"
              className="w-full h-auto lg:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* New Section: Vision of Education */}
        <div className="grid lg:grid-cols-12 gap-8 mt-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <img
              src={vision}
              alt="vision"
              className="w-full h-auto max-w-sm rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-semibold mb-6 text-blue-900">
              Vision of Education
            </h2>
            <p className="mb-4 text-gray-800 text-lg leading-relaxed">
              Education, at its essence, aims to cultivate valuable knowledge,
              abilities, values, and attitudes. The society's vision for itself
              influences the determination of which knowledge, abilities,
              values, and attitudes are deemed 'valuable'.
            </p>
            <p className="mb-4 text-gray-800 text-lg leading-relaxed">
              This National Education Policy envisions an education system
              rooted in Indian ethos that contributes directly to transforming
              India, that is Bharat, sustainably into an equitable and vibrant
              knowledge society, by providing high-quality education to all,
              thereby making India a global knowledge superpower.
            </p>
          </div>
        </div>

        {/* New Section: Aims of School Education */}
        <div className="grid lg:grid-cols-12 gap-8 mt-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-semibold mb-6 text-blue-900">
              Aims of School Education
            </h2>
            <ul className="list-disc list-inside mb-4 text-gray-800 text-lg leading-relaxed">
              <li>Rational Thought and Independent Thinking/Autonomy</li>
              <li>Health and Well-being</li>
              <li>Democratic and Community Participation</li>
              <li>Economic Participation</li>
              <li>Cultural Participation</li>
            </ul>
            <p className="mb-4 text-gray-800 text-lg leading-relaxed">
              A society comprising healthy, knowledgeable individuals with the
              capacities, values, and dispositions to actively engage in
              community life, contribute to the economy, enrich culture, and
              uphold democratic principles would foster a pluralistic,
              prosperous, just, culturally vibrant, and democratic knowledge
              society.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <img
              src={aim}
              alt="education"
              className="w-full h-auto max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Three Square Boxes Section */}
        <div className="text-center mt-16">
          <p className="mb-8 text-gray-800 text-lg leading-relaxed mx-auto max-w-3xl">
            The five Aims of Education as articulated in the previous section
            would be achieved by schools by developing relevant and appropriate
            knowledge, capacities, values, and dispositions in their students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-w-1 aspect-h-1 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold mb-2 text-blue-900">
              Knowledge
            </h3>
          </div>
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-w-1 aspect-h-1 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold mb-2 text-blue-900">
              Capacities
            </h3>
          </div>
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-w-1 aspect-h-1 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold mb-2 text-blue-900">
              Values & Dispositions
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach1;
