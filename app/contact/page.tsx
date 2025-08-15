import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-black text-pink-500 min-h-screen flex flex-col items-center justify-center p-10">
      <motion.div 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxery dark AirBNB
      </motion.h1>
      <motion.div 
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 bg-gray-800 text-pink-500 border border-pink-500 rounded focus:outline-none focus:ring focus:ring-pink-500 transition duration-200"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 bg-gray-800 text-pink-500 border border-pink-500 rounded focus:outline-none focus:ring focus:ring-pink-500 transition duration-200"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-2 bg-gray-800 text-pink-500 border border-pink-500 rounded focus:outline-none focus:ring focus:ring-pink-500 transition duration-200"
            rows={4}
            required 
          />
        </div>
        <motion.div 
          type="submit" 
          className="bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600 transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <p className="mt-2">luxery dark AirBNB is located at 123 Luxury St, High-End City, Techland</p>
        <h3 className="mt-4 text-xl font-semibold">Business Hours</h3>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;