 const [selectedBox, setSelectedBox] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const boxData = {
    box1: (
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-teal-900 mb-6">
          Reducing Content Load for Enhanced Learning
        </h1>
        {[
          "Focus on Core Competencies",
          "Time for Exploration",
          "Efficiency in Teaching and Learning",
          "Subject-Specific Considerations",
        ].map((title, index) => (
          <div
            className="bg-teal-50 shadow-md rounded-lg p-6 mb-4 hover:bg-teal-100 transition-transform transform hover:scale-105"
            key={index}
          >
            <h2 className="text-xl font-semibold text-teal-900">{title}</h2>
            <p className="text-teal-700 mt-2">
              This section explains how {title.toLowerCase()} can improve the
              learning process.
            </p>
          </div>
        ))}
      </div>
    ),
    box2: (
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-teal-900 mb-6">
          Time Allocation Across Stages
        </h1>
        {[
          "Total Instructional Days",
          "Assessment and School Events",
          "Effective Instructional Time",
          "School Week Structure",
          "Annual Instructional Hours",
          "Daily Timetable Flexibility",
        ].map((title, index) => (
          <div
            className="bg-teal-50 shadow-md rounded-lg p-6 mb-4 hover:bg-teal-100 transition-transform transform hover:scale-105"
            key={index}
          >
            <h2 className="text-xl font-semibold text-teal-900">{title}</h2>
            <p className="text-teal-700 mt-2">
              Detailed information about {title.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    ),
  };

  const featuresData = {
    feature1: {
      title: "Physical Development",
      description: (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl font-bold text-teal-900 mb-8 text-center">
            The Importance of Physical Development in Child Learning
          </h1>
          <div className="max-w-5xl w-full space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Active Learning
              </h2>
              <p className="text-teal-700">
                Encourage sensory exploration, physical play, and gross motor
                skill development. Physical activity is crucial for engaging
                children in a dynamic learning environment, helping them develop
                essential motor skills and cognitive abilities.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Holistic Approach
              </h2>
              <p className="text-teal-700">
                Integrate physical activity into all aspects of the curriculum.
                A well-rounded approach to education includes movement and
                physical engagement as core elements, promoting overall
                development and learning.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Health and Hygiene Education
              </h2>
              <p className="text-teal-700">
                Establish foundational knowledge for lifelong well-being.
                Educating children about health and hygiene from an early age
                sets the stage for healthy habits and an understanding of
                personal care that benefits them throughout their lives.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature2: {
      title: "Cognitive Development",
      description: (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl font-bold text-teal-900 mb-8 text-center">
            Enhancing Cognitive Development in Education
          </h1>
          <div className="max-w-5xl w-full space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Sensory Exploration
              </h2>
              <p className="text-teal-700">
                Encourage learning through sensory experiences and hands-on
                activities. Engaging students with tactile, auditory, and visual
                stimuli promotes deeper understanding and retention of
                knowledge.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Language Development
              </h2>
              <p className="text-teal-700">
                Foster language acquisition through rich and diverse
                experiences. Providing opportunities for conversation,
                storytelling, and exposure to varied vocabulary enhances
                students' language skills and supports cognitive growth.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Early Literacy and Numeracy
              </h2>
              <p className="text-teal-700">
                Build a strong foundation for future learning. Early exposure to
                literacy and numeracy concepts sets the stage for academic
                success by developing critical thinking and problem-solving
                skills.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature3: {
      title: "Social & Ethical Development",
      description: (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl font-bold text-teal-900 mb-8 text-center">
            Fostering Social and Ethical Development
          </h1>
          <div className="max-w-5xl w-full space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Social Skills
              </h2>
              <p className="text-teal-700">
                Teach children basic social skills like sharing, cooperation,
                and taking turns. These foundational skills help students
                interact positively with others and build strong relationships.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Ethical Values
              </h2>
              <p className="text-teal-700">
                Introduce fundamental concepts of right and wrong, honesty, and
                respect. Instilling these values helps students develop a moral
                compass and make ethical decisions throughout their lives.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Positive Relationships
              </h2>
              <p className="text-teal-700">
                Build strong and trusting relationships between children and
                adults. Positive relationships foster a supportive learning
                environment and encourage personal growth and emotional
                well-being.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature4: {
      title: "Emotional Development",
      description: (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl font-bold text-teal-900 mb-8 text-center">
            Enhancing Emotional Development
          </h1>
          <div className="max-w-5xl w-full space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Emotional Literacy
              </h2>
              <p className="text-teal-700">
                Teach children to identify and express their emotions
                effectively. This skill helps them understand their feelings and
                communicate them in a healthy way.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Resilience and Coping
              </h2>
              <p className="text-teal-700">
                Encourage resilience and coping strategies. Teaching children
                how to handle stress and bounce back from challenges promotes
                emotional strength and well-being.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Empathy and Compassion
              </h2>
              <p className="text-teal-700">
                Foster empathy and compassion towards others. Understanding
                different perspectives and showing kindness are essential for
                emotional development and positive social interactions.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const handleBoxClick = (box) => {
    setSelectedBox(box);
    setSelectedFeature(null);
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setSelectedBox(null);
  };  
  
  --------------------------------------------------
  
  <div className="flex flex-wrap justify-center mb-8">
          <button
            className={`m-4 px-6 py-3 rounded-lg text-white ${
              selectedBox === "box1" ? "bg-teal-700" : "bg-teal-500"
            }`}
            onClick={() => handleBoxClick("box1")}
          >
            Box 1
          </button>
          <button
            className={`m-4 px-6 py-3 rounded-lg text-white ${
              selectedBox === "box2" ? "bg-teal-700" : "bg-teal-500"
            }`}
            onClick={() => handleBoxClick("box2")}
          >
            Box 2
          </button>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {selectedBox && (
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              {boxData[selectedBox]}
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {["feature1", "feature2", "feature3", "feature4"].map((feature) => (
            <button
              className={`m-4 px-6 py-3 rounded-lg text-white ${
                selectedFeature === feature ? "bg-teal-700" : "bg-teal-500"
              }`}
              onClick={() => handleFeatureClick(feature)}
              key={feature}
            >
              {featuresData[feature].title}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center">
          {selectedFeature && (
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3">
              {featuresData[selectedFeature].description}
            </div>
          )}
        </div>