import { useState } from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const goto = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // To store error message
  const [success, setSuccess] = useState(""); // To store success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submit behavior

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("https://pixpick-api.onrender.com/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response.data === "userexists") {
        setError(
          "User already exists. Please try a different username or email."
        );
      } else if(response.data === "inserted" ){
        setSuccess("Account created successfully! Redirecting to login... \n Click on sign in button to continue...");
        setTimeout(() => {
          goto("/login");
        }, 3000);
      }
    } catch (error) {
      setError("An error occurred while registering. Please try again.");
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-screen min-h-screen bg-gradient-to-r from-purple-600 via-violet-500 to-green-400 text-black flex items-center justify-center py-16 sm:py-24 px-4 sm:px-8"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
          Create an Account
        </h1>

        {/* Error or Success message */}
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}
        {success && (
          <div className="text-green-600 text-center mb-4">{success}</div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                <FaUserAlt size={20} className="text-gray-400 ml-3" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                <FaEnvelope size={20} className="text-gray-400 ml-3" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                <FaLock size={20} className="text-gray-400 ml-3" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Create a password"
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                <FaLock size={20} className="text-gray-400 ml-3" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition duration-300 flex items-center justify-center"
            >
              <IoMdPersonAdd size={20} className="mr-2" />
              Sign Up
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-violet-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignupPage;
