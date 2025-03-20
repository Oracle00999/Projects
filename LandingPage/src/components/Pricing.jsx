import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Enterprise",
      price: "$49.99",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
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
    <section id="pricing" className="py-16 bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate only once and when 20% of the section is visible
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
