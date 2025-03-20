import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav",
      role: "CEO, Company Of India",
      quote: "This platform has transformed our business. Highly recommended!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Will Smith",
      role: "Marketing Manager, Company Of Technology US",
      quote: "Incredible features and excellent support. A game-changer!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Emma Watson",
      role: "Product Manager, Tech Innovators UK",
      quote: "The best platform I've ever used. Truly revolutionary!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Doe",
      role: "CTO, Startup Solutions",
      quote: "Efficient, reliable, and user-friendly. Highly recommended!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Doe",
      role: "Design Lead, Creative Studio",
      quote: "A must-have tool for any business. Absolutely love it!",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 pt-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-6">
                "{testimonials[index].quote}"
              </p>
              <div className="flex justify-center items-center">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonials[index].name}</h4>
                  <p className="text-gray-500">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
