import React, { useState } from "react";
import approach1 from "../images/approach1.png";
import vision from "../images/vision.png";
import aim from "../images/aim.png";

const Approach1 = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };
  const [selectedVisions, setSelectedVisions] = useState([]);

  const visions = [
    "Empowering Future Innovators",
    "Nurturing Lifelong Learners",
    "Cultivating Curiosity and Creativity",
    "Inspiring Excellence in Every Student",
    "Building Strong Foundations for Tomorrow",
    "Fostering Holistic Growth and Development",
    "Guiding Students Toward Success",
    "Shaping Leaders of the Next Generation",
    "Encouraging Critical Thinking and Problem-Solving",
    "Creating a Community of Learners and Leaders",
  ];

  const handleSelect = (vision) => {
    if (selectedVisions.includes(vision)) {
      setSelectedVisions(selectedVisions.filter((v) => v !== vision));
    } else if (selectedVisions.length < 4) {
      setSelectedVisions([...selectedVisions, vision]);
    }
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

  const aims = [
    "Rational Thought and Independent Thinking/Autonomy",
    "Encouraging Competition Over Collaboration",
    "Health and Well-being",
    "Enforcing Uniformity in Thinking",
    "Promoting Uniform Success Metrics",
    "Democratic and Community Participation",
    "Economic Participation",
    "Standardizing Education for All",
    "Cultural Participation",
    "Discouraging Failure",
    "Preparing Students Only for Jobs",
    "Collaboration and Teamwork",
  ];

  const [selectedAims, setSelectedAims] = useState([]);

  const handleSelect2 = (aim) => {
    setSelectedAims((prevSelected) =>
      prevSelected.includes(aim)
        ? prevSelected.filter((v) => v !== aim)
        : [...prevSelected, aim]
    );
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-200 text-gray-900 py-8 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Existing Content */}
        <div className="grid max-w-screen-xl lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 mr-auto">
            <h1 className="max-w-2xl mb-6 text-3xl lg:text-4xl font-bold tracking-tight leading-tight md:text-4xl xl:text-5xl text-blue-900">
              Approach
            </h1>
            <p className="max-w-2xl mb-8 text-gray-700 md:text-base lg:text-lg">
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

        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            What should be the Vision of Education?
          </h1>
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Select any four which have most priority as per you.
          </h2>
          <ul className="space-y-4">
            {visions.map((vision, index) => (
              <li key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedVisions.includes(vision)}
                  onChange={() => handleSelect(vision)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-lg text-gray-800">{vision}</label>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-8 text-gray-900">
            Selected Visions:
          </h2>
          <ul className="mt-4 space-y-2">
            {selectedVisions.map((vision, index) => (
              <li
                key={index}
                className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-sm"
              >
                {vision}
              </li>
            ))}
          </ul>
        </div>
        {/* New Section: Vision of Education */}
        <div className="grid lg:grid-cols-12 gap-8 mt-8 lg:mt-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <img
              src={vision}
              alt="vision"
              className="w-full h-auto max-w-sm rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-blue-900">
              Vision of Education
            </h2>
            <p className="mb-4 text-gray-800 text-base lg:text-lg leading-relaxed">
              Education, at its essence, aims to cultivate valuable knowledge,
              abilities, values, and attitudes. The society's vision for itself
              influences the determination of which knowledge, abilities,
              values, and attitudes are deemed 'valuable'.
            </p>
            <p className="mb-4 text-gray-800 text-base lg:text-lg leading-relaxed">
              This National Education Policy envisions an education system
              rooted in Indian ethos that contributes directly to transforming
              India, that is Bharat, sustainably into an equitable and vibrant
              knowledge society, by providing high-quality education to all,
              thereby making India a global knowledge superpower.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-8 mt-12  bg-white shadow-lg rounded-lg flex items-start space-x-8">
          {/* Left Content */}
          <div className="w-2/3">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              What are the true aims of school education?
            </h1>
            <ul className="space-y-4">
              {aims.map((aim, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedAims.includes(aim)}
                    onChange={() => handleSelect2(aim)}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="text-lg text-gray-800">{aim}</label>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold mt-8 text-gray-900">
              Selected Aims:
            </h2>
            <ul className="mt-4 space-y-2">
              {selectedAims.map((aim, index) => (
                <li
                  key={index}
                  className="p-3 bg-blue-100 text-blue-800 rounded-lg shadow-sm"
                >
                  {aim}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-1/3">
            <img
              src={approach1}
              alt="Education Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* New Section: Aims of School Education */}
        <div className="grid lg:grid-cols-12 gap-8 mt-8 lg:mt-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-blue-900">
              Aims of School Education
            </h2>
            <ul className="list-disc list-inside mb-4 text-gray-800 text-base lg:text-lg leading-relaxed">
              <li>Rational Thought and Independent Thinking/Autonomy</li>
              <li>Health and Well-being</li>
              <li>Democratic and Community Participation</li>
              <li>Economic Participation</li>
              <li>Cultural Participation</li>
            </ul>
            <p className="mb-4 text-gray-800 text-base lg:text-lg leading-relaxed">
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
        <div className="text-center mt-8 lg:mt-16">
          <p className="mb-8 text-gray-800 text-base lg:text-lg leading-relaxed mx-auto max-w-3xl">
            The five Aims of Education as articulated in the previous section
            would be achieved by schools by developing relevant and appropriate
            knowledge, capacities, values, and dispositions in their students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:mt-16">
          <div
            className="bg-gradient-to-r from-blue-200 to-blue-400 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-blue-300 transition duration-300 ease-in-out"
            onClick={() => handleBoxClick("Knowledge")}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Knowledge
              </h3>
              <p className="text-gray-600">
                Understanding the fundamental aspects and core principles.
              </p>
            </div>
            <p className="text-center text-xs mt-2 ">click to know more</p>
          </div>
          <div
            className="bg-gradient-to-r from-green-200 to-green-400 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-green-300 transition duration-300 ease-in-out"
            onClick={() => handleBoxClick("Capacities")}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Capacities
              </h3>
              <p className="text-gray-600">
                Developing abilities to apply knowledge effectively.
              </p>
            </div>{" "}
            <p className="text-center text-xs mt-2 ">click to know more</p>
          </div>
          <div
            className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-300 transition duration-300 ease-in-out"
            onClick={() => handleBoxClick("Values & Dispositions")}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                Values & Dispositions
              </h3>
              <p className="text-gray-600">
                Cultivating the right attitudes and values for holistic growth.
              </p>
            </div>{" "}
            <p className="text-center text-xs mt-2 ">click to know more</p>
          </div>
        </div>

        {/* Card Modal */}
        {selectedBox && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleCloseCard}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto overflow-y-auto max-h-[80%]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={handleCloseCard}
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4 text-blue-900">
                {question}
              </h2>
              <div>{answer}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Approach1;
