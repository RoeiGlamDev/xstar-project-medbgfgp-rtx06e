import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Stay',
    price: '$99/night',
    features: [
      'High-speed Wi-Fi',
      'Smart TV with streaming services',
      'Access to premium kitchen appliances',
      '24/7 Customer Support',
    ],
    cta: 'Book Now',
  },
  {
    title: 'Premium Stay',
    price: '$149/night',
    features: [
      'All Basic Stay features',
      'Luxury bedding and linens',
      'Private balcony with city views',
      'In-house tech support',
    ],
    cta: 'Reserve Your Room',
  },
  {
    title: 'Elite Experience',
    price: '$199/night',
    features: [
      'All Premium Stay features',
      'Personalized welcome package',
      'Exclusive access to smart home features',
      'Private concierge service',
    ],
    cta: 'Experience Luxury',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-16 px-4">
      <motion.div
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pricing Plans for luxery dark AirBNB
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 m-4 flex-1 hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4">{tier.title}</h3>
            <p className="text-2xl font-bold mb-4">{tier.price}</p>
            <ul className="mb-4">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-pink-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-pink-600">
              {tier.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;