// src/pages/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to Flask backend
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) setIsSubmitted(true);
  };

  return (
    <motion.section
      className="bg-gray-200 py-20 px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-5 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Send
          </button>
          {isSubmitted && (
            <motion.div
              className="mt-4 bg-green-500 text-white p-2 rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Message sent successfully!
            </motion.div>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
