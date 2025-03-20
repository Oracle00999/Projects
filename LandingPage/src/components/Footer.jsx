import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
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
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate only once and when 20% of the section is visible
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">TekhTony</h3>
            <p className="text-gray-400">Your success is our mission.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: support@techtony.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center mt-8 text-gray-400"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          &copy; {new Date().getFullYear()} TekhTony. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
