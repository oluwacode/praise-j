"use client";

import React, { useState } from "react";
import Image from "next/image";
import { db } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import BgImage from "../assets/Images/Invite.jpg";

// List of countries with abbreviations + codes
const countries = [
  { name: "United States", code: "US", dial: "+1" },
  { name: "United Kingdom", code: "UK", dial: "+44" },
  { name: "Canada", code: "CA", dial: "+1" },
  { name: "Nigeria", code: "NG", dial: "+234" },
  { name: "Ghana", code: "GH", dial: "+233" },
  { name: "South Africa", code: "ZA", dial: "+27" },
  { name: "India", code: "IN", dial: "+91" },
  { name: "Kenya", code: "KE", dial: "+254" },
  { name: "Australia", code: "AU", dial: "+61" },
  { name: "New Zealand", code: "NZ", dial: "+64" },
  { name: "Georgia", code: "GE", dial: "+995"},
];

function generateInviteCode(length: number = 4) {
  return Math.floor(Math.random() * Math.pow(5, length))
    .toString()
    .padStart(length, "0");
}

const Rsvp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [location, setLocation] = useState(""); // Optional guest location
  const [countryCode, setCountryCode] = useState("+234"); // Default: Nigeria
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const inviteCode = generateInviteCode();
      const inviteRef = doc(db, "invites", inviteCode);

      const docSnap = await getDoc(inviteRef);
      if (docSnap.exists()) {
        setMessage("Invite code conflict! Please try again.");
        return;
      }

      // Combine phone with country code
      const fullPhone = `${countryCode}${phone}`;

      await setDoc(inviteRef, {
        name,
        email,
        instagram,
        location, // save location
        phone: fullPhone,
        inviteCode,
        sent: false,
        createdAt: new Date(),
      });

      setMessage(
        `Thank you ${name}! Your invite will be sent to your WhatsApp & email shortly.`
      );

      // Reset form
      setName("");
      setEmail("");
      setInstagram("");
      setLocation("");
      setPhone("");
      setCountryCode("+234");
    } catch (error) {
      console.error("Firestore error:", error);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Heading */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-emerald-400 my-8 font-script drop-shadow-2xl text-center px-4"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        RSVP for the Wedding
      </h1>

      {/* Background Image + Overlay */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={BgImage}
            alt="Wedding Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>

        {/* RSVP Form */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
          <div className="bg-white bg-opacity-90 rounded-2xl p-8 max-w-md w-full shadow-xl border-2 border-emerald-500">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-emerald-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-3 rounded text-gray-700"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-emerald-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-3 rounded text-gray-700"
              />

              {/* Instagram */}
              <input
                type="text"
                placeholder="Your Instagram Handle (optional)"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="border border-emerald-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-3 rounded text-gray-700"
              />

              {/* Guest Location */}
              <input
                type="text"
                placeholder="Guest Location (optional)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border border-emerald-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-3 rounded text-gray-700"
              />

              {/* Country Code + Phone */}
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border border-emerald-400 p-3 rounded text-gray-700"
                >
                  {countries.map((c) => (
                    <option key={c.dial} value={c.dial}>
                      {c.code} {c.dial}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="flex-1 border border-emerald-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-3 rounded text-gray-700"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-emerald-600 text-white p-3 rounded hover:bg-emerald-700 transition-all duration-[700ms] cursor-pointer font-semibold"
              >
                Get Invite
              </button>
            </form>

            {/* Confirmation Message */}
            {message && (
              <p className="mt-4 text-center text-emerald-700 font-medium">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
