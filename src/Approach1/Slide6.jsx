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
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <ul className="list-disc list-inside space-y-4">
                <li className="text-gray-800 text-lg font-semibold">
                  What do you understand by Knowledge?
                </li>
                <li className="text-gray-800 text-lg font-semibold">
                  Which kind of knowledge is required to envision the aims of
                  education?
                </li>
                <li className="text-gray-800 text-lg font-semibold">
                  How does knowledge constitute?
                </li>
              </ul>
            </div>
          ),
          answer: (
            <section className="p-6 lg:p-12 max-w-full lg:max-w-4xl mx-auto mt-6 lg:mt-10 bg-white  overflow-y-auto max-h-[50vh]">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-blue-900">
                Knowledge
              </h2>
              <p className="text-gray-800 mb-6 text-base lg:text-lg leading-relaxed">
                Knowledge encompasses more than just descriptive understanding
                ("knowing that"), such as recognizing Earth's orbit around the
                Sun and acknowledging Mahatma Gandhi's crucial role in India's
                independence movement. It involves critical thinking, inquiry,
                connecting different pieces of information, and fostering new
                insights. Knowledge about the self, others, the social world,
                and the physical and natural world forms the foundation for all
                the five Aims of Education.
              </p>
              <div className="mt-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 mb-4">
                  Key Questions
                </h3>
                <ul className="list-disc list-inside space-y-4 text-gray-700 text-base lg:text-lg">
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
            <div className="max-w-full p-2 bg-white h-96 overflow-auto mx-auto">
              <h1 className="text-2xl font-extrabold mb-6 text-gray-900">
                Rank the Capacities
              </h1>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Inquiry",
                    "Communication",
                    "Problem Solving and Logical Reasoning",
                    "Aesthetic and Cultural Capacities",
                    "Health, Management and Work",
                    "Social Engagement",
                  ].map((label) => (
                    <div className="flex flex-col" key={label}>
                      <label
                        htmlFor={label.toLowerCase().replace(/ /g, "")}
                        className="text-lg font-medium text-gray-700 mb-2"
                      >
                        {label}:
                      </label>
                      <input
                        id={label.toLowerCase().replace(/ /g, "")}
                        name={label.toLowerCase().replace(/ /g, "")}
                        type="number"
                        min="1"
                        max="6"
                        value={rankings[label.toLowerCase().replace(/ /g, "")]}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full text-lg bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Submit Rankings
                </button>
              </form>

              {showContent && (
                <div className="max-w-full mt-6 bg-white rounded-lg shadow-lg border border-gray-200 p-6 h-96 overflow-auto">
                  <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    Capacities
                  </h1>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Inquiry",
                        description:
                          "The ability to investigate, analyze, and synthesize information, coupled with experimentation and innovation. This includes both general inquiry skills and discipline-specific methods.",
                      },
                      {
                        title: "Communication",
                        description:
                          "Effective oral, written, and digital communication skills, adaptable to various audiences and contexts.",
                      },
                      {
                        title: "Problem Solving and Logical Reasoning",
                        description:
                          "The capacity to identify problems, generate solutions, evaluate options, and implement solutions, including quantitative and computational skills.",
                      },
                      {
                        title: "Aesthetic and Cultural Capacities",
                        description:
                          "Creativity, artistic expression, and cultural understanding, which enhance problem-solving, communication, and overall well-being.",
                      },
                      {
                        title: "Health, Self-Management, and Work",
                        description:
                          "Physical and mental well-being, self-discipline, and work ethic for personal and societal contributions.",
                      },
                      {
                        title: "Social Engagement",
                        description:
                          "Empathy, cooperation, teamwork, and leadership for effective democratic participation.",
                      },
                    ].map(({ title, description }) => (
                      <div
                        className="p-4 border-b last:border-b-0 border-gray-200"
                        key={title}
                      >
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">
                          {title}
                        </h2>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ),
        };

      case "Values & Dispositions":
        return {
          question: (
            <div
              className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-lg overflow-hidden"
              style={{ maxHeight: "50vh" }}
            >
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
            <div
              className="max-w-3xl mx-auto p-4 bg-white overflow-y-auto"
              style={{ maxHeight: "60vh" }}
            >
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

              <section>
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
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 py-12 lg:py-24 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 lg:px-8 flex-1 flex flex-col justify-between">
        {/* Introduction */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mx-auto max-w-3xl">
            The five Aims of Education, as articulated in the previous section,
            would be achieved by schools by developing relevant and appropriate
            knowledge, capacities, values, and dispositions in their students.
          </p>
        </div>

        {/* Three Square Boxes Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mb-6 flex-1">
          <div
            className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleBoxClick("Knowledge")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                Knowledge
              </h3>
              <p className="text-gray-600">
                Understanding the fundamental aspects and core principles.
              </p>
            </div>
            <p className="text-center text-sm mt-3 text-blue-700 font-medium">
              Click to learn more
            </p>
          </div>
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleBoxClick("Capacities")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Capacities
              </h3>
              <p className="text-gray-600">
                Developing abilities to apply knowledge effectively.
              </p>
            </div>
            <p className="text-center text-sm mt-3 text-green-700 font-medium">
              Click to learn more
            </p>
          </div>
          <div
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleBoxClick("Values & Dispositions")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-800 mb-3">
                Values & Dispositions
              </h3>
              <p className="text-gray-600">
                Cultivating the right attitudes and values for holistic growth.
              </p>
            </div>
            <p className="text-center text-sm mt-3 text-yellow-700 font-medium">
              Click to learn more
            </p>
          </div>
        </div>

        {/* Card Modal */}
        {selectedBox && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleCloseCard}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
                onClick={handleCloseCard}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {question}
              </h2>
              <p className="text-gray-700">{answer}</p>
            </div>
          </div>
        )}
        <div className="flex justify-end items-end p-4">
          <button
            onClick={handleNextChapter}
            className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 px-6 rounded-full shadow-md hover:from-teal-600 hover:to-teal-800 transition-transform duration-300"
          >
            Next Chapter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slide6;
