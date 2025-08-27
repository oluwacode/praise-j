"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/Images/—Pngtree—wedding logo_17274735.png";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Couple", href: "#couple" },
    { label: "Countdown", href: "#countdown" },
    { label: "Gifts", href: "#gift" },
    { label: "R.S.V.P", href: "#rsvp" },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg sm:hidden"
      >
        <span className="sr-only">Toggle Sidebar</span>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-green-50 shadow-xl z-40 flex flex-col p-6 transition-transform duration-300 sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Centered Logo */}
        <div className="logo mb-6 flex justify-center">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>

        {/* Text below logo */}
        <div className="text-center mb-8">
          <span className="block font-bold text-2xl text-green-700">
            Praise & Jude
          </span>
          <h6 className="text-gray-600 mt-1">02.10.2025</h6>
        </div>

        {/* Menu with 3s hover effect */}
        <nav className="flex-1">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded font-medium text-green-700 
                             hover:bg-green-500 hover:text-white 
                             transition-all duration-[700ms] transform hover:scale-105"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto text-center text-green-800 text-sm">
          Praise & Jude Wedding
          <br />
          02 October 2025, Nigeria
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
