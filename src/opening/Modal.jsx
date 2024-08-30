import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{content}</div>
        <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
