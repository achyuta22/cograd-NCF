import React from 'react';

const Modal = ({ isOpen, onClose, keyword }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Keyword Details</h2>
        <p className="mb-4"><strong>Name:</strong> {keyword.name}</p>
        <p className="mb-4"><strong>Description:</strong> {keyword.description}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
