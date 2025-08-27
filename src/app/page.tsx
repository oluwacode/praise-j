"use client";

import React from "react";
import Sidebar from "./components/sidebar";
import Intro from "./components/intro";
import Couple from "./components/couple";
import Countdown from "./components/countdown";
import Gift from "./components/gift";
import Rsvp from "./components/rsvp";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex">
      <Sidebar />

      {/* Main content with padding for sidebar */}
      <main className="flex-1 ml-0 md:ml-64 flex flex-col w-full">
        <section id="home">
          <Intro />
        </section>

        <section id="couple">
          <Couple />
        </section>

        <section id="countdown">
          <Countdown />
        </section>

        <section id="gift">
          <Gift />
        </section>

        <section id="rsvp">
          <Rsvp />
        </section>
      </main>
    </div>
  );
}
