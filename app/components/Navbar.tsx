"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const navItems: string[] = ["Home", "About Us", "Features", "Pricing"];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="w-[70%] md:w-fit z-100 font-poppins absolute flex justify-center py-3 md:py-6 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          flex items-center gap-3 md:gap-15 h-12 md:h-15 
          bg-neutral-950
          px-2 md:px-3 py-2 md:py-3 
          rounded-xl 
          justify-between
          shadow-xl 
          border border-[#25262d]
          w-full md:w-auto
        "
      >

        {/* 🔥 Subtle TOP-LEFT corner border (like Increasy navbar) */}
       

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex ml-2 md:ml-5 items-center gap-1 md:gap-2 cursor-pointer"
        >
          <div className="text-2xl md:text-3xl font-black text-[#ff3b3b]">X</div>
          <span className="text-gray-300 font-medium text-sm md:text-lg">
            BotEngineX
          </span>
        </motion.div>

        {/* Nav Items - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item: string, index: number) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, color: "#ff3b3b" }}
              className={`text-sm cursor-pointer transition ${
                item === "Home" ? `text-[#ff3b3b]` : `text-gray-400`
              }`}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-300 transition-all"></div>
          <div className="w-5 h-0.5 bg-gray-300 transition-all"></div>
          <div className="w-5 h-0.5 bg-gray-300 transition-all"></div>
        </button>

        {/* Sign Up Button - Red 3D */}
        <motion.button
          whileHover={{ scale: 1.07, y: -2 }}
          whileTap={{ scale: 0.97, y: 0 }}
          className="
            bg-[#ff3b3b]
            text-white
            font-semibold
            px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-base
            rounded-lg
            relative
            md:flex
            hidden
            transition-all
            duration-80
            hover:cursor-pointer
            shadow-[0_0_0_#d12f2f,0_8px_15px_rgba(255,59,59,0.4)]
          "
        >
          Sign Up
        </motion.button>

      </motion.div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-4 right-4 bg-neutral-950 border border-[#25262d] rounded-xl p-4 z-50"
        >
          {navItems.map((item: string, index: number) => (
            <div
              key={index}
              className={`py-3 px-2 cursor-pointer transition border-b border-gray-800 last:border-b-0 ${
                item === "Home" ? `text-[#ff3b3b]` : `text-gray-400`
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </div>
          ))}

          <motion.button
          whileHover={{ scale: 1.07, y: -2 }}
          whileTap={{ scale: 0.97, y: 0 }}
          className="
            bg-[#ff3b3b]
            text-white
            font-semibold
            px-3 md:px-5 py-1.5 md:py-2 text-sm md:text-base
            rounded-lg
            relative
            mt-5
            transition-all
            duration-80
            hover:cursor-pointer
            shadow-[0_0_0_#d12f2f,0_8px_15px_rgba(255,59,59,0.4)]
          "
        >
          Sign Up
        </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
