"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import {motion} from "motion/react"
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { GithubIcon } from "lucide-react";
export function HeroBackground() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <motion.div
      className="mt-40 w-full flex flex-col items-center">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5,delay:0.5 }}
        className="relative z-10 mx-auto flex flex-col items-center max-w-6xl text-center text-2xl font-bold text-neutral-900 md:text-4xl lg:text-7xl dark:text-neutral-100">
      
          <p className="mt-10" > Build  <Cover className="text-red-500">AI Chatbots</Cover> in 1 Minute.</p>
          <span className="">Embed with One Line.</span>
        </motion.h2>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5,delay:1}}
        className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-700 dark:text-neutral-500">
        Create a fully customizable, AI-powered chatbot for your website — train it on PDFs, documents, links, or your own data.
        No coding. No complexity. Just drop in a single snippet and go live.
        </motion.p>
        <motion.button
        whileHover={{background:"#ff3b3b"}}
          initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5,delay:1.3 }}
          className="
            bg-red-500
            text-white
            font-semibold
            text-xl
            px-10 py-3
            rounded-sm
            mt-6
            relative
            transition-all
            duration-80
            hover:cursor-pointer
            
            shadow-[0_0_0_#d12f2f,0_8px_15px_rgba(255,59,59,0.4)]
          "
        >
          Join Waitlist
        </motion.button>
      </motion.div>
    </div>
  );
}
