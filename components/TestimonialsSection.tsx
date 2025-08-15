import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Jessica Tran',
    review: 'Staying at luxery dark AirBNB was a game changer for my business trip. The high-tech amenities made my work seamless and enjoyable!',
    rating: 5,
    photo: '/images/jessica-tran.jpg',
  },
  {
    name: 'Michael Chen',
    review: 'The modern design and luxurious feel of luxery dark AirBNB truly exceeded my expectations. I loved every moment of my stay!',
    rating: 4,
    photo: '/images/michael-chen.jpg',
  },
  {
    name: 'Sophia Patel',
    review: 'The smart home features at luxery dark AirBNB allowed me to control everything from lighting to climate with ease. Highly recommend for tech lovers!',
    rating: 5,
    photo: '/images/sophia-patel.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-12 px-6">
      <motion.div
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Guests Say About luxery dark AirBNB
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 m-4 w-full max-w-xs shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={testimonial.photo}
              alt={${testimonial.name} photo}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            <p className="mb-2 text-gray-400">{testimonial.review}</p>
            <div className="flex items-center">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <svg key={i} className="w-5 h-5 text-pink-500 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.88 3.09 1.12-6.53-4.76-4.64 6.58-.96L10 0l2.94 5.96 6.58 .96-4.76 4.64 1.12 6.53z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;