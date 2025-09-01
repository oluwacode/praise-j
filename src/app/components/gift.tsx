"use client";

import React, { useState } from "react";
import { Great_Vibes, Open_Sans } from "next/font/google";
import PayPalLogo from "../assets/Images/paypal2.png";
import RevolutLogo from "../assets/Images/download.png";
import WiseLogo from "../assets/Images/wise.png";
import GTBLogo from "../assets/Images/gtb.png";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400" });

interface PaymentOption {
  name: string;
  logo: string;
  accountName?: string;
  accountNumber?: string;
  email?: string;
  swiftCode?: string;
  link: string;
}

const payments: PaymentOption[] = [
  {
    name: "PayPal",
    logo: PayPalLogo.src,
    email: "ugo_101@hotmail.com",
    link: "https://www.paypal.com/paypalme/demoaccount",
  },
  {
    name: "Revolut",
    logo: RevolutLogo.src,
    accountName: "Jude Ogaziechi",
    accountNumber: "GB31 REVO 0099 7011 9452 62",
    swiftCode: "REVOGB21",
    link: "https://www.revolut.com/send-money",
  },
  {
    name: "Wise",
    logo: WiseLogo.src,
    accountName: "Jude Ugochukwu Ogaziechi",
    accountNumber: "232742039",
    link: "https://wise.com/send-money",
  },
  {
    name: "GTB Bank",
    logo: GTBLogo.src,
    accountName: "Adereti Praise",
    accountNumber: "0427493428",
    link: "https://www.gtb.com/personal-banking/transfer",
  },
];

const Gift: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-gray-100" id="gift">
      <div className="text-center mb-16">
        <h2
          className={`text-5xl sm:text-6xl font-bold text-emerald-500 ${greatVibes.className}`}
        >
          Gift the Couple
        </h2>

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

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {payments.map((payment, index) => (
          <div
            key={payment.name}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => toggleDetails(index)}
          >
            <img src={payment.logo} alt={payment.name} className="w-24 h-24 mb-4 rounded-full" />
            <h3 className="font-semibold text-gray-800 mb-2">{payment.name}</h3>

            {openIndex === index && (
              <div className="text-center mt-2">
                {payment.email ? (
                  <p className="text-gray-600 mb-3">Email: {payment.email}</p>
                ) : (
                  <>
                    <p className="text-gray-600 mb-1">Account Name: {payment.accountName}</p>
                    <p className="text-gray-600 mb-1">Account Number: {payment.accountNumber}</p>
                    {payment.swiftCode && (
                      <p className="text-gray-600 mb-3">SWIFT Code: {payment.swiftCode}</p>
                    )}
                  </>
                )}
                <a
                  href={payment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors duration-300 inline-block"
                >
                  Send Gift
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gift;
