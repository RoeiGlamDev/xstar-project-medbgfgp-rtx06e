import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubscribe: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubscribe(email);
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-black text-pink-500 py-12 px-4">
      <motion.div
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Stay Updated with luxery dark AirBNB
      </motion.h2>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Subscribe to our newsletter for exclusive offers, luxury travel tips, and updates from luxery dark AirBNB.
      </motion.p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="bg-gray-800 text-pink-500 border border-pink-500 rounded-md p-3 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
        />
        <motion.div
          type="submit"
          disabled={isSubmitting}
          className={bg-pink-500 text-black font-semibold rounded-md p-3 hover:bg-pink-600 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </form>
    </section>
  );
};

export default NewsletterSection;