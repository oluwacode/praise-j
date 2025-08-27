"use client";

import React from "react";
import { Great_Vibes, Open_Sans } from "next/font/google";
import PayPalLogo from "../assets/Images/paypal2.png";
import RevolutLogo from "../assets/Images/download.png";
import WiseLogo from "../assets/Images/wise.png";
import GTBLogo from "../assets/Images/gtb.png";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

const Gift: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-gray-100" id="gift">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          className={`text-5xl sm:text-6xl font-bold text-emerald-500 ${greatVibes.className}`}
        >
          Gift the Couple
        </h2>

        {/* Notice paragraph */}
        <div className="mt-8 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-lg">
          <p className={`${openSans.className} text-gray-700 text-base sm:text-lg mb-4`}>
            The couple kindly requests <span className="font-semibold text-emerald-600">cash gifts only</span> as they are not based in Nigeria, and they cannot carry physical gifts.  
            You can select any bank or payment platform of your choice to send your gift – your generosity will go a long way!  
            <br />
            Note: Gifts are <span className="font-semibold text-red-500">not a requirement for invitation</span>.  
            <br />
            <span className="font-semibold text-emerald-500">Thank you!</span>
          </p>
        </div>
      </div>

      {/* Payment/Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* PayPal */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={PayPalLogo.src} alt="PayPal" className="w-24 h-24 mb-4 rounded-full" />
          <h3 className="font-semibold text-gray-800 mb-2">PayPal</h3>
          <p className="text-gray-600 mb-3">Account: 0123456789</p>
          <a
            href="https://www.paypal.com/paypalme/demoaccount" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors duration-300"
          >
            Send Gift
          </a>
        </div>

        {/* Revolut */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={RevolutLogo.src} alt="Revolut" className="w-24 h-24 mb-4 rounded-lg" />
          <h3 className="font-semibold text-gray-800 mb-2">Revolut</h3>
          <p className="text-gray-600 mb-3">Account: 9876543210</p>
          <a
            href="https://www.revolut.com/send-money" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors duration-300"
          >
            Send Gift
          </a>
        </div>

        {/* Wise */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={WiseLogo.src} alt="Wise" className="w-24 h-24 mb-4 rounded-lg" />
          <h3 className="font-semibold text-gray-800 mb-2">Wise</h3>
          <p className="text-gray-600 mb-3">Account: 1122334455</p>
          <a
            href="https://wise.com/send-money" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors duration-300"
          >
            Send Gift
          </a>
        </div>

        {/* GTB */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <img src={GTBLogo.src} alt="GTB" className="w-24 h-24 mb-4 rounded-lg" />
          <h3 className="font-semibold text-gray-800 mb-2">GTB Bank</h3>
          <p className="text-gray-600 mb-3">Account: 5566778899</p>
          <a
            href="https://www.gtb.com/personal-banking/transfer" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors duration-300"
          >
            Send Gift
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gift;
