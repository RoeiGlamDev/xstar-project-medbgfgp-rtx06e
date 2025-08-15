import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  className?: string;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, className }) => {
  return (
    <motion.div
      className={`bg-black text-pink-500 p-6 rounded-lg shadow-lg ${className`}}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-label="Luxery Dark AirBNB Content"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;