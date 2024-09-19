import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // -1 navigates to the previous page in the history stack
  };

  return (
    <button
      onClick={handleGoBack}
      className="fixed bottom-4 z-10 left-8 bg-gradient-to-br from-red-400 to-red-400 text-white p-5 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500 active:scale-95 focus:ring-4 focus:ring-red-300"
    >
      Back
    </button>
  );
};

export default BackButton;
