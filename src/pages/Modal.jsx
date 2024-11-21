// src/components/Modal.js
import { motion } from 'framer-motion';
// import React from 'react';

const Modal = ({ isOpen, oncontinue , message , btnname }) => {
  
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={oncontinue}
    >
      <motion.div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={oncontinue}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">
          Welcome to PixPick!
        </h2>
        <p className="text-gray-700 mb-4">
          {message}
        </p>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          onClick={oncontinue}
        >
          {btnname}
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
