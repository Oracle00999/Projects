import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const statItemVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-50 relative overflow-hidden mt-3.6">
      {/* Background Illustration */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Headline and Tagline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Your Success Starts Here
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8"
          >
            Join thousands of businesses using our platform to grow and succeed.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            variants={itemVariants}
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            variants={itemVariants}
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={statsVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Available" },
            { value: "5M+", label: "Transactions" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              className="text-center"
            >
              <h2 className="text-4xl font-bold">{stat.value}</h2>
              <p className="text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Illustration or Image */}
        {/* <motion.div
          className="mt-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Hero Illustration"
            className="mx-auto rounded-lg shadow-2xl w-full max-w-2xl"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
