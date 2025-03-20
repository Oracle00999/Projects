import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUp from "./Signup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <div className="text-2xl font-bold text-blue-600">TekhTony</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">
              FAQ
            </a>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={toggleResources}
                className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center"
              >
                Resources
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isResourcesOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-48"
                  >
                    <a
                      href="#blog"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Blog
                    </a>
                    <a
                      href="#guides"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Guides
                    </a>
                    <a
                      href="#webinars"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Webinars
                    </a>
                    <a
                      href="#tools"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Tools
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#login" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
            <a
              href="#signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4">
                <a
                  href="#features"
                  className="block text-gray-700 hover:text-blue-600 py-2"
                  onClick={closeMenu} // Close menu on click
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-700 hover:text-blue-600 py-2"
                  onClick={closeMenu} // Close menu on click
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  className="block text-gray-700 hover:text-blue-600 py-2"
                  onClick={closeMenu} // Close menu on click
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="block text-gray-700 hover:text-blue-600 py-2"
                  onClick={closeMenu} // Close menu on click
                >
                  FAQ
                </a>

                {/* Resources Dropdown for Mobile */}
                <div className="relative">
                  <button
                    onClick={toggleResources}
                    className="w-full text-left text-gray-700 hover:text-blue-600 py-2 focus:outline-none flex items-center justify-between"
                  >
                    Resources
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        isResourcesOpen ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="pl-4"
                      >
                        <a
                          href="#blog"
                          className="block text-gray-700 hover:text-blue-600 py-2"
                          onClick={closeMenu} // Close menu on click
                        >
                          Blog
                        </a>
                        <a
                          href="#guides"
                          className="block text-gray-700 hover:text-blue-600 py-2"
                          onClick={closeMenu} // Close menu on click
                        >
                          Guides
                        </a>
                        <a
                          href="#webinars"
                          className="block text-gray-700 hover:text-blue-600 py-2"
                          onClick={closeMenu} // Close menu on click
                        >
                          Webinars
                        </a>
                        <a
                          href="#tools"
                          className="block text-gray-700 hover:text-blue-600 py-2"
                          onClick={closeMenu} // Close menu on click
                        >
                          Tools
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="#login"
                  className="block text-gray-700 hover:text-blue-600 py-2"
                  onClick={closeMenu} // Close menu on click
                >
                  Login
                </a>
                <a
                  href="#signup"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-2"
                  onClick={closeMenu} // Close menu on click
                >
                  Sign Up
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
