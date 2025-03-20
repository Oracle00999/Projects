import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Our platform is optimized for speed and efficiency.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Your data is safe with our top-notch security features.",
    },
    {
      icon: "💡",
      title: "Easy to Use",
      description: "Intuitive design for seamless user experience.",
    },
  ];

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
    <section id="features" className="py-16 bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate only once and when 20% of the section is visible
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
