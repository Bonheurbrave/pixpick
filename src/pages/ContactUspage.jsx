import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from 'axios';

const ContactUspage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await axios.post("https://pixpick-api.onrender.com/messages", formData)
      .then(res => console.log(res.data));
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-purple-600 via-violet-500 to-green-400 text-white py-16 sm:py-24 px-4 sm:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8">

        {/* Contact Information Section */}
        <div className="w-full sm:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6  mt-6">Get in Touch</h2>
          <p className="text-lg mb-4 flex items-center">
            <FaEnvelope size={24} className="mr-2 text-yellow-300" />
            info@bobotech.com
          </p>
          <p className="text-lg mb-4 flex items-center">
            <FaPhoneAlt size={24} className="mr-2 text-yellow-300" />
            +250 794 082 154
          </p>
          <p className="text-lg mb-6 flex items-center w-4/5 sm:w-full">
            <FaMapMarkedAlt size={24} className="mr-2 text-yellow-300" />
            123 PixPick Avenue, Acodes TSS, Muhanga
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full sm:w-1/2 bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">Send Us a Message</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition duration-300"
              >
                <IoMdSend size={20} className="mr-2" />
                Send Message
              </button>

              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUspage;
