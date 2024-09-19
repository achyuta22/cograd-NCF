import React, { useState } from "react";
import noncore2 from "../images/noncore2.jpg";
import noncore3 from "../images/noncore3.jpg";
import noncore from "../images/noncore.png";
import { useNavigate } from "react-router-dom";
import BackButton from "./Backbutton";

const Curricular = () => {
  const navigate = useNavigate();
  const handleNextChapter = () => {
    navigate("/approach-stage");
  };

  const [activeSection, setActiveSection] = useState(null); // Track the active section

  const handleCoreClick = () => {
    setActiveSection(activeSection === "core" ? null : "core");
  };

  const handleNonCoreClick = () => {
    setActiveSection(activeSection === "noncore" ? null : "noncore");
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-teal-100 text-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-teal-900 mb-4 text-center">
          Curricular Areas
        </h1>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto text-center">
          Curriculum areas are essential for achieving desired learning
          outcomes. While practical considerations influence their structure,
          these areas are also grounded in specific knowledge domains, inquiry
          methods, and perspectives. Each area has internal connections and
          requires dedicated resources, such as time, textbooks, and teachers.
        </p>

        {/* Square Boxes */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 mb-4">
          {/* Core Areas Button and Content */}
          <div className="flex flex-col">
            <div
              onClick={handleCoreClick}
              className={`relative bg-gradient-to-br from-teal-200 to-teal-400 p-4 md:p-8 rounded-lg shadow-lg transition-shadow duration-300 flex items-center justify-center cursor-pointer ${
                activeSection === "core" ? "ring-4 ring-teal-300" : ""
              }`}
            >
              <div className="flex items-center text-center flex-col">
                <h3 className="text-xl md:text-3xl font-semibold text-teal-900">
                  Core Areas
                </h3>
                <h3 className="text-sm font-light text-teal-900">
                  Click to know more
                </h3>
              </div>
            </div>

            {activeSection === "core" && (
              <div>
                <div className="bg-gradient-to-r from-teal-50 to-teal-100 py-6 md:py-12 px-4 md:px-6 rounded-lg mb-4 shadow-lg">
                  <div className="max-w-4xl mx-auto">
                    {/* <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4 text-center">
                      Core Areas
                    </h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8">
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
                          className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 hover:bg-teal-50 transition-colors duration-300"
                        >
                          <h3 className="text-xl md:text-2xl font-semibold text-teal-800 mb-4">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                          className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 hover:bg-teal-50 transition-colors duration-300"
                        >
                          <h3 className="text-xl md:text-2xl font-semibold text-teal-800 mb-4">
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
              </div>
            )}
          </div>

          {/* Non-Core Areas Button and Content */}
          <div className="flex flex-col">
            <div
              onClick={handleNonCoreClick}
              className={`relative bg-gradient-to-br from-blue-200 to-blue-400 p-4 md:p-8 rounded-lg shadow-lg transition-shadow duration-300 flex items-center justify-center cursor-pointer ${
                activeSection === "noncore" ? "ring-4 ring-blue-300" : ""
              }`}
            >
              <div className="flex items-center text-center flex-col">
                <h3 className="text-xl md:text-3xl font-semibold text-teal-900">
                  Non-Core Areas
                </h3>
                <h3 className="text-sm font-light text-teal-900">
                  Click to know more
                </h3>
              </div>
            </div>

            {activeSection === "noncore" && (
              <div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-6 md:py-12 px-4 md:px-6 rounded-lg shadow-lg">
                  <div className="max-w-4xl mx-auto relative">
                    {/* <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
                      Non-Core Areas
                    </h2> */}
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8">
                      {/* Cards */}
                      <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
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
                            className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 hover:bg-blue-50 transition-colors duration-300 flex items-start"
                          >
                            <div>
                              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
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
                      <div className="relative w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 flex justify-center">
                        <img
                          src={noncore}
                          alt="Non-Core Areas"
                          className="w-full h-auto rounded-lg shadow-lg border-2 border-blue-300 duration-300 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full-Width Images at the Bottom */}
        <div className="flex flex-col md:flex-row mt-6 gap-4">
          <img
            src={noncore2}
            alt="Full Width Image 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <img
            src={noncore3}
            alt="Full Width Image 2"
            className="w-full mb-6 h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Next Chapter Button */}
      <div className="flex justify-end items-end p-4">
        <BackButton />
        <button
          onClick={handleNextChapter}
          className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
        >
          Next Chapter
        </button>
      </div>
    </section>
  );
};

export default Curricular;
