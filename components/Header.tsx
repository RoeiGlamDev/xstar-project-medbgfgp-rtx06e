import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  return (
    <header className="bg-black text-pink-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src={logoUrl} alt="luxery dark AirBNB Logo" className="h-10 mr-3" />
          <h1 className="text-2xl font-bold">luxery dark AirBNB</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <motion.div
            href="#about"
            className="hover:text-pink-300 transition duration-200"
            whileHover={{ scale: 1.1 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#properties"
            className="hover:text-pink-300 transition duration-200"
            whileHover={{ scale: 1.1 }}
          >
            Properties
          </motion.a>
          <motion.div
            href="#services"
            className="hover:text-pink-300 transition duration-200"
            whileHover={{ scale: 1.1 }}
          >
            Services
          </motion.a>
          <motion.div
            href="#contact"
            className="hover:text-pink-300 transition duration-200"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button className="focus:outline-none text-pink-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;