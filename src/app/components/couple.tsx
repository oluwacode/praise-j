"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FemalePic from "../assets/Images/Praise3.jpg";
import MalePic from "../assets/Images/Jude2.jpg";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Couple: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Heading with gold ring */}
      <div className="flex flex-col items-center mb-32 relative">
        <div className="absolute w-48 h-48 border-4 border-yellow-400 rounded-full -z-10 rotate-12"></div>
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-normal text-emerald-500 ${greatVibes.className} text-center z-20`}
        >
          Our Love Story
        </h2>
      </div>

      {/* Content with padding to avoid Sidebar */}
      <div className="max-w-6xl mx-auto flex flex-col gap-32 px-6 md:px-[calc(2rem+16rem)]">
        {/* Female left, text right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 w-full flex justify-center md:justify-start"
          >
            <Image
              src={FemalePic}
              alt="Female"
              className="rounded-lg shadow-lg object-cover w-80 h-96"
              width={320}
              height={384}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2 w-full flex flex-col justify-center space-y-6 break-words overflow-hidden"
          >
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              From the moment we met, her smile lit up my world. Our journey 
              together has been filled with laughter, adventures, and 
              unforgettable memories. Every day, our bond grows stronger.
            </p>
          </motion.div>
        </div>

        {/* Male right, text left */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-16 md:gap-28">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 w-full flex justify-center md:justify-end"
          >
            <Image
              src={MalePic}
              alt="Male"
              className="rounded-lg shadow-lg object-cover w-80 h-96"
              width={320}
              height={384}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2 w-full flex flex-col justify-center space-y-6 break-words overflow-hidden"
          >
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              His love has always been my safe haven. Together, we’ve shared 
              dreams, challenges, and countless moments of joy. Our story is 
              one of true love and unbreakable connection.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Couple;