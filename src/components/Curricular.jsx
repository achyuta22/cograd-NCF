import React from "react";
import noncore from "../images/noncore.png"; // Update the path according to your file structure
import noncore2 from "../images/noncore2.jpg"; // Replace with your actual image path
import noncore3 from "../images/noncore3.jpg"; // Replace with your actual image path

const Curricular = () => {
  
  return (
    <section className="bg-gradient-to-b from-blue-50 to-teal-100 text-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-teal-900 mb-8 text-center">
          Curricular Areas
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
          Curriculum areas are essential for achieving desired learning
          outcomes. While practical considerations influence their structure,
          these areas are also grounded in specific knowledge domains, inquiry
          methods, and perspectives. Each area has internal connections and
          requires dedicated resources, such as time, textbooks, and teachers.
        </p>

        {/* Square Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative bg-gradient-to-br from-teal-200 to-teal-400 p-8 rounded-lg shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-w-1 aspect-h-1 ">
            <h3 className="text-3xl font-semibold text-teal-900">Core Areas</h3>
          </div>
          <div className="relative bg-gradient-to-br from-blue-200 to-blue-400 p-8 rounded-lg shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-w-1 aspect-h-1">
            <h3 className="text-3xl font-semibold text-blue-900">
              Non-Core Areas
            </h3>
          </div>
        </div>

        {/* Core Areas Section */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 py-12 px-6 rounded-lg mb-16 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-teal-900 mb-12 text-center">
              Core Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Languages",
                  description: [
                    "Language education goes beyond mere communication—it nurtures aesthetic expression, critical thinking, and analytical reasoning.",
                    "Multilingualism, cultural literacy, and appreciation of diverse languages are essential outcomes, especially in India.",
                  ],
                },
                {
                  title: "Mathematics and Computational Thinking",
                  description: [
                    "Mathematics unveils patterns, measurements, and quantities in the world.",
                    "It develops problem-solving skills, logical reasoning, and computational thinking.",
                  ],
                },
                {
                  title: "Sciences",
                  description: [
                    "Science explores the natural world through specific methods of inquiry and empirical reasoning.",
                    "It fosters rational thought, scientific temper, and understanding of natural phenomena.",
                  ],
                },
              ].map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:bg-teal-50 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-semibold text-teal-800 mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {description.map((text, index) => (
                      <span key={index} className="block mb-2">
                        {text}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Social Sciences",
                  description: [
                    "Social Sciences (including Humanities) delve into the human world.",
                    "Evidence-based inquiry, rational thought, and community understanding are key.",
                    "Interpretation and reflection enrich subjective experiences.",
                  ],
                },
                {
                  title: "Art Education",
                  description: [
                    "Art provides aesthetic understanding and creativity across subjects.",
                    "It cultivates cultural sensibilities, well-being, and holistic development.",
                    "Engaging with art connects students to culture and emotions.",
                  ],
                },
              ].map(({ title, description }) => (
                <div
                  key={title}
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:bg-teal-50 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-semibold text-teal-800 mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {description.map((text, index) => (
                      <span key={index} className="block mb-2">
                        {text}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Non-Core Areas Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 rounded-lg shadow-lg">
          <div className="max-w-6xl mx-auto relative">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Non-Core Areas
            </h2>
            <div className="flex flex-col md:flex-row items-start justify-between">
              {/* Cards */}
              <div className="flex flex-col gap-8 w-full md:w-1/2 lg:w-2/5">
                {[
                  {
                    title: "Physical Education and Well-being",
                    description: [
                      "Sports, yoga, and physical activities promote health and emotional balance.",
                      "They instill ethical, moral, and democratic values.",
                    ],
                  },
                  {
                    title: "Vocational Education",
                    description: [
                      "Vocational skills empower economic participation.",
                      "Appreciating all forms of labor and dignity of work is vital.",
                      "NEP 2020 emphasizes vocational exposure from early schooling to higher education.",
                    ],
                  },
                  {
                    title: "Interdisciplinary Areas",
                    description: [
                      "Interdisciplinary thinking complements disciplinary knowledge.",
                      "It encourages problem-solving across domains.",
                    ],
                  },
                ].map(({ title, description }) => (
                  <div
                    key={title}
                    className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:bg-blue-50 transition-colors duration-300 flex items-start"
                  >
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                        {title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {description.map((text, index) => (
                          <span key={index} className="block mb-2">
                            {text}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Image */}
              <div className="relative w-full md:w-96 lg:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
                <img
                  src={noncore}
                  alt="Non-Core Areas"
                  className="w-full h-auto rounded-lg shadow-lg border-2 border-blue-300 duration-300 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Images at the Bottom */}
        <div className="flex flex-col md:flex-row mt-16 gap-4">
          <img
            src={noncore2}
            alt="Full Width Image 1"
            className="w-full h-full md:h-[100vh] object-cover rounded-lg shadow-md transition-all duration-300"
          />
          <img
            src={noncore3}
            alt="Full Width Image 2"
            className="w-full h-full md:h-[100vh] object-cover rounded-lg shadow-md transition-all duration-300 "
          />
        </div>
      </div>
    </section>
  );
};

export default Curricular;
