import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/Backbutton";

const Stage2 = () => {
  const [showDetails, setShowDetails] = useState(null);
  const navigate = useNavigate();

  const toggleDetails = (section) => {
    setShowDetails((prev) => (prev === section ? null : section));
  };

  const handleNextPage = () => {
    navigate("/stage3");
  };

  return (
    <div className="flex flex-col min-h-screen justify-between p-4 bg-gray-50 ">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-teal-700 drop-shadow-lg">
        Child Development
      </h2>

      <p className="text-base md:text-lg mb-12 text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
        Child development is influenced by the interplay of three different
        processes, namely, biological processes, cognitive processes, and
        socio-emotional processes. These processes are intricately interwoven
        with each other, playing a crucial role in a child’s development.
      </p>

      {/* Development Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-56">
        {/* Box 1 - Stages */}
        <div className="relative flex flex-col gap-4 col-span-1">
          <div
            className={`bg-gradient-to-br from-teal-500 to-teal-700 p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer ${
              showDetails === "stages" ? "ring-4 ring-teal-300" : ""
            }`}
            onClick={() => toggleDetails("stages")}
          >
            <h3 className="text-lg md:text-xl font-bold text-center text-white mb-2">
              Stages of Child Development
            </h3>
            <p className="text-white text-center text-sm">
              Click to learn more
            </p>
          </div>

          {/* Details for Stages */}
          {showDetails === "stages" && (
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out opacity-100 scale-100 transform">
              <h3 className="text-2xl font-semibold text-teal-800 mb-4 text-center">
                Child Development Stages
              </h3>
              <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
                <li>
                  <strong>Infancy (birth to 3 years):</strong> Rapid growth,
                  dependency on adults, and exploration.
                </li>
                <li>
                  <strong>Early Childhood (3-6/7 years):</strong> Growing
                  independence, peer interactions, and exploratory play.
                </li>
                <li>
                  <strong>Middle to Late Childhood (8-11/12 years):</strong>{" "}
                  Accelerated physical, emotional, and cognitive development.
                </li>
                <li>
                  <strong>Adolescence (12+ years):</strong> Physical maturation
                  and identity formation.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Box 2 - Family */}
        <div className="relative flex flex-col gap-4 col-span-1">
          <div
            className={`bg-gradient-to-br from-teal-500 to-teal-700 p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer ${
              showDetails === "family" ? "ring-4 ring-teal-300" : ""
            }`}
            onClick={() => toggleDetails("family")}
          >
            <h3 className="text-lg md:text-xl font-bold text-center text-white mb-2">
              Role of Family in Child Development
            </h3>
            <p className="text-white text-center text-sm">
              Click to learn more
            </p>
          </div>

          {/* Details for Family */}
          {showDetails === "family" && (
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out opacity-100 scale-100 transform">
              <h3 className="text-2xl font-semibold text-teal-800 mb-4 text-center">
                Role of Family in Child Development
              </h3>
              <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
                <li>
                  <strong>Infancy:</strong> Secure attachment bonds are crucial
                  for infant development.
                </li>
                <li>
                  <strong>Early Childhood:</strong> Families influence emotional
                  development and a sense of security.
                </li>
                <li>
                  <strong>Middle Childhood:</strong> Peer relationships become
                  more influential, but family still plays a vital role.
                </li>
                <li>
                  <strong>Adolescence:</strong> Peer influence increases, but
                  family dynamics remain essential.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Box 3 - Peers */}
        <div className="relative flex flex-col gap-4 col-span-1">
          <div
            className={`bg-gradient-to-br from-teal-500 to-teal-700 p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer ${
              showDetails === "peers" ? "ring-4 ring-teal-300" : ""
            }`}
            onClick={() => toggleDetails("peers")}
          >
            <h3 className="text-lg md:text-xl font-bold text-center text-white mb-2">
              Role of Peers in Child Development
            </h3>
            <p className="text-white text-center text-sm">
              Click to learn more
            </p>
          </div>

          {/* Details for Peers */}
          {showDetails === "peers" && (
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out opacity-100 scale-100 transform">
              <h3 className="text-2xl font-semibold text-teal-800 mb-4 text-center">
                Role of Peers in Child Development
              </h3>
              <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
                <li>
                  <strong>Early Childhood:</strong> Peers provide opportunities
                  for play, cooperation, and conflict resolution.
                </li>
                <li>
                  <strong>Middle Childhood:</strong> Peer relationships deepen,
                  contributing to emotional development.
                </li>
                <li>
                  <strong>Adolescence:</strong> Peer groups shape attitudes,
                  behaviors, and aspirations.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Next Page Button */}
      <BackButton />
      <button
        onClick={handleNextPage}
        className="fixed bottom-4 right-8 bg-gradient-to-br from-teal-400 to-teal-600 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-700 active:scale-95 focus:ring-4 focus:ring-teal-300"
      >
        Next
      </button>
    </div>
  );
};

export default Stage2;
