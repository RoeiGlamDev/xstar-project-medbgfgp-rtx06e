import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      className="bg-black bg-opacity-80 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-pink-500 text-2xl font-bold">{title}</h2>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;