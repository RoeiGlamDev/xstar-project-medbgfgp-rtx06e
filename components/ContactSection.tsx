import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormInputs {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInputs>({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    if (!formData.name) newErrors.push('Name is required.');
    if (!formData.email) newErrors.push('Email is required.');
    if (!formData.reason) newErrors.push('Please select a reason for contact.');
    if (!formData.message) newErrors.push('Message cannot be empty.');
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', reason: '', message: '' });
      setErrors([]);
    }
  };

  return (
    <section className="bg-black text-pink-500 p-10 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxery dark AirBNB
      </motion.h2>
      <p className="mb-5">
        For technology inquiries, please fill out the form below or reach us at our location.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 rounded bg-gray-800 text-pink-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 rounded bg-gray-800 text-pink-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 rounded bg-gray-800 text-pink-500 focus:outline-none"
            required
          >
            <option value="">Select a reason</option>
            <option value="Inquiry about technology services">Inquiry about technology services</option>
            <option value="Partnership opportunities">Partnership opportunities</option>
            <option value="General feedback">General feedback</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-pink-500 rounded bg-gray-800 text-pink-500 focus:outline-none"
            rows={4}
            required
          ></textarea>
        </div>
        {errors.length > 0 && (
          <div className="text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button
          type="submit"
          className="bg-pink-500 text-black font-bold py-2 px-4 rounded hover:bg-pink-400 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Business Information</h3>
        <p>Address: 123 Luxery St, Tech City, TX 12345</p>
        <p>Business Hours: Mon-Fri 9 AM - 5 PM</p>
        <p>Email: contact@luxerydarkairbnb.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default ContactSection;