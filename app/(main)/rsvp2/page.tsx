/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/components/Navigation";
import axios from "axios";
import SmartCalendarButton from "@/app/components/SmartCalendarButton";
import CustomSelect from "@/app/components/CustomSelect";

export type Member = {
  name: string;
  code: string;
  contact: string;
  age: string;
};

export default function RSVPPage2() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "",
    contact: "",
    email: "",
    attending: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [numOfMembers, setNumOfMember] = useState("");
  const [attendingMembers, setAttendingMembers] = useState<Member[] | null>(
    null
  );

  // Update attendingMembers array when numOfMembers changes
  useEffect(() => {
    const num = Number(numOfMembers);
    if (num !== null && num > 0) {
      const members = Array.from({ length: num }, () => ({
        name: "",
        code: "",
        contact: "",
        age: "",
      }));
      setAttendingMembers(members);
    } else {
      setAttendingMembers(null);
    }
  }, [numOfMembers]);

  // Handle individual field updates
  const handleMemberChange = (
    index: number,
    field: keyof Member,
    value: string
  ) => {
    if (!attendingMembers) return;
    const updatedMembers = [...attendingMembers];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value,
    };
    setAttendingMembers(updatedMembers);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ...formData,
      countryCode: selectedCountryCode,
      members: numOfMembers,
      familyDetails: attendingMembers,
    };

    console.log(data);

    try {
      setLoading(true);
      await axios.post(`/api/rsvps`, data);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Full Name*" },
    { name: "contact", type: "tel", placeholder: "Contact No*" },
    { name: "email", type: "email", placeholder: "Email ID*" },
  ];

  if (success)
    return (
      <div className="min-h-screen w-full bg-[#d6c7a1]/90 flex flex-col justify-center items-center font-english text-white gap-4 text-center p-6">
        <p className="w-80 text-xl font-alice">
          Don&apos;t forget to save the wedding dates to your calendar
        </p>
        <SmartCalendarButton />
        <p className="text-5xl mt-6 font-trajanpro">Thank you</p>
      </div>
    );

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden overflow-y-hidden pt-[12%] bg-[url('/Proposal.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black/70"></div>

      <Navigation />

      <div className="absolute top-0 left-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-left.svg')] bg-contain bg-no-repeat pointer-events-none"></div>
      <div className="absolute top-0 right-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-right.svg')] bg-contain bg-no-repeat pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative max-w-2xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-16"
      >
        {loading ? (
          <div
            className="h-96 w-full flex justify-center items-center"
            role="status"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-white animate-spin fill-[#bba582]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591..."
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-white text-center mb-6 sm:mb-8 md:mb-10 text-5xl sm:text-5xl font-trajanpro"
              style={{ marginTop: "5rem" }}
            >
              <span className="text-[#f9aa47]">Ri</span>
              <span className="text-[#306ff2]">Vi</span>
              SP
            </motion.h1>

            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              className="space-y-6"
            >
              {fields.map((field, idx) => {
                const direction = idx % 2 === 0 ? -100 : 100;
                const variants = {
                  hidden: { opacity: 0, x: direction },
                  visible: { opacity: 1, x: 0 },
                };
                return (
                  <motion.div key={field.name} variants={variants}>
                    {field.name === "contact" ? (
                      <div className="flex text-white outline-none gap-1">
                        <CustomSelect
                          setSelectedCountryCode={setSelectedCountryCode}
                        />
                        <input
                          type={field.type}
                          name={field.name}
                          value={(formData as any)[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="px-2 w-full bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-2 focus:ring-[#d6c7a1] placeholder-gray-200 py-2 sm:py-3 text-white font-alice"
                        />
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="px-2 w-full bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-2 focus:ring-[#d6c7a1] placeholder-gray-200 py-2 sm:py-3 text-white font-alice"
                      />
                    )}
                  </motion.div>
                );
              })}

              {/* Attendance */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-6"
              >
                <p className="text-sm font-medium text-white mb-3 font-alice">
                  Attending the wedding* (Excluding Your Information)
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {["Yes", "No", "Maybe"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="attending"
                        value={option}
                        checked={formData.attending === option}
                        onChange={handleChange}
                        className="text-white focus:ring-2 focus:ring-[#d6c7a1]"
                        required
                      />
                      <span className="ml-2 text-white font-alice">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* ✅ Number of Family Members */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <label className="block text-white font-alice mb-2">
                  Number of Family Members Attending*
                </label>
                <input
                  type="number"
                  name="members"
                  min={1}
                  max={10}
                  value={numOfMembers}
                  onChange={(e) => setNumOfMember(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-2 focus:ring-[#d6c7a1] placeholder-gray-200 py-2 text-white font-alice"
                  required
                />
              </motion.div>

              {/* Family Details */}
              <div className="space-y-4 mt-4">
                {attendingMembers &&
                  attendingMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <input
                        type="text"
                        placeholder={`Full Name*`}
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(index, "name", e.target.value)
                        }
                        required
                        className="flex-1 bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-2 focus:ring-[#d6c7a1] placeholder-gray-200 px-2 py-2 text-white font-alice"
                      />
                      <input
                        type="number"
                        placeholder="Age*"
                        value={member.age}
                        onChange={(e) =>
                          handleMemberChange(index, "age", e.target.value)
                        }
                        required
                        className="w-32 bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-2 focus:ring-[#d6c7a1] placeholder-gray-200 px-2 py-2 text-white font-alice"
                      />
                      <div className="flex">
                        {" "}
                        <CustomSelect
                          memberIndex={index}
                          handleMemberChange={handleMemberChange}
                        />
                        <input
                          type="text"
                          placeholder={`Contact no`}
                          value={member.contact}
                          onChange={(e) =>
                            handleMemberChange(index, "contact", e.target.value)
                          }
                          className="flex-1 bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-2 focus:ring-[#d6c7a1] placeholder-gray-200 px-2 py-2 text-white font-alice"
                        />
                      </div>
                    </div>
                  ))}
              </div>

              {/* Submit */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-[#5a4b2d] text-white py-2 sm:py-3 rounded-lg font-medium font-trajanpro hover:bg-[#d6c7a1] hover:text-white transition"
                >
                  Submit
                </motion.button>
              </motion.div>
            </motion.form>
          </>
        )}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center text-white font-alice mt-6 sm:mt-8 text-sm sm:text-base"
        >
          <p className="mb-4">
            Kindly RSVP by{" "}
            <span className="font-semibold">
              26<sup>th</sup> October
            </span>
          </p>
          <p className="font-alice text-gray-200">
            For any queries, feel free to reach out to the Horizon WIE Team{" "}
            <br />
            via riawedsvivek@gmail.com or WhatsApp at +91 9769109082
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
