import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  primary: 'bg-pink-500 text-white hover:bg-pink-600',
  secondary: 'bg-black text-pink-500 hover:bg-gray-800',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <motion.div
      className={`py-2 px-4 rounded transition ease-in-out duration-300 ${buttonVariants[variant]`}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;