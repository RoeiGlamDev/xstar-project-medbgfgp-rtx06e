import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "luxery dark AirBNB", 
  subtitle = "Elevating your stay through cutting-edge technology and luxurious experiences.", 
  ctaText = "Explore Our Properties", 
  ctaLink = "/properties" 
}) => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <motion.div 
        className="text-center p-6"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-pink-500">
          {title}
        </h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          {subtitle}
        </p>
        <motion.div 
          href={ctaLink} 
          className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
      <div className="absolute bottom-10 right-10 p-4">
        <p className="text-sm text-gray-400">Trusted by thousands for a high-end experience.</p>
      </div>
    </section>
  );
};

export default HeroSection;