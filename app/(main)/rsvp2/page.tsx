/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/components/Navigation";

export default function RSVPPage2() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
    alert("Thank you for your RSVP!");
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Full Name" },
    { name: "contact", type: "tel", placeholder: "Contact No" },
    { name: "email", type: "email", placeholder: "Email ID" },
  ];

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden pt-[12%] bg-[url('/RSiViP.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black/80"></div>

      <Navigation />

      {/* Side Decorations */}
      <div className="absolute top-0 left-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-left.svg')] bg-contain bg-no-repeat pointer-events-none"></div>
      <div className="absolute top-0 right-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-right.svg')] bg-contain bg-no-repeat pointer-events-none"></div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative max-w-2xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-16"
      >
        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-[#5a4b2d] text-center mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-4xl md:text-5xl font-trajanpro"
          style={{ marginTop: "6rem", fontSize: "2rem " }}
        >
          RSiViP
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className="space-y-5 sm:space-y-6 md:space-y-8"
        >
          {/* Input Fields */}
          {fields.map((field, idx) => {
            const direction = idx % 2 === 0 ? -100 : 100;
            const variants = {
              hidden: { opacity: 0, x: direction },
              visible: { opacity: 1, x: 0 },
            };

            return (
              <motion.div key={field.name} variants={variants}>
                <input
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-0 focus:border-[#5a4b2d] placeholder-gray-500 py-2 sm:py-3 text-[#5a4b2d] font-alice"
                />
              </motion.div>
            );
          })}

          {/* Attendance */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-4 sm:mt-6"
          >
            <p className="text-sm font-medium text-[#5a4b2d] mb-2 sm:mb-3 font-alice">
              Attending the wedding
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
              className="w-full bg-[#5a4b2d] text-white py-2 sm:py-3 rounded-lg font-medium font-trajanpro hover:bg-[#d6c7a1] hover:text-[#5a4b2d] transition"
            >
              Submit RSVP
            </motion.button>
          </motion.div>

          {/* Deadline */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center text-[#5a4b2d] font-alice mt-6 sm:mt-8 text-sm sm:text-base"
          >
            Kindly RSVP by <span className="font-semibold">15th October</span>.
          </motion.p>
        </motion.form>
      </motion.div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Navigation from "@/app/components/Navigation";
// import axios from "axios";
// import SmartCalendarButton from "@/app/components/SmartCalendarButton";

// export default function RSVPPage2() {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     attending: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("RSVP Submitted:", formData);
//     // alert("Thank you for your RSVP!");

//     try {
//       setLoading(true);
//       await axios.post(`/api/rsvps`, {
//         ...formData,
//       });

//       setSuccess(true);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.25,
//       },
//     },
//   };

//   const fields = [
//     { name: "name", type: "text", placeholder: "Full Name" },
//     { name: "contact", type: "tel", placeholder: "Contact No" },
//     { name: "email", type: "email", placeholder: "Email ID" },
//   ];

//   if (success)
//     return (
//       <div className="min-h-screen w-full bg-[#d6c7a1]/90 flex flex-col justify-center items-center font-english text-white gap-4">
//         <p className="w-80 text-xl font-alice text-center">
//           Don&apos;t forget to save the wedding dates to your calendar
//         </p>
//         <SmartCalendarButton />
//         <p className="text-5xl">Thank you</p>
//       </div>
//     );

//   return (
//     <div className="relative bg-white min-h-screen overflow-x-hidden pt-[12%] bg-[url('/Proposal.jpg')] bg-center bg-no-repeat bg-cover">
//       <div className="absolute inset-0 bg-black/70"></div>

//       <Navigation />

//       {/* Side Decorations */}
//       <div className="absolute top-0 left-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-left.svg')] bg-contain bg-no-repeat pointer-events-none"></div>
//       <div className="absolute top-0 right-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-right.svg')] bg-contain bg-no-repeat pointer-events-none"></div>

//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="relative max-w-2xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-16"
//       >
//         {/* Title */}
//         {loading ? (
//           <div
//             className="h-96 w-full flex justify-center items-center"
//             role="status"
//           >
//             <svg
//               aria-hidden="true"
//               className="w-8 h-8 text-white animate-spin fill-[#bba582]"
//               viewBox="0 0 100 101"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                 fill="currentColor"
//               />
//               <path
//                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                 fill="currentFill"
//               />
//             </svg>
//             <span className="sr-only">Loading...</span>
//           </div>
//         ) : (
//           <>
//             <motion.h1
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               className="text-white text-center mb-6 sm:mb-8 md:mb-10 text-9xl sm:text-4xl md:text-5xl font-trajanpro"
//               style={{ marginTop: "5rem" }}
//             >
//               RiViSP
//             </motion.h1>

//             {/* Form */}
//             <motion.form
//               onSubmit={handleSubmit}
//               variants={containerVariants}
//               className="space-y-5 sm:space-y-6 md:space-y-8"
//             >
//               {/* Input Fields */}
//               {fields.map((field, idx) => {
//                 const direction = idx % 2 === 0 ? -100 : 100;
//                 const variants = {
//                   hidden: { opacity: 0, x: direction },
//                   visible: { opacity: 1, x: 0 },
//                 };

//                 return (
//                   <motion.div key={field.name} variants={variants}>
//                     <input
//                       type={field.type}
//                       name={field.name}
//                       value={(formData as any)[field.name]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                       required
//                       className="w-full bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-2 focus:ring-[#d6c7a1] placeholder-gray-200 py-2 sm:py-3 text-white font-alice"
//                     />
//                   </motion.div>
//                 );
//               })}

//               {/* Attendance */}
//               <motion.div
//                 variants={{
//                   hidden: { opacity: 0, x: -100 },
//                   visible: { opacity: 1, x: 0 },
//                 }}
//                 className="mt-4 sm:mt-6"
//               >
//                 <p className="text-sm font-medium text-white mb-2 sm:mb-3 font-alice">
//                   Attending the wedding
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                   {["Yes", "No", "Maybe"].map((option) => (
//                     <label
//                       key={option}
//                       className="flex items-center cursor-pointer"
//                     >
//                       <input
//                         type="radio"
//                         name="attending"
//                         value={option}
//                         checked={formData.attending === option}
//                         onChange={handleChange}
//                         className="text-white focus:ring-2 focus:ring-[#d6c7a1]"
//                         required
//                       />
//                       <span className="ml-2 text-white font-alice">
//                         {option}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Submit */}
//               <motion.div
//                 variants={{
//                   hidden: { opacity: 0, x: 100 },
//                   visible: { opacity: 1, x: 0 },
//                 }}
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.95 }}
//                   type="submit"
//                   className="w-full bg-[#5a4b2d] text-white py-2 sm:py-3 rounded-lg font-medium font-trajanpro hover:bg-[#d6c7a1] hover:text-white transition"
//                 >
//                   Submit
//                 </motion.button>
//               </motion.div>
//             </motion.form>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }
