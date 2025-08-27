"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Banner from "../assets/Images/countdown.jpeg";
import { Great_Vibes, Open_Sans } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

const Countdown: React.FC = () => {
  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const weddingDate = "Oct 02, 2025 00:00:00";
    const countDown = new Date(weddingDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const daysElem = document.getElementById("days");
      const hoursElem = document.getElementById("hours");
      const minutesElem = document.getElementById("minutes");
      const secondsElem = document.getElementById("seconds");

      if (distance >= 0) {
        if (daysElem) daysElem.innerText = Math.floor(distance / day).toString();
        if (hoursElem) hoursElem.innerText = Math.floor((distance % day) / hour).toString();
        if (minutesElem) minutesElem.innerText = Math.floor((distance % hour) / minute).toString();
        if (secondsElem) secondsElem.innerText = Math.floor((distance % minute) / second).toString();
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = ["days", "hours", "minutes", "seconds"];

  return (
    <section
      id="countdown"
      className="relative w-full h-[70vh] sm:h-[60vh] xs:h-[50vh] flex flex-col items-center justify-center py-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Banner}
          alt="Wedding Banner"
          className="object-cover w-full h-full"
          fill
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10"></div>

      {/* Countdown content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center w-full">
        {/* Heading in bold script font */}
        <h4
          className={`${greatVibes.className} text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-8`}
        >
          We will become a family in
        </h4>

        {/* Countdown numbers with colons */}
        <ul className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 w-full`}>
          {items.map((id, index) => (
            <React.Fragment key={id}>
              <li className="flex flex-col items-center min-w-[60px]">
                <span
                  className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-emerald-400"
                  id={id}
                >
                  0
                </span>
                <span className="text-xs sm:text-sm font-medium mt-1 uppercase text-white">
                  {id}
                </span>
              </li>
              {/* Add colon except after last item */}
              {index < items.length - 1 && (
                <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-emerald-400 mx-1">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Countdown;
