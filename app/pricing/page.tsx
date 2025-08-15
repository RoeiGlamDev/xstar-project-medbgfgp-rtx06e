import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$99/month',
    features: [
      'Access to luxury dark-themed properties',
      '24/7 customer support',
      'Basic analytics dashboard',
    ],
  },
  {
    name: 'Premium',
    price: '$199/month',
    features: [
      'All Basic features',
      'Advanced booking management',
      'Personalized property recommendations',
      'Priority customer service',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: [
      'All Premium features',
      'Custom analytics solutions',
      'API access for integration',
      'Dedicated account manager',
    ],
  },
];

const FAQ = [
  {
    question: 'What is luxery dark AirBNB?',
    answer: 'luxery dark AirBNB is a technology-driven platform providing elegant, high-end accommodations.',
  },
  {
    question: 'How do I book a property?',
    answer: 'Simply select a property, choose your dates, and complete the booking process through our secure platform.',
  },
  {
    question: 'Is there customer support available?',
    answer: 'Yes, our dedicated support team is available 24/7 to assist you with any inquiries.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen p-8">
      <motion.div
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing Plans for luxery dark AirBNB
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  - {feature}
                </li>
              ))}
            </ul>
            <button className="bg-pink-500 text-black rounded-full py-2 px-4 hover:bg-pink-600 transition-colors">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-3xl font-bold mt-12 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="bg-gray-800 rounded-lg p-6">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;