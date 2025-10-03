"use client";

import { motion } from "framer-motion";
import Navigation from "@/app/components/Navigation";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";

export default function WeddingEssentialsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const infoCards = [
    {
      title: "Weather & Attire",
      icon: null,
      content:
        "Days will be bright and sunny (~31°C) – light fabrics & stylish shades recommended. Evenings dip to ~18°C, so carry a jacket or shawl. Summer vibes by day, cozy nights by dusk!",
    },
    {
      title: "Currency Rates",
      icon: <RiMoneyDollarCircleLine size={32} className="text-[#d97706]" />,
      content: (
        <ul className="list-disc list-outside pl-6 space-y-1 text-[#5a4b2d] text-sm sm:text-base text-left">
          <li>1 USD = ₹ 88.30</li>
          <li>1 EUR = ₹ 104.70</li>
          <li>1 AED = ₹ 24.15</li>
          <li>1 SGD ≈ ₹ 69.13</li>
        </ul>
      ),
    },
    {
      title: "Time Difference",
      icon: <FiClock size={32} className="text-[#d97706]" />,
      content: (
        <ul className="list-disc list-outside pl-6 space-y-1 text-[#5a4b2d] text-sm sm:text-base text-left">
          <li>Udaipur, India is 1h 30m ahead of Dubai, UAE.</li>
          <li>9h 30m ahead of Washington DC, USA.</li>
          <li>4h 30m ahead of London, UK.</li>
          <li>2h 30m behind Singapore.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fffaf3]/80 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Floral Top Decoration */}
        <div className="absolute top-0 left-0 w-full h-28 sm:h-40 md:h-48 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
              fill="#fde8c3"
            />
            <circle cx="100" cy="50" r="20" fill="#f4d19b" />
            <circle cx="300" cy="40" r="15" fill="#f4d19b" />
            <circle cx="500" cy="60" r="18" fill="#f4d19b" />
            <circle cx="700" cy="50" r="22" fill="#f4d19b" />
            <circle cx="900" cy="40" r="15" fill="#f4d19b" />
            <circle cx="1100" cy="55" r="20" fill="#f4d19b" />
          </svg>
        </div>

        {/* Spacer */}
        <div className="h-24 sm:h-32 md:h-40"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative max-w-5xl w-full mx-auto px-4 sm:px-6"
        >
          {/* Title */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[#5a4b2d] text-center mb-8 text-2xl sm:text-4xl md:text-6xl font-trajanpro"
          >
            Wedding Essentials
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={listVariants}
            className="text-[#5a4b2d] text-center mb-8 text-base sm:text-lg md:text-xl font-alice px-2"
          >
            <span className="font-semibold">Dear Family & Friends,</span> <br />
            Here’s everything you need to know to enjoy your stay and celebrate
            with us!
          </motion.p>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {infoCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={listVariants}
                className="bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-[#f5e0c3] flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                {card.icon && <div className="mb-3">{card.icon}</div>}
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-[#5a4b2d]">
                  {card.title}
                </h3>
                <div className="text-[#5a4b2d] text-sm sm:text-base">
                  {card.content}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.p
            variants={listVariants}
            className="text-center italic text-[#5a4b2d] mt-10 text-sm sm:text-base md:text-lg px-2"
          >
            Don’t forget your prescribed medications and travel documents for a
            smooth journey.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
