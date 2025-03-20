import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Simulate an API call
      setTimeout(() => {
        setLoading(false);
        alert("Sign up successful!");
      }, 2000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
        delayChildren: 0.2, // Delay before the first child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="signup"
      className="  min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6"
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your name"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Email Field */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Password Field */}
          <motion.div className="mb-4" variants={itemVariants}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your password"
            />
            <AnimatePresence>
              {errors.password && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.password}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Confirm Password Field */}
          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Confirm your password"
            />
            <AnimatePresence>
              {errors.confirmPassword && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {errors.confirmPassword}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sign Up Button */}
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </motion.div>

          {/* Login Link */}
          <motion.p
            className="text-center text-gray-600 mt-4"
            variants={itemVariants}
          >
            Already have an account?{" "}
            <a href="#login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </motion.p>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
