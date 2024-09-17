import React from "react";
import { useState } from "react";

const Middle = () => {
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
                Managing Physical Changes
              </h3>
              <p className="text-gray-700">
                Address the unique physical and emotional needs of adolescents.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Promoting Physical Literacy
              </h3>
              <p className="text-gray-700">
                Develop competence, confidence, and character through physical
                activity.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Health and Wellness
              </h3>
              <p className="text-gray-700">
                Provide education on topics such as nutrition, body image, and
                substance abuse.
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
                Complex Thinking
              </h3>
              <p className="text-gray-700">
                Foster higher-order thinking skills such as analysis, synthesis,
                and evaluation.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Independent Learning
              </h3>
              <p className="text-gray-700">
                Encourage students to take responsibility for their own
                learning.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Technology Integration
              </h3>
              <p className="text-gray-700">
                Teach students how to use technology effectively for learning
                and research.
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
              Social and ethical development is essential for students to become
              responsible and engaged citizens. Effective pedagogy must foster
              these skills across all stages of education.
            </p>

            {/* Sections */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Identity Formation
              </h3>
              <p className="text-gray-700">
                Support students in developing a positive sense of self and
                belonging.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Civic Engagement
              </h3>
              <p className="text-gray-700">
                Foster interest in community involvement and social issues.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Critical Thinking
              </h3>
              <p className="text-gray-700">
                Encourage students to question societal norms and values.
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
                Empathy and Perspective-Taking
              </h3>
              <p className="text-gray-700">
                Encourage understanding and appreciation of diverse
                perspectives.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Coping Strategies
              </h3>
              <p className="text-gray-700">
                Teach students healthy ways to manage stress and anxiety.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Identity Development
              </h3>
              <p className="text-gray-700">
                Support students in exploring their sense of self and belonging.
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
                Balanced Assessment
              </h3>
              <p className="text-gray-700">
                Combine formative and summative assessments to measure both
                ongoing progress and end-of-year achievement.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Complex Assessments
              </h3>
              <p className="text-gray-700">
                Employ assessments that require higher-order thinking skills,
                such as projects, presentations, and research papers.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Student Self-Assessment
              </h3>
              <p className="text-gray-700">
                Encourage students to reflect on their own learning and set
                goals.
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Middle Stage</h1>
        <h2 className="text-2xl font-semibold text-teal-600">
          Pedagogical Considerations
        </h2>
      </div>

      {/* Feature Buttons */}
      <div className="flex flex-col w-full max-w-md space-y-4">
        {["feature1", "feature2", "feature3", "feature4", "assessment"].map(
          (feature) => (
            <button
              key={feature}
              className={`w-full px-5 py-4 rounded-lg text-white text-lg font-medium ${
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
            {/* <h3 className="mb-4 text-2xl font-semibold text-center text-teal-700">
              {featuresData[selectedFeature].title}
            </h3> */}
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

export default Middle;
