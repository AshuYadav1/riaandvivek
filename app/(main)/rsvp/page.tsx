"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/components/Navigation";

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    attending: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your RSVP!");
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white min-h-screen pt-[12%]">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#5a4b2d] text-center mb-6 sm:mb-10 text-3xl sm:text-4xl md:text-5xl font-trajanpro"
          style={{ marginTop: "5rem" }}
        >
          RSVP
        </motion.h1>

        {/* Form Container */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-[#f8f6f1] border border-[#d6c7a1] shadow-md rounded-2xl p-4 sm:p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name */}
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-[#5a4b2d] font-alice">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full mt-1 px-3 py-2 sm:px-4 sm:py-2 border border-[#d6c7a1] rounded-lg bg-white focus:ring-2 focus:ring-[#d6c7a1] focus:outline-none"
              />
            </motion.div>

            {/* Contact */}
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-[#5a4b2d] font-alice">
                Contact No
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your no"
                required
                className="w-full mt-1 px-3 py-2 sm:px-4 sm:py-2 border border-[#d6c7a1] rounded-lg bg-white focus:ring-2 focus:ring-[#d6c7a1] focus:outline-none"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-[#5a4b2d] font-alice">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full mt-1 px-3 py-2 sm:px-4 sm:py-2 border border-[#d6c7a1] rounded-lg bg-white focus:ring-2 focus:ring-[#d6c7a1] focus:outline-none"
              />
            </motion.div>

            {/* Attendance */}
            <motion.div variants={item}>
              <label className="block text-sm font-medium text-[#5a4b2d] mb-1 sm:mb-2 font-alice">
                Attending the wedding
              </label>
              <div className="flex gap-4 sm:gap-6">
                {["Yes", "No", "Maybe"].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value={option}
                      checked={formData.attending === option}
                      onChange={handleChange}
                      className="text-[#5a4b2d] focus:ring-[#d6c7a1]"
                      required
                    />
                    <span className="ml-2 text-[#5a4b2d] font-alice">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={item}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#5a4b2d] text-white py-2 sm:py-3 rounded-lg font-medium font-trajanpro hover:bg-[#d6c7a1] hover:text-[#5a4b2d] transition"
              >
                Submit RSVP
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
