import React from "react";
import { useState } from "react";

const Secondary = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const featuresData = {
    feature1: {
      title: "Physical Development",
      description: (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Physical development is a cornerstone of overall child
              development. Effective pedagogy must acknowledge the critical role
              of physical activity and well-being in learning.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Physical Well-being
              </h3>
              <p className="text-gray-700">
                Continue to emphasize the importance of physical activity and
                healthy lifestyle choices.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Adapting to Physical Changes
              </h3>
              <p className="text-gray-700">
                Support students as they navigate the complexities of puberty
                and adolescent development.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Life Skills
              </h3>
              <p className="text-gray-700">
                Equip students with the knowledge and skills to make informed
                decisions about their health and well-being.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature2: {
      title: "Cognitive Development",
      description: (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Cognitive development is the foundation for learning and critical
              thinking. Effective pedagogy must nurture and challenge students'
              cognitive abilities across different stages.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Critical Thinking and Analysis
              </h3>
              <p className="text-gray-700">
                Develop advanced reasoning and problem-solving skills.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Creativity and Innovation
              </h3>
              <p className="text-gray-700">
                Encourage original thought and creative problem-solving.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Digital Literacy
              </h3>
              <p className="text-gray-700">
                Teach students to evaluate information critically and use
                technology responsibly.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature3: {
      title: "Social & Ethical Development",
      description: (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Social and ethical development is essential for students to become
              responsible and engaged citizens. Effective pedagogy must foster
              these skills across all stages of education.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Social Responsibility
              </h3>
              <p className="text-gray-700">
                Promote civic engagement and a sense of responsibility towards
                society.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Ethical Decision-Making
              </h3>
              <p className="text-gray-700">
                Develop students' ability to make informed and ethical choices.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Diversity and Inclusion
              </h3>
              <p className="text-gray-700">
                Cultivate respect and appreciation for different cultures and
                perspectives.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    feature4: {
      title: "Emotional Development",
      description: (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
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
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <p className="text-gray-700 text-lg mb-6">
              Assessment is an integral part of the teaching and learning
              process. The form and frequency of assessment should vary across
              different stages of education.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Standardized Assessments
              </h3>
              <p className="text-gray-700">
                Prepare students for high-stakes examinations while also
                emphasizing formative assessment.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Performance-Based Assessment
              </h3>
              <p className="text-gray-700">
                Evaluate students' ability to apply knowledge and skills in
                real-world contexts.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Authentic Assessment
              </h3>
              <p className="text-gray-700">
                Use assessment tasks that are relevant and meaningful to
                students' lives.
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
          Secondary Stage
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
          <div className="relative w-full max-w-sm sm:max-w-md p-6 bg-white rounded-lg shadow-2xl">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-3xl"
              onClick={closeFeatureModal}
            >
              &times;
            </button>
            <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-center text-teal-700">
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

export default Secondary;
