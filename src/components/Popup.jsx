import React from "react";

const Popup = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Popup;
