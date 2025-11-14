"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import { HeroBackground } from "./components/HeroBackground";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="w-full dark:text-primary relative bg-neutral-950 h-auto flex justify-center">
     <Navbar/>
     <Spotlight
        className="-top-40 left-0 md:-top-50 md:left-10"
        fill="white"
      />
     <HeroBackground/>
    </div>
  );
}
