import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    position: 'CEO & Founder',
    bio: 'Alice brings over a decade of experience in the technology sector, focusing on luxury accommodations and customer experience.',
    image: '/images/alice.jpg',
  },
  {
    name: 'Michael Smith',
    position: 'CTO',
    bio: 'With a strong background in software engineering, Michael leads our tech innovations to ensure a seamless user experience.',
    image: '/images/michael.jpg',
  },
  {
    name: 'Sophia Lee',
    position: 'Head of Marketing',
    bio: 'Sophia crafts our brand narrative, ensuring that luxery dark AirBNB resonates with high-end travelers.',
    image: '/images/sophia.jpg',
  },
];

const About = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen p-8">
      <motion.div 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        About luxery dark AirBNB
      </motion.h1>
      <motion.section 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p>
          Founded in 2023, luxery dark AirBNB emerged from a vision to redefine luxury travel through technology. 
          We leverage cutting-edge solutions to connect high-end travelers with extraordinary properties in a seamless manner. 
          Our commitment to excellence is reflected in every interaction, ensuring that our guests experience the pinnacle of luxury.
        </p>
      </motion.section>
      <motion.section 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6">
          <li>Innovation: We embrace technology to enhance the guest experience.</li>
          <li>Luxury: Every property curated meets our high standards of elegance.</li>
          <li>Integrity: We operate with transparency and honesty in all our dealings.</li>
          <li>Customer-Centricity: Our guests are at the heart of everything we do.</li>
        </ul>
      </motion.section>
      <motion.section 
        className="mb-12"
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-400">{member.position}</p>
              <p className="mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;