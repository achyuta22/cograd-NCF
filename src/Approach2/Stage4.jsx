import React from "react";
import vikasImage from "../images/vikas.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/Backbutton";

const Stage4 = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/stage5");
  };
  return (
    <div>
      <div className="bg-white p-8  flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold text-teal-700 mb-8 text-center md:text-left">
            Panchkosha Vikas
          </h2>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
            <li>
              <strong>Physical Development (Sharirik Vikas):</strong> This
              refers to the development of the physical body and its functions.
            </li>
            <li>
              <strong>Development of Life Energy (Pranik Vikas):</strong> This
              involves the growth and enhancement of vital energy within the
              body.
            </li>
            <li>
              <strong>Emotional/Mental Development (Manasik Vikas):</strong>{" "}
              This encompasses the growth of emotional and mental capacities.
            </li>
            <li>
              <strong>Intellectual Development (Bauddhik Vikas):</strong> This
              pertains to the advancement of cognitive abilities and
              intellectual growth.
            </li>
            <li>
              <strong>Spiritual Development (Chaitsik Vikas):</strong> This
              focuses on the growth of spiritual awareness and understanding.
            </li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={vikasImage}
            alt="Panchkosha Vikas"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
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

export default Stage4;
