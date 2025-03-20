import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "Our platform helps businesses grow by providing tools and resources for success.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up for an account and choose a plan that suits your needs.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all new users.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="faq" className="py-16 bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none "
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-blue-600 cursor-pointer">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={faqVariants}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
