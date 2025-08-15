import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-black rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h2 className="text-pink-500 text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{content}</p>
        <button
          onClick={onClose}
          className="bg-pink-500 text-black font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;