import { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Stats {
  title: string;
  value: number;
  description: string;
}

const statsData: Stats[] = [
  {
    title: 'Total Listings',
    value: 120,
    description: 'Luxurious properties available for exclusive stays',
  },
  {
    title: 'Guest Satisfaction',
    value: 98,
    description: 'Percentage of guests who rated their stay as excellent',
  },
  {
    title: 'Awards Won',
    value: 15,
    description: 'Recognized for excellence in luxury accommodations',
  },
  {
    title: 'Available Locations',
    value: 5,
    description: 'Distinctive locations around the globe',
  },
];

const StatsSection: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>(new Array(statsData.length).fill(0));

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    statsData.forEach((stat, index) => {
      const timeoutId = setTimeout(() => {
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = stat.value;
          return newValues;
        });
      }, index * 500); // Staggered animations
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="bg-black text-pink-500 py-20 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">Achievements of luxery dark AirBNB</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform duration-200 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-3xl font-semibold">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.5 }}
              >
                {animatedValues[index]}
              </motion.span>
            </h3>
            <p className="text-lg mt-2">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;