import React from 'react';
import bgImage from "../images/Screenshot_2024_0817_073510.png"; // Update the path to your image
import { useNavigate } from 'react-router-dom';

const EnvironmentLearning = () => {
  const navigate=useNavigate();
  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        {/* Background Image with Text */}
        <div className="relative w-full h-1/3 bg-cover bg-center flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-8">
            <h3 className="text-4xl font-bold mb-0"> Student Well-being and Learning</h3>
            <p className="text-lg mb-0">
              The section underscores the necessity for schools to provide a safe and stimulating physical environment to make school a positive experience . It highlights the importance of well-designed physical spaces in enhancing student well-being and learning. The quality and maintenance of school infrastructure are noted as key factors differentiating good schools from others, especially in the eyes of parents and the community.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-4 md:px-12 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md" onClick={()=>navigate("/outdoorInfraQuiz")}>
            <h2 className="text-xl font-bold mb-2">OutDoor Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed">
              {/* Creating spaces that are aesthetically pleasing and functional can significantly impact student engagement and learning outcomes. */}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md" onClick={()=>navigate("/indoorInfraQuiz")}>
            <h2 className="text-xl font-bold mb-2">Indoor Infrastrucutre</h2>
            <p className="text-gray-700 leading-relaxed">
              {/* Ensuring a safe physical environment is crucial for the overall well-being of students, minimizing distractions and potential hazards. */}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md" onClick={()=>navigate("/safetyInfra")}>
            <h2 className="text-xl font-bold mb-2">Safety Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed">
              {/* Regular maintenance of school facilities ensures that infrastructure remains in good condition, which positively affects student perceptions. */}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Inclusion Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed">
              {/* The quality of school infrastructure can influence community views and contribute to the overall reputation of the school. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentLearning;
