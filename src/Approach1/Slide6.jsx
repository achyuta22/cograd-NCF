import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Slide6 = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  const handleCloseCard = () => {
    setSelectedBox(null);
  };
  const [rankings, setRankings] = useState({
    inquiry: "",
    communication: "",
    problemSolving: "",
    aesthetic: "",
    health: "",
    socialEngagement: "",
  });
  const [showContent, setShowContent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRankings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowContent(true);
  };

  const renderCardContent = () => {
    switch (selectedBox) {
      case "Knowledge":
        return {
          question: (
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              <ul className="list-disc list-inside space-y-4">
                <li className="text-gray-700 text-lg">
                  What do you understand by Knowledge?
                </li>
                <li className="text-gray-700 text-lg">
                  Which kind of knowledge is required to envision the aims of
                  education?
                </li>
                <li className="text-gray-700 text-lg">
                  How does knowledge constitute?
                </li>
              </ul>
            </div>
          ),
          answer: (
            <section className=" p-4 lg:p-8  max-w-full lg:max-w-3xl mx-auto mt-6 lg:mt-8  max-h-[400px]">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-blue-900">
                Knowledge
              </h2>
              <p className="text-gray-700 mb-4 text-sm lg:text-base">
                Knowledge includes descriptive understanding ("knowing that"),
                such as recognizing Earth's orbit around the Sun and
                acknowledging Mahatma Gandhi's crucial role in India's
                independence movement. However, acquiring knowledge goes beyond
                memorization to involve critical thinking, inquiry, connecting
                different pieces of knowledge, and fostering new insights.
                Knowledge about the self, others, the social world, and the
                physical and natural world is at the base of all the five Aims
                of Education.
              </p>
              <div className="mt-4">
                <h3 className="text-lg lg:text-xl font-semibold text-blue-800">
                  Key Questions
                </h3>
                <ul className="list-disc list-inside mt-2 text-gray-600 text-sm lg:text-base">
                  <li>
                    How do we determine what constitutes valid knowledge? What
                    criteria do we use to establish truth and reliability?
                  </li>
                  <li>
                    How do individuals and societies generate new knowledge?
                    What methods and processes are involved in discovery and
                    innovation?
                  </li>
                  <li>
                    How is knowledge organized and related? How do different
                    bodies of knowledge build upon each other?
                  </li>
                  <li>
                    How do we address inconsistencies, contradictions, or
                    paradoxes within knowledge systems? How do we reconcile
                    competing perspectives?
                  </li>
                  <li>
                    How do cultural, social, and historical factors influence
                    the creation, dissemination, and interpretation of
                    knowledge?
                  </li>
                  <li>
                    What ethical responsibilities arise from the pursuit and
                    application of knowledge? How can we ensure knowledge is
                    used responsibly?
                  </li>
                </ul>
              </div>
            </section>
          ),
        };
      case "Capacities":
        return {
          question: (
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
              <h1 className="text-2xl font-extrabold mb-8 text-gray-900">
                Rank the Capacities
              </h1>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="inquiry"
                      className="text-lg font-medium text-gray-700 mb-2"
                    >
                      Inquiry:
                    </label>
                    <input
                      id="inquiry"
                      name="inquiry"
                      type="number"
                      min="1"
                      max="6"
                      value={rankings.inquiry}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="communication"
                      className="text-lg font-medium text-gray-700 mb-2"
                    >
                      Communication:
                    </label>
                    <input
                      id="communication"
                      name="communication"
                      type="number"
                      min="1"
                      max="6"
                      value={rankings.communication}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="problemSolving"
                      className="text-lg font-medium text-gray-700 mb-2"
                    >
                      Problem Solving and Logical Reasoning:
                    </label>
                    <input
                      id="problemSolving"
                      name="problemSolving"
                      type="number"
                      min="1"
                      max="6"
                      value={rankings.problemSolving}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="aesthetic"
                      className="text-lg font-medium text-gray-700 mb-2"
                    >
                      Aesthetic and Cultural Capacities:
                    </label>
                    <input
                      id="aesthetic"
                      name="aesthetic"
                      type="number"
                      min="1"
                      max="6"
                      value={rankings.aesthetic}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="health"
                      className="text-lg font-medium text-gray-700 mb-2"
                    >
                      Health, Management and Work:
                    </label>
                    <input
                      id="health"
                      name="health"
                      type="number"
                      min="1"
                      max="6"
                      value={rankings.health}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="socialEngagement"
                      className="text-lg font-medium text-gray-700 mb-2"
                    >
                      Social Engagement:
                    </label>
                    <input
                      id="socialEngagement"
                      name="socialEngagement"
                      type="number"
                      min="1"
                      max="6"
                      value={rankings.socialEngagement}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-lg bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Submit Rankings
                </button>
              </form>

              {showContent && (
                <div className="max-w-4xl mx-auto bg-white  mt-6">
                  <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    Capacities
                  </h1>
                  <div className="space-y-6">
                    <div className="p-2">
                      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                        Inquiry
                      </h2>
                      <p className="text-gray-600 font-light text-sm">
                        The ability to investigate, analyze, and synthesize
                        information, coupled with experimentation and
                        innovation. This includes both general inquiry skills
                        and discipline-specific methods.
                      </p>
                    </div>

                    <div className="p-2">
                      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                        Communication
                      </h2>
                      <p className="text-gray-600 font-light text-sm">
                        Effective oral, written, and digital communication
                        skills, adaptable to various audiences and contexts.
                      </p>
                    </div>

                    <div className="p-2">
                      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                        Problem Solving and Logical Reasoning
                      </h2>
                      <p className="text-gray-600 font-light text-sm">
                        The capacity to identify problems, generate solutions,
                        evaluate options, and implement solutions, including
                        quantitative and computational skills.
                      </p>
                    </div>

                    <div className="p-2">
                      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                        Aesthetic and Cultural Capacities
                      </h2>
                      <p className="text-gray-600 font-light text-sm">
                        Creativity, artistic expression, and cultural
                        understanding, which enhance problem-solving,
                        communication, and overall well-being.
                      </p>
                    </div>

                    <div className="p-2">
                      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                        Health, Self-Management, and Work
                      </h2>
                      <p className="text-gray-600 font-light text-sm">
                        Physical and mental well-being, self-discipline, and
                        work ethic for personal and societal contributions.
                      </p>
                    </div>

                    <div className="p-2">
                      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                        Social Engagement
                      </h2>
                      <p className="text-gray-600 font-light text-sm">
                        Empathy, cooperation, teamwork, and leadership for
                        effective democratic participation.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ),
        };
      case "Values & Dispositions":
        return {
          question: (
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
              <ul className="list-disc list-inside space-y-4">
                <li className="text-gray-700 text-lg">
                  Which values are developed by Education?
                </li>
                <li className="text-gray-700 text-lg">
                  Which values and dispositions do you think should be developed
                  by education?
                </li>
              </ul>
            </div>
          ),
          answer: (
            <div className="max-w-3xl mx-auto p-6 bg-white  rounded-lg">
              <h1 className="text-3xl font-bold mb-6 text-gray-800">Values</h1>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Ethical and Moral Values
                </h2>
                <p className="text-gray-600">
                  Students should cultivate virtues such as service,
                  non-violence, cleanliness, honesty, selfless action,
                  tolerance, hard work, respect for all, and environmental
                  stewardship. These values contribute to individual well-being
                  and form the bedrock of a democratic society.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Democratic Values
                </h2>
                <p className="text-gray-600">
                  A democratic ethos necessitates a commitment to liberty,
                  equality, justice, diversity, inclusivity, humaneness, social
                  responsibility, rational dialogue, peace, and civic
                  engagement.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Epistemic Values
                </h2>
                <p className="text-gray-600">
                  Developing a scientific temper involves valuing evidence,
                  justification, and critical inquiry. Students should learn to
                  identify reliable knowledge sources and adhere to appropriate
                  research methods.
                </p>
              </section>

              <section className="mb-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                  Disposition
                </h1>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      Work Ethic
                    </h3>
                    <p className="text-gray-600">
                      Students should develop a strong work ethic, characterized
                      by diligence, responsibility, and respect for all forms of
                      labor.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      Curiosity and Wonder
                    </h3>
                    <p className="text-gray-600">
                      A lifelong love of learning can be fostered by nurturing
                      students' natural curiosity and inquisitiveness about the
                      world.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      Indian Identity and Global Citizenship
                    </h3>
                    <p className="text-gray-600">
                      Students should develop a deep sense of belonging to India
                      while cultivating a global perspective, embodying the
                      spirit of "Vasudhaiva Kutumbakam" (the world is one
                      family).
                    </p>
                  </div>
                </div>
              </section>
            </div>
          ),
        };
      default:
        return { question: "", answer: "" };
    }
  };

  const { question, answer } = renderCardContent();
  const navigate = useNavigate();

  const handleNextChapter = () => {
    navigate("/approach-stage");
  };

  return (
    <section className="bg-gradient-to-r min-h-screen from-blue-50 to-blue-200 text-gray-900 py-12 lg:py-24 h-screen flex flex-col">
      <div className="container mx-auto px-6 lg:px-8 flex-1 flex flex-col justify-between">
        {/* Introduction */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mx-auto max-w-4xl">
            The five Aims of Education, as articulated in the previous section,
            would be achieved by schools by developing relevant and appropriate
            knowledge, capacities, values, and dispositions in their students.
          </p>
        </div>

        {/* Three Square Boxes Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 mb-6 flex-1">
          <div
            className="bg-gradient-to-r from-blue-300 to-blue-500 p-6 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleBoxClick("Knowledge")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Knowledge
              </h3>
              <p className="text-gray-700">
                Understanding the fundamental aspects and core principles.
              </p>
            </div>
            <p className="text-center text-sm mt-3 text-blue-700 font-medium">
              Click to know more
            </p>
          </div>
          <div
            className="bg-gradient-to-r from-green-300 to-green-500 p-6 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleBoxClick("Capacities")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-3">
                Capacities
              </h3>
              <p className="text-gray-700">
                Developing abilities to apply knowledge effectively.
              </p>
            </div>
            <p className="text-center text-sm mt-3 text-green-700 font-medium">
              Click to know more
            </p>
          </div>
          <div
            className="bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleBoxClick("Values & Dispositions")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-900 mb-3">
                Values & Dispositions
              </h3>
              <p className="text-gray-700">
                Cultivating the right attitudes and values for holistic growth.
              </p>
            </div>
            <p className="text-center text-sm mt-3 text-yellow-700 font-medium">
              Click to know more
            </p>
          </div>
        </div>

        {/* Card Modal */}
        {selectedBox && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            onClick={handleCloseCard}
          >
            <div
              className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto overflow-y-auto max-h-[80%] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl"
                onClick={handleCloseCard}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">
                {question}
              </h2>
              <p className="text-gray-800">{answer}</p>
            </div>
          </div>
        )}
        <div className="flex justify-end items-end p-4">
          <button
            onClick={handleNextChapter}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Next Chapter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slide6;
