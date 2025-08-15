import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  expertise: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Johnson',
    position: 'CEO & Founder',
    expertise: 'Technology Innovator',
    imageUrl: '/images/team/alex.jpg',
  },
  {
    name: 'Samantha Lee',
    position: 'CTO',
    expertise: 'Software Architect',
    imageUrl: '/images/team/samantha.jpg',
  },
  {
    name: 'Michael Smith',
    position: 'Lead Designer',
    expertise: 'UX/UI Specialist',
    imageUrl: '/images/team/michael.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">About luxery dark AirBNB</h2>
        <p className="mb-4">
          At luxery dark AirBNB, we redefine hospitality through technology. Our journey began with a vision to merge luxurious stays with cutting-edge tech solutions, creating an unparalleled experience for travelers. We believe that every guest deserves a stay that not only meets their needs but exceeds their expectations through smart technology and design.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-4">
          Our mission at luxery dark AirBNB is to provide a seamless, high-end lodging experience that integrates the latest technology. We aim to connect guests with unique accommodations while ensuring the utmost comfort and convenience, utilizing smart home features and personalized services.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <p className="mb-4">
          We value innovation, sustainability, and customer satisfaction. Our commitment to utilizing eco-friendly technologies and practices sets us apart in the industry, making every stay not just luxurious but also responsible.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-transform transform hover:scale-105"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full mb-4 w-24 h-24 mx-auto"
              />
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-pink-400">{member.position}</p>
              <p className="text-gray-400">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;