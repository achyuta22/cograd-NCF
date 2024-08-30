import React from "react";
import { motion } from "framer-motion";
import cct1 from "../images/cct1.png";
import cct2 from "../images/cct2.png";
import cct3 from "../images/cct3.png";
import cct4 from "../images/cct4.png";
import cct5 from "../images/cct5.png";
import cct6 from "../images/cct6.png";
import cct7 from "../images/cct7.png";

const CCT = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      {/* Main Banner Section */}
      <div className="relative w-full h-80 mb-12 rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cct1}
            alt="Cross Cutting Themes Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-blue-500 bg-opacity-60 p-8">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl xl:text-6xl leading-tight tracking-tight text-center shadow-lg">
            Cross Cutting Themes
          </h1>
        </div>
      </div>

      {/* Content Section with Image and Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center md:text-left mb-4">
            Embracing Diversity in Education
          </h2>
          <p className="text-gray-600 text-center md:text-left">
            Understanding and integrating cross-cutting themes that influence
            educational success.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={cct1}
            alt="Educational Theme"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-t-4 border-teal-400"
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0, // No delay for the first card
          }}
        >
          <img
            src={cct2}
            alt="Rootedness in India"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center text-teal-700">
            🌳 Rootedness in India
          </h2>
          <p className="text-gray-600 text-center">
            Learning about the rich cultural heritage of India.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-t-4 border-pink-400"
          animate={{ y: ["0%", "10%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0, // No delay for the first card
          }}
        >
          <img
            src={cct3}
            alt="Values & Dispositions"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center text-pink-700">
            ❤️ Values & Dispositions
          </h2>
          <p className="text-gray-600 text-center">
            Instilling strong moral values and positive dispositions.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-400"
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0, // No delay for the first card
          }}
        >
          <img
            src={cct4}
            alt="Caring for Nature"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center text-green-700">
            🌱 Caring for Nature
          </h2>
          <p className="text-gray-600 text-center">
            Encouraging respect and care for the environment.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-400"
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.5, // Add a slight delay for the alternate row
          }}
        >
          <img
            src={cct5}
            alt="Inclusion in Schools"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center text-blue-700">
            🏫 Inclusion in Schools
          </h2>
          <p className="text-gray-600 text-center">
            Promoting inclusive education for all students.
          </p>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-400"
          animate={{ y: ["0%", "10%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.5, // Add a slight delay for the alternate row
          }}
        >
          <img
            src={cct6}
            alt="Guidance & Counselling"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center text-purple-700">
            💬 Guidance & Counselling
          </h2>
          <p className="text-gray-600 text-center">
            Offering support and guidance for personal development.
          </p>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-400"
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.5, // Add a slight delay for the alternate row
          }}
        >
          <img
            src={cct7}
            alt="Educational Tech"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2 text-center text-red-700">
            💻 Educational Tech
          </h2>
          <p className="text-gray-600 text-center">
            Integrating technology for enhanced learning experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CCT;
