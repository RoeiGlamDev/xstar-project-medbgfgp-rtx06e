import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Smart Home Automation',
    description: 'Experience seamless control of home environments with cutting-edge smart technology.',
    icon: <i className="fas fa-home"></i>,
  },
  {
    title: 'Luxury Digital Concierge',
    description: '24/7 access to personalized services, from bookings to recommendations, right at your fingertips.',
    icon: <i className="fas fa-concierge-bell"></i>,
  },
  {
    title: 'State-of-the-Art Security',
    description: 'Advanced security systems ensuring your peace of mind while you enjoy your stay at luxery dark AirBNB.',
    icon: <i className="fas fa-shield-alt"></i>,
  },
  {
    title: 'High-Speed WiFi',
    description: 'Stay connected with ultra-fast internet available throughout the property for work or play.',
    icon: <i className="fas fa-wifi"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-12 px-6">
      <motion.div 
        className="text-3xl font-bold text-center mb-8" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Discover the Features of luxery dark AirBNB
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-center mb-4">
              <div className="text-4xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;