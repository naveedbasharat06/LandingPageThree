import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";
import companyLogo from "../../images/Vector (1).png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <nav className="bg-white shadow-md px-6 py-4 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="/company"
          className="text-2xl font-bold flex items-center space-x-2"
        >
          <img src={companyLogo} alt="company logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <a href="./AIScale" className="hover:text-green-500">
            AI Scale
          </a>
          <a href="./CalorieTrackingApp" className="hover:text-green-500">
            Calorie Tracking App
          </a>
          <a href="./Blog" className="hover:text-green-500">
            Blog
          </a>
          <a href="./Shop" className="hover:text-green-500">
            Shop
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar_mobile_links z-50 absolute top-12 px-8  md:hidden flex flex-col bg-white border-t border-gray-200 mt-6 text-center"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <a
              href="./AIScale"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              AI Scale
            </a>
            <a
              href="./CalorieTrackingApp"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Calorie Tracking App
            </a>
            <a
              href="./Blog"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Blog
            </a>
            <a
              href="./Shop"
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Shop
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
