import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  {
    title: 'Elegant Accommodations',
    description: 'Experience the finest luxury stays with our meticulously designed properties that redefine comfort and style.',
  },
  {
    title: 'Smart Home Technology',
    description: 'Enjoy cutting-edge technology that enhances your stay, from automated lighting to smart climate control.',
  },
  {
    title: 'Exceptional Service',
    description: 'Our dedicated team is available 24/7 to ensure your stay is nothing short of extraordinary.',
  },
];

const FeatureCard = ({ title, description }) => (
  <motion.div
    className="bg-black text-pink-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-extrabold">luxery dark AirBNB</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-pink-500 hover:underline">Features</a></li>
            <li><a href="#contact" className="text-pink-500 hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black">
        <section className="text-center mb-12">
          <motion.div
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to luxery dark AirBNB
          </motion.h2>
          <p className="text-lg max-w-xl mx-auto">
            Discover high-end accommodations with a modern touch, tailored for the discerning traveler.
          </p>
        </section>

        <section id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </section>
      </main>

      <footer className="bg-black text-center p-6">
        <p className="text-sm">&copy; 2023 luxery dark AirBNB. All rights reserved.</p>
        <div id="contact" className="mt-4">
          <p className="text-sm">Contact us at: <a href="mailto:info@luxerydarkairbnb.com" className="text-pink-500 hover:underline">info@luxerydarkairbnb.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;