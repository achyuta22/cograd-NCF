import React from "react";
import { useState } from "react";

const Foundation = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const featuresData = {
    feature1: {
      title: "Physical Development",
      description: (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-4">
              Physical development is a cornerstone of overall child
              development. Effective pedagogy must acknowledge the critical role
              of physical activity and well-being in learning.
            </p>

            {/* Sections */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Active Learning
              </h3>
              <p className="text-gray-700">
                Encourage sensory exploration, physical play, and gross motor
                skill development.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Holistic Approach
              </h3>
              <p className="text-gray-700">
                Integrate physical activity into all aspects of the curriculum.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Health and Hygiene Education
              </h3>
              <p className="text-gray-700">
                Establish foundational knowledge for lifelong well-being.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature2: {
      title: "Cognitive Development",
      description: (
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-4">
              Cognitive development is the foundation for learning and critical
              thinking. Effective pedagogy must nurture and challenge students'
              cognitive abilities across different stages.
            </p>

            {/* Sections */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Sensory Exploration
              </h3>
              <p className="text-gray-700">
                Encourage learning through sensory experiences and hands-on
                activities.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Language Development
              </h3>
              <p className="text-gray-700">
                Foster language acquisition through rich and diverse
                experiences.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Early Literacy and Numeracy
              </h3>
              <p className="text-gray-700">
                Build a strong foundation for future learning.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature3: {
      title: "Social & Ethical Development",
      description: (
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-4">
              Social and ethical development is essential for students to become
              responsible and engaged citizens. Effective pedagogy must foster
              these skills across all stages of education.
            </p>

            {/* Sections */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Social Skills
              </h3>
              <p className="text-gray-700">
                Teach children basic social skills like sharing, cooperation,
                and taking turns.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Ethical Values
              </h3>
              <p className="text-gray-700">
                Introduce fundamental concepts of right and wrong, honesty, and
                respect.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Positive Relationships
              </h3>
              <p className="text-gray-700">
                Build strong and trusting relationships between children and
                adults.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature4: {
      title: "Emotional Development",
      description: (
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-4">
              Emotional development is a critical aspect of overall child
              well-being and learning. Effective pedagogy should address the
              emotional needs of students at all stages.
            </p>

            {/* Sections */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Emotional Literacy
              </h3>
              <p className="text-gray-700">
                Teach children to identify and express their emotions.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Social Skills
              </h3>
              <p className="text-gray-700">
                Encourage cooperation, sharing, and empathy.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Self-Regulation
              </h3>
              <p className="text-gray-700">
                Help children develop strategies for managing their emotions.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    assessment: {
      title: "Assessment",
      description: (
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-4">
              Assessment is an integral part of the teaching and learning
              process. The form and frequency of assessment should vary across
              different stages of education.
            </p>

            {/* Sections */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Observation-Based
              </h3>
              <p className="text-gray-700">
                Focus on observing children's behavior, interactions, and
                engagement in activities.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Portfolio Assessment
              </h3>
              <p className="text-gray-700">
                Collect samples of children's work to document their progress.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Play-Based Assessment
              </h3>
              <p className="text-gray-700">
                Observe children's learning through play and exploration.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const closeFeatureModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-b from-teal-100 to-gray-100">
      {/* Headings */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Foundational Stage
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-8">
          Pedagogical Considerations
        </h2>
      </div>

      {/* Feature Buttons */}
      <div className="flex flex-col w-full max-w-sm space-y-4">
        {["feature1", "feature2", "feature3", "feature4", "assessment"].map(
          (feature) => (
            <button
              key={feature}
              className={`w-full px-5 py-4 rounded-lg text-white text-lg sm:text-xl font-medium ${
                selectedFeature === feature ? "bg-teal-700" : "bg-teal-500"
              } transition-transform transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none`}
              onClick={() => handleFeatureClick(feature)}
            >
              {featuresData[feature].title}
            </button>
          )
        )}
      </div>

      {/* Feature Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-sm sm:max-w-md p-6 bg-white rounded-lg shadow-2xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl"
              onClick={closeFeatureModal}
            >
              &times;
            </button>
            <h3 className="mb-4 text-2xl font-semibold text-center text-teal-700">
              {featuresData[selectedFeature].title}
            </h3>
            <p className="text-gray-700 text-center mb-6">
              {featuresData[selectedFeature].description}
            </p>
            <div className="flex justify-center">
              <button
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                onClick={closeFeatureModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Foundation;
