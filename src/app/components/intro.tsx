"use client";

import React from "react";
import Image from "next/image";
import MalePic from "../assets/Images/jude.jpg";
import FemalePic from "../assets/Images/Praise4.jpg";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Intro: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 flex flex-col sm:flex-row w-full h-full z-0">
        {/* Female image */}
        <div className="relative w-full sm:w-1/2 h-full transform sm:translate-x-10 md:translate-x-24 opacity-80">
          <Image
            src={FemalePic}
            alt="Female"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Male image */}
        <div className="relative w-full sm:w-1/2 h-full opacity-80">
          <Image
            src={MalePic}
            alt="Male"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Overlay effect (blur + transparency) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>

      {/* Text content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <span className="text-emerald-400 text-base sm:text-lg md:text-xl uppercase tracking-widest mb-4 font-bold drop-shadow-lg">
          Our Wedding
        </span>
        <h1
          className={`text-emerald-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 font-bold drop-shadow-2xl ${greatVibes.className}`}
        >
          Praise & Jude
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl tracking-wider font-semibold drop-shadow-lg">
          02 October 2025
        </p>
      </div>
    </div>
  );
};

export default Intro;
