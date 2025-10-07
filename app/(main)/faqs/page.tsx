"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/app/components/Navigation";
import Image from "next/image";
import faq from "../../../public/Faq.jpg";

const faqs = [
  {
    question:
      "Could you please suggest some nearby hotels to Fairmont Udaipur Palace where we can stay either before or after the wedding?",
    answer: (
      <div className="space-y-4">
        <strong>Luxury Options:</strong>
        <ul className="list-disc list-inside">
          <li>
            <strong>Aurika, Udaipur</strong> –{" "}
            <a
              href="https://www.lemontreehotels.com/aurika-hotels-resorts/udaipur/udaipur-hotels?utm_source=google&utm_medium=organic&utm_campaign=gmb_listing"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 29.6 km, 55 mins
            <br />
            Distance from Fairmont: 4.2 km, 10 mins
          </li>
          <li>
            <strong>Radisson Blu Palace Resort & Spa</strong> –{" "}
            <a
              href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-udaipur-spa"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 25.5 km, 43 mins
            <br />
            Distance from Fairmont: 6.8 km, 15 mins
          </li>
          <li>
            <strong>Fateh Garh by Fateh Collection</strong> –{" "}
            <a
              href="https://www.fatehcollection.com/fateh-garh-udaipur-resort/"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 30.3 km, 55 mins
            <br />
            Distance from Fairmont: 4.4 km, 10 mins
          </li>
          <li>
            <strong>Fateh Vilas by Fateh Collection</strong> –{" "}
            <a
              href="https://www.fatehcollection.com/fateh-vilas-udaipur-resort/"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 30 km, 54 mins
            <br />
            Distance from Fairmont: 4.1 km, 9 mins
          </li>
        </ul>

        <strong>Boutique & Budget-Friendly Options:</strong>
        <ul className="list-disc list-inside">
          <li>
            <strong>Ramada by Wyndham Udaipur Resort and Spa</strong> –{" "}
            <a
              href="https://www.ramadaudaipur.com/gallery.php"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 27.8 km, 52 mins
            <br />
            Distance from Fairmont: 4.9 km, 11 mins
          </li>
          <li>
            <strong>Regenta Central Mewargarh</strong> –{" "}
            <a
              href="https://www.royalorchidhotels.com/regenta-central-mewargarh-sajjan-garh-road/overview"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 26.7 km, 50 mins
            <br />
            Distance from Fairmont: 5.6 km, 11 mins
          </li>
          <li>
            <strong>Ram Pratap Palace By Fateh Collection</strong> –{" "}
            <a
              href="https://www.fatehcollection.com/rampratap-palace-hotel-udaipur/"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 23.8 km, 40 mins
            <br />
            Distance from Fairmont: 7.4 km, 16 mins
          </li>
          <li>
            <strong>Swaroop Vilas</strong> –{" "}
            <a
              href="https://www.swaroopvilas.com/"
              target="_blank"
              className="text-blue-600 underline"
            >
              Link
            </a>
            <br />
            Distance from Airport: 23.5 km, 41 mins
            <br />
            Distance from Fairmont: 8.1 km, 19 mins
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Which is the nearest airport to the wedding venue?",
    answer:
      "The nearest airport is Maharana Pratap Airport (UDR) in Udaipur, which is approximately 45 minutes from Fairmont Udaipur Palace.",
  },
  {
    question: "What is the dress code for the wedding events?",
    answer:
      "The detailed wardrobe planner for each event is coming soon. Stay tuned as we promise it will be fun, festive, and Instagram-worthy!",
  },
  {
    question: "Is there a specific RSVP deadline?",
    answer: "The RSVP Deadline is 26th October",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "For any allergies or dietary preferences, please inform the Horizon WIE team so we can make the necessary arrangements.",
  },
  {
    question: "How can I contact the couple or wedding organizers?",
    answer:
      "For any queries, feel free to reach out to the Horizon Wie Team via riawedsvivek@gmail.com & (Whatsapp & Call) on +91 9769109082",
  },
  {
    question: "What is the weather like in Udaipur in March?",
    answer:
      "March in Udaipur is pleasantly warm with daytime temperatures around 25–30°C (77–86°F) and cooler evenings around 15–18°C (59–64°F). Light, breathable fabrics with a shawl or jacket for the evenings are ideal.",
  },
  {
    question: "Will the wedding events be indoors or outdoors?",
    answer:
      "Most of the celebrations will take place outdoors at the beautiful Fairmont Udaipur Palace. A couple of events will be held indoors.",
  },
  {
    question: "Can I use the hotel’s facilities during my stay?",
    answer:
      "Yes! As a guest at Fairmont Udaipur Palace, you’ll have access to all the hotel’s facilities, including the pool, spa, fitness center, and restaurants.",
  },
  {
    question:
      "What are the best places to visit in Udaipur while we are in town?",
    answer:
      "Udaipur is known as the City of Lakes and offers stunning sights. Some must-visit places include City Palace, Lake Pichola, Jagmandir, Sajjangarh (Monsoon Palace), and the vibrant local bazaars. A boat ride on Lake Pichola at sunset is highly recommended!",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 px-6 py-8 md:py-16 mt-10 md:mt-26">
        {/* Left Side Image */}
        <div className="h-[880px] lg:col-span-7 mt-2">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-full min-h-[500px]">
            <Image
              src={faq}
              alt="FAQs background"
              fill
              className="object-cover"
            />

            {/* Half Patch Overlay */}
            <div className="absolute inset-0 flex">
              <div className="w-1/1" /> {/* left side clear */}
              <div className="w-1/2 bg-[#d6c7a1]/80 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl title text-[#5a4b2d] text-center px-4 font-alice">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ List Side */}
        <div className="lg:col-span-5 mt-2 md:mt-0">
          <h1
            className="text-[#5a4b2d] mb-8 text-4xl font-trajanpro"
            style={{ fontSize: "2rem" }}
          >
            FAQs
          </h1>

          <div className="space-y-4 mt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="border border-[#d6c7a1] rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#f8f6f1] hover:bg-[#eee7d8] transition-colors duration-300 font-alice"
                  >
                    <span className="font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-xl text-[#5a4b2d] transition-transform duration-300"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-6 py-4 bg-white text-gray-700 font-alice"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navigation from "@/app/components/Navigation";
// import Image from "next/image";
// import faq from "../../../public/Faq.jpg";

// const faqs = [
//   {
//     question:
//       "Could you please suggest some nearby hotels to Fairmont Udaipur Palace where we can stay either before or after the wedding?",
//     answer: (
//       <div className="space-y-4">
//         <strong>Luxury Options:</strong>
//         <ul className="list-disc list-inside">
//           <li>
//             <strong>Aurika, Udaipur</strong> –{" "}
//             <a
//               href="https://www.lemontreehotels.com/aurika-hotels-resorts/udaipur/udaipur-hotels?utm_source=google&utm_medium=organic&utm_campaign=gmb_listing"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 29.6 km, 55 mins
//             <br />
//             Distance from Fairmont: 4.2 km, 10 mins
//           </li>
//           <li>
//             <strong>Radisson Blu Palace Resort & Spa</strong> –{" "}
//             <a
//               href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-udaipur-spa"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 25.5 km, 43 mins
//             <br />
//             Distance from Fairmont: 6.8 km, 15 mins
//           </li>
//           <li>
//             <strong>Fateh Garh by Fateh Collection</strong> –{" "}
//             <a
//               href="https://www.fatehcollection.com/fateh-garh-udaipur-resort/"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 30.3 km, 55 mins
//             <br />
//             Distance from Fairmont: 4.4 km, 10 mins
//           </li>
//           <li>
//             <strong>Fateh Vilas by Fateh Collection</strong> –{" "}
//             <a
//               href="https://www.fatehcollection.com/fateh-vilas-udaipur-resort/"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 30 km, 54 mins
//             <br />
//             Distance from Fairmont: 4.1 km, 9 mins
//           </li>
//         </ul>

//         <strong>Boutique & Budget-Friendly Options:</strong>
//         <ul className="list-disc list-inside">
//           <li>
//             <strong>Ramada by Wyndham Udaipur Resort and Spa</strong> –{" "}
//             <a
//               href="https://www.ramadaudaipur.com/gallery.php"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 27.8 km, 52 mins
//             <br />
//             Distance from Fairmont: 4.9 km, 11 mins
//           </li>
//           <li>
//             <strong>Regenta Central Mewargarh</strong> –{" "}
//             <a
//               href="https://www.royalorchidhotels.com/regenta-central-mewargarh-sajjan-garh-road/overview"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 26.7 km, 50 mins
//             <br />
//             Distance from Fairmont: 5.6 km, 11 mins
//           </li>
//           <li>
//             <strong>Ram Pratap Palace By Fateh Collection</strong> –{" "}
//             <a
//               href="https://www.fatehcollection.com/rampratap-palace-hotel-udaipur/"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 23.8 km, 40 mins
//             <br />
//             Distance from Fairmont: 7.4 km, 16 mins
//           </li>
//           <li>
//             <strong>Swaroop Vilas</strong> –{" "}
//             <a
//               href="https://www.swaroopvilas.com/"
//               target="_blank"
//               className="text-blue-600 underline"
//             >
//               Link
//             </a>
//             <br />
//             Distance from Airport: 23.5 km, 41 mins
//             <br />
//             Distance from Fairmont: 8.1 km, 19 mins
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     question: "Which is the nearest airport to the wedding venue?",
//     answer:
//       "The nearest airport is Maharana Pratap Airport (UDR) in Udaipur, which is approximately 45 minutes from Fairmont Udaipur Palace.",
//   },
//   {
//     question: "What is the dress code for the wedding events?",
//     answer:
//       "The detailed wardrobe planner for each event is coming soon. Stay tuned as we promise it will be fun, festive, and Instagram-worthy!",
//   },
//   {
//     question: "Is there a specific RSVP deadline?",
//     answer:
//       "The RSVP deadline will be communicated shortly along with the formal invitations. We kindly request you to respond as soon as possible once you receive the official invite.",
//   },
//   {
//     question: "What if I have dietary restrictions or allergies?",
//     answer:
//       "Please let us know your dietary preferences or allergies when you RSVP, and we’ll ensure our team accommodates your needs so you can enjoy the celebrations stress-free.",
//   },
//   {
//     question: "How can I contact the couple or wedding organizers?",
//     answer:
//       "For any wedding-related questions, please reach out to our wedding planning team at [email/phone/WhatsApp]. They’ll be happy to assist you.",
//   },
//   {
//     question: "What is the weather like in Udaipur in March?",
//     answer:
//       "March in Udaipur is pleasantly warm with daytime temperatures around 25–30°C (77–86°F) and cooler evenings around 15–18°C (59–64°F). Light, breathable fabrics with a shawl or jacket for the evenings are ideal.",
//   },
//   {
//     question: "Will the wedding events be indoors or outdoors?",
//     answer:
//       "Most of the celebrations will take place outdoors at the beautiful Fairmont Udaipur Palace. A couple of events may be held indoors.",
//   },
//   {
//     question: "Can I use the hotel’s facilities during my stay?",
//     answer:
//       "Yes! As a guest at Fairmont Udaipur Palace, you’ll have access to all the hotel’s facilities, including the pool, spa, fitness center, and restaurants.",
//   },
//   {
//     question:
//       "What are the best places to visit in Udaipur while we are in town?",
//     answer:
//       "Udaipur is known as the City of Lakes and offers stunning sights. Some must-visit places include City Palace, Lake Pichola, Jagmandir, Sajjangarh (Monsoon Palace), and the vibrant local bazaars. A boat ride on Lake Pichola at sunset is highly recommended!",
//   },
// ];

// export default function FAQPage() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       <Navigation />

//       <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 px-6 py-8 md:py-16 mt-10 md:mt-26">
//         {/* Left Side Image */}
//         <div className="lg:col-span-7 mt-2">
//           <div className="relative rounded-2xl overflow-hidden shadow-md h-full min-h-[500px]">
//             <Image
//               src={faq}
//               alt="FAQs background"
//               fill
//               className="object-cover"
//             />

//             {/* Half Patch Overlay */}
//             <div className="absolute inset-0 flex">
//               <div className="w-1/2" /> {/* left side clear */}
//               <div className="w-1/2 bg-[#d6c7a1]/80 flex items-center justify-center">
//                 <h2 className="text-3xl md:text-4xl title text-[#5a4b2d] text-center px-4 font-alice">
//                   Frequently Asked Questions
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FAQ List Side */}
//         <div className="lg:col-span-5 mt-2 md:mt-0">
//           <h1
//             className="text-[#5a4b2d] mb-8 text-4xl font-trajanpro"
//             style={{ fontSize: "2rem" }}
//           >
//             FAQs
//           </h1>

//           <div className="space-y-4 mt-2">
//             {faqs.map((faq, idx) => {
//               const isOpen = openIndex === idx;

//               return (
//                 <motion.div
//                   key={idx}
//                   layout
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: idx * 0.05 }}
//                   className="border border-[#d6c7a1] rounded-lg shadow-sm overflow-hidden"
//                 >
//                   <button
//                     onClick={() => toggle(idx)}
//                     className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#f8f6f1] hover:bg-[#eee7d8] transition-colors duration-300 font-alice"
//                   >
//                     <span className="font-medium text-gray-800">
//                       {faq.question}
//                     </span>
//                     <motion.span
//                       animate={{ rotate: isOpen ? 45 : 0 }}
//                       className="text-xl text-[#5a4b2d] transition-transform duration-300"
//                     >
//                       +
//                     </motion.span>
//                   </button>

//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         key="content"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="px-6 py-4 bg-white text-gray-700 font-alice"
//                       >
//                         {faq.answer}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
