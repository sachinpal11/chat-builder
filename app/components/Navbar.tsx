"use client";

import React from "react";
import { motion } from "motion/react";

const navItems: string[] = ["Home", "About Us", "Features", "Pricing"];

const Navbar: React.FC = () => {
  return (
    <div className="w-fit z-100 font-poppins absolute flex justify-center py-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          flex items-center gap-15 h-15 
          bg-neutral-950
          px-3 py-3 
          rounded-xl 
          shadow-xl 
          border border-[#25262d]
        "
      >

        {/* 🔥 Subtle TOP-LEFT corner border (like Increasy navbar) */}
       

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex ml-5 items-center gap-2 cursor-pointer"
        >
          <div className="text-3xl font-black text-[#ff3b3b]">X</div>
          <span className="text-gray-300 font-medium text-lg">
            BotEngineX
          </span>
        </motion.div>

        {/* Nav Items */}
        <div className="flex items-center gap-6">
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

        {/* Sign Up Button - Red 3D */}
        <motion.button
          whileHover={{ scale: 1.07, y: -2 }}
          whileTap={{ scale: 0.97, y: 0 }}
          className="
            bg-[#ff3b3b]
            text-white
            font-semibold
            px-5 py-2
            rounded-lg
            relative
            transition-all
            duration-80
            hover:cursor-pointer
            shadow-[0_0_0_#d12f2f,0_8px_15px_rgba(255,59,59,0.4)]
          "
        >
          Sign Up
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Navbar;
