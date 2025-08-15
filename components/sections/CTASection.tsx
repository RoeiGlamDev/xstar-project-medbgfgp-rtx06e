import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Experience the Elegance of luxery dark AirBNB",
  description = "Immerse yourself in a world where technology meets luxury. Our dark-themed AirBNB properties redefine high-end living with cutting-edge amenities and an unforgettable ambiance.",
  buttonText = "Book Your Stay",
  buttonLink = "/book",
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-black p-10 text-white">
      <motion.div
        className="text-4xl font-bold mb-4 text-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div
        href={buttonLink}
        className="bg-pink-500 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;