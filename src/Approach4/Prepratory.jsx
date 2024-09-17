import React from "react";
import { useState } from "react";

const Prepratory = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const featuresData = {
    feature1: {
      title: "Physical Development",
      description: (
        <div className="flex max-h-[70vh] overflow-auto flex-col items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-white ">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Physical development is a cornerstone of overall child
              development. Effective pedagogy must acknowledge the critical role
              of physical activity and well-being in learning.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Continued Physical Activity
              </h3>
              <p className="text-gray-700">
                Maintain opportunities for active learning and exploration.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Fine Motor Skill Development
              </h3>
              <p className="text-gray-700">
                Incorporate activities that enhance dexterity and coordination.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Teacher as Role Model
              </h3>
              <p className="text-gray-700">
                Demonstrate enthusiasm for physical activity and healthy
                behaviors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature2: {
      title: "Cognitive Development",
      description: (
        <div className="flex max-h-[70vh] overflow-auto flex-col items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-white ">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Cognitive development is the foundation for learning and critical
              thinking. Effective pedagogy must nurture and challenge students'
              cognitive abilities across different stages.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Concrete to Abstract
              </h3>
              <p className="text-gray-700">
                Transition from concrete to more abstract thinking.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Problem-Solving
              </h3>
              <p className="text-gray-700">
                Develop critical thinking and problem-solving skills.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Inquiry-Based Learning
              </h3>
              <p className="text-gray-700">
                Encourage curiosity and exploration.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature3: {
      title: "Social & Ethical Development",
      description: (
        <div className="flex max-h-[70vh] overflow-auto flex-col items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-white ">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Cognitive development is the foundation for learning and critical
              thinking. Effective pedagogy must nurture and challenge students'
              cognitive abilities across different stages.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Concrete to Abstract
              </h3>
              <p className="text-gray-700">
                Transition from concrete to more abstract thinking.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Problem-Solving
              </h3>
              <p className="text-gray-700">
                Develop critical thinking and problem-solving skills.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Inquiry-Based Learning
              </h3>
              <p className="text-gray-700">
                Encourage curiosity and exploration.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Peer Interactions
              </h3>
              <p className="text-gray-700">
                Encourage collaborative learning and conflict resolution skills.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature4: {
      title: "Emotional Development",
      description: (
        <div className="flex max-h-[70vh] overflow-auto flex-col items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-white ">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Emotional development is a critical aspect of overall child
              well-being and learning. Effective pedagogy should address the
              emotional needs of students at all stages.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Emotional Intelligence
              </h3>
              <p className="text-gray-700">
                Build on foundational emotional skills by teaching children to
                understand and respond to others' emotions.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Problem-Solving
              </h3>
              <p className="text-gray-700">
                Equip students with strategies for resolving conflicts and
                managing challenges.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Self-Awareness
              </h3>
              <p className="text-gray-700">
                Foster self-reflection and understanding of personal strengths
                and weaknesses.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    assessment: {
      title: "Assessment",
      description: (
        <div className="flex max-h-[70vh] overflow-auto flex-col items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-white ">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Assessment is an integral part of the teaching and learning
              process. The form and frequency of assessment should vary across
              different stages of education.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Formative Assessment
              </h3>
              <p className="text-gray-700">
                Implement ongoing assessment to monitor student progress and
                adjust instruction accordingly.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Variety of Assessments
              </h3>
              <p className="text-gray-700">
                Utilize a mix of written, oral, and practical assessments to
                evaluate different learning outcomes.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                End-of-Year Assessment
              </h3>
              <p className="text-gray-700">
                Conduct a summative assessment to determine readiness for the
                next grade level.
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
    <div className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-b from-teal-50 to-gray-100">
      {/* Headings */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Preparatory Stage
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-600">
          Pedagogical Considerations
        </h2>
      </div>

      {/* Feature Buttons */}
      <div className="flex flex-col w-full max-w-md space-y-4">
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
          <div className="relative w-full max-w-sm sm:max-w-md p-2 bg-white rounded-lg shadow-2xl">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-3xl"
              onClick={closeFeatureModal}
            >
              &times;
            </button>

            <p className="text-gray-700 text-center">
              {featuresData[selectedFeature].description}
            </p>
            {/* <div className="flex justify-center">
              <button
                className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                onClick={closeFeatureModal}
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Prepratory;
