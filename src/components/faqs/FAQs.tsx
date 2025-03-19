import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqsPreviewImg from "../../images/Frame 76.png";
import faqsPreviewImgSmall from "../../images/Close Up detail - Packed Down G - No wire 2.png";
// import { FaMinus } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
import "./FAQs.css";
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "When will I receive my order?",
    answer:
      "Orders are typically processed and shipped within 3-5 business days. Delivery times vary based on your location.",
  },
  {
    question: "What happens if I change my mind?",
    answer:
      "You can return your order within 30 days of receipt for a full refund. Please ensure the item is in its original condition.",
  },
  {
    question: "How can I be confident I will receive my scale?",
    answer:
      "We provide a tracking number for every order so you can monitor the delivery status in real-time.",
  },
  {
    question: "How well does the AI camera work?",
    answer:
      "Our AI camera is highly accurate and can recognize a wide variety of ingredients with precision.",
  },
  {
    question:
      "Can you identify complex meals in addition to individual ingredients?",
    answer:
      "Yes, our AI is capable of identifying complex meals by analyzing the combination of ingredients.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-10 lg:py-16 px-2 md:px-2">
      <h1 className="font-[Inter] text-[32px] md:text-4xl lg:text-5xl leading-[100%] tracking-[0%] text-center font-normal  ">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-base md:text-xl text-black font-[Helvetica] leading-[100%] tracking-[0%] mt-4 mb-8">
        We have collected here some frequently asked questions. If you don't
        find an answer to your question here, feel free to contact us below.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Accordion (Left Side) */}
        <div className="w-full md:w-1/2">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className=" overflow-hidden transition-all duration-300"
              >
                <button
                  className=" w-full flex justify-between items-center p-2 md:p-2 lg:p-4 hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-base md:text-xl lg:text-2xl font-normal text-left font-[Helvetica] leading-[100%] tracking-[0%] text-[#0E1318]">
                    {item.question}
                  </span>
                  <span className="transform transition-transform duration-500 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full font-bold text-4xl text-center w-12">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                <hr
                  style={{
                    height: "1px",
                    color: "#F0EEEA",
                    backgroundColor: "#F0EEEA",
                  }}
                />
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden z-20"
                    >
                      <div className="p-2 md:p-4 bg-white">
                        <p className="text-gray-600 font-[inter]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Image (Right Side) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Image for larger screens */}
          <img
            src={faqsPreviewImg}
            alt="FAQ Illustration"
            className="hidden md:block object-contain "
          />
          {/* Image for small screens */}
          <img
            src={faqsPreviewImgSmall}
            alt="FAQ Illustration"
            className="block md:hidden object-contain w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
