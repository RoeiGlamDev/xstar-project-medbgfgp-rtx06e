import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-black text-pink-500 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <a href="/about" className="hover:text-pink-300 transition duration-300">
              About Us
            </a>
            <a href="/services" className="hover:text-pink-300 transition duration-300">
              Services
            </a>
            <a href="/contact" className="hover:text-pink-300 transition duration-300">
              Contact
            </a>
          </div>
          <div className="flex flex-col">
            <span className="mb-2">Connect with us:</span>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:text-pink-300 transition duration-300 mb-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
          <p>Your gateway to a luxurious stay with cutting-edge technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;