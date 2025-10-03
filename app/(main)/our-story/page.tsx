"use client";

import "./our-story.css";
import type React from "react";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Timeline from "./components/Timeline";

export default function OurStoryPage() {
  // const [currentStory, setCurrentStory] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // stop background scroll
    } else {
      document.body.style.overflow = ""; // reset
    }

    return () => {
      document.body.style.overflow = ""; // cleanup on unmount
    };
  }, [isModalOpen]);

  // allow Esc to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const stories = [
    {
      title: "Ascot Day Out",
      date: "June 22, 2024",
      image: "/ascot.jpg",
      content: `This is us, celebrating a perfect day at Ascot.`,
      positon: "left",
    },
    {
      title: "Ria meets Vivek's Family",
      date: "December 14, 2024",
      image: "/ria-meets-vivek-family.jpg",
      content: `Here is a special moment we'll never forget: the day Ria met my family. On December 15, 2024, we all got together, and it felt so natural, like the beginning of something truly wonderful.`,
      positon: "right",
    },
    {
      title: "Vivek meets Ria's Family",
      date: "December 23, 2024",
      image: "/vivek-meets-ria-family.jpg",
      content: `New beginnings and growing families! We absolutely loved this moment on December 23, 2024, when Vivek officially met Ria's family. Surrounded by holiday cheer and a beautiful Christmas tree, it was the perfect start to our combined family journey.`,
      positon: "left",
    },
    {
      title: "Isle of Wight Excursion",
      date: "June 21, 2025",
      image: "/isle-of-wight-excursion.jpg",
      content: `We took our first boat trip to the Isle of Wight, soaking in the beautiful views and making memories that last a lifetime.`,
      positon: "right",
    },
    {
      title: "Ria passes!",
      date: "July 18, 2025",
      image: "/ria-passes.jpg",
      content: `A day to be proud of! This photo captures the moment on July 18, 2025, when we celebrated Ria's incredible achievement.`,
      positon: "left",
    },
    {
      title: "Races in Singapore",
      date: "July 27, 2025",
      image: "/races-in-singapore.jpg",
      content: `Ready for a wild ride! This photo perfectly sums up our journey together—full of excitement and adventure. Here we are, all smiles in front of Universal Studios in Singapore.`,
      positon: "right",
    },
    {
      title: "Universal Roller Coaster",
      date: "July 27, 2025",
      image: "/universal-rollercoaster.jpg",
      content: `Ready for a wild ride! This photo perfectly sums up our journey together—full of excitement and adventure. Here we are, all smiles in front of Universal Studios in Singapore.`,
      positon: "left",
    },
    {
      title: "She said yes!",
      date: "July 28, 2025",
      image: "/she-says-yes.jpg",
      content: `On July 28, 2025, our biggest adventure began. With the setting sun as our witness and the water gently swaying beneath us, Vivek got down on one knee and asked Ria to marry him. This moment, captured in front of a heart-shaped arch and a 'Marry Me' sign, is the start of our journey toward happily ever after.`,
      positon: "right",
    },
    {
      title: "Celebrating engaged life",
      date: "July 28, 2025",
      image: "/celebrating-engaged-life.jpg",
      content: `Celebrating engaged life.`,
      positon: "left",
    },
    {
      title: "Roka-fied",
      date: "July 29, 2025",
      image: "/roka-fied.jpg",
      content: `Roka-fied the day after!`,
      positon: "right",
    },
    {
      title: "She said yes again!",
      date: "July 30, 2025",
      image: "/she-says-yes-again.jpg",
      content: `She says yes again.`,
      positon: "left",
    },
    {
      title: "Trip to Liverpool",
      date: "September 09, 2025",
      image: "/last.jpg",
      content: `Wedding planning over cups of coffee in Italy`,
      positon: "right",
    },
  ];

  // const handlePreviousStory = () => {
  //   setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  // };

  // const handleNextStory = () => {
  //   setCurrentStory((prev) => (prev + 1) % stories.length);
  // };

  // const handlePreviousImage = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  // };

  // const handleNextImage = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setCurrentStory((prev) => (prev + 1) % stories.length);
  // };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />
      <div className="pt-[12%] bg-gradient-to-r from-[#FFE8DB] to-white">
        {/* <div className="hidden lg:block">
          <SideNavigation
            currentStory={currentStory}
            totalStories={stories.length}
            onPreviousStory={handlePreviousStory}
            onNextStory={handleNextStory}
          />
        </div> */}

        {/* Thumbnail selector (desktop only) */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex justify-center px-4"
        >
          <div className="flex space-x-2 px-[2%] pt-[1%] sm:space-x-3 overflow-x-auto pb-2">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`w-6 h-6 sm:w-16 sm:h-16 md:w-12 md:h-12 rounded-full overflow-hidden border-2 sm:border-3 shadow-lg cursor-pointer transition-all flex-shrink-0 ${
                  index === currentStory
                    ? "border-[#bba582] scale-130"
                    : "border-[#bba582]/70 hover:border-[#bba582]"
                }`}
                onClick={() => setCurrentStory(index)}
              >
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={`Story ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Story display */}
        <div className="pt-10 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col  items-left justify-center w-full">
            {/* Grid for mobile + tablet */}

            <Timeline
              stories={stories}
              // setCurrentStory={setCurrentStory}
              setIsModalOpen={setIsModalOpen}
            />

            {/* <section className="relative lg:h-[9400px] w-full flex flex-col">
              {stories.map((story, index) => (
                <div
                  key={story.image}
                  style={{ top: `${index * 800}px` }}
                  className={`absolute ${story.positon}`}
                >
                  <StoryCard
                    index={index}
                    image={story.image}
                    title={story.title}
                    date={story.date}
                    content={story.content}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              ))}
            </section> */}
          </div>
        </div>

        {/* Modal (shared for mobile + tablet + desktop) */}
      </div>
    </div>
  );
}

//  <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 bg-[#bba582] lg:bg-black"
//               onClick={() => setIsModalOpen(false)}
//             >
//               <motion.div
//                 initial={{ y: "-100%" }}
//                 animate={{ y: "0%" }}
//                 exit={{ y: "-100%" }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Left: Image */}
//                 <div className="relative w-full h-[80%] lg:h-full lg:w-1/2 flex items-center justify-center">
//                   <Image
//                     src={stories[currentStory].image || "/placeholder.svg"}
//                     alt={stories[currentStory].title}
//                     fill
//                     className="object-contain"
//                     sizes="100vw"
//                     priority
//                   />
//                 </div>

//                 {/* Right: Story info */}
//                 <div
//                   className="relative w-full h-[20%] lg:h-full lg:w-1/2
//                   flex flex-col justify-end lg:justify-center
//                   items-center lg:items-start
//                   bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-transparent
//                   p-6 md:p-8"
//                 >
//                   <div className="max-w-2xl lg:mx-0 text-center lg:text-left">
//                     <h2 className="text-2xl md:text-4xl italic text-white mb-2">
//                       {stories[currentStory].title}
//                     </h2>
//                     <p className="text-sm md:text-base text-white/80 mb-4">
//                       {stories[currentStory].date}
//                     </p>
//                     <div className="text-sm md:text-base text-white/90 leading-relaxed">
//                       {stories[currentStory].content
//                         .split("\n\n")
//                         .slice(0, 2)
//                         .map((paragraph, index) => (
//                           <p key={index} className="mb-2">
//                             {paragraph}
//                           </p>
//                         ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Navigation arrows */}
//                 <button
//                   onClick={handlePreviousImage}
//                   className="absolute left-4 top-[40%] -translate-y-1/2 text-white/80 hover:text-white text-4xl md:text-6xl transition-all duration-200 hover:scale-110 z-10"
//                   aria-label="Previous image"
//                 >
//                   ‹
//                 </button>
//                 <button
//                   onClick={handleNextImage}
//                   className="absolute right-4 top-[40%] -translate-y-1/2 text-white/80 hover:text-white text-4xl md:text-6xl transition-all duration-200 hover:scale-110 z-10"
//                   aria-label="Next image"
//                 >
//                   ›
//                 </button>
//                 {/* Close button */}
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl md:text-4xl transition-all duration-200 hover:scale-110 z-10"
//                   aria-label="Close modal"
//                 >
//                   ✕
//                 </button>
//                 {/* Image counter */}
//                 <div className="absolute top-4 left-4 text-white/80 text-sm md:text-base z-10">
//                   {currentStory + 1} / {stories.length}
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

// <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:hidden">
//               {stories.map((story, index) => (
//                 <div
//                   key={index}
//                   role="button"
//                   tabIndex={0}
//                   onClick={() => {
//                     setCurrentStory(index);
//                     setIsModalOpen(true);
//                   }}
//                   onKeyDown={(e: React.KeyboardEvent) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       setCurrentStory(index);
//                       setIsModalOpen(true);
//                     }
//                   }}
//                   className="bg-white relative p-2 sm:p-2 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full flex-shrink-0 cursor-pointer z-30"
//                 >
//                   <div className="mb-4 sm:mb-6 relative w-full h-48 sm:h-64 md:h-72">
//                     {/* put the click handler on the card wrapper (above) and make the image ignore pointer events so the wrapper always receives clicks */}
//                     <Image
//                       src={story.image || "/placeholder.svg"}
//                       alt={story.title}
//                       width={400}
//                       height={400}
//                       className="w-full h-full object-cover pointer-events-none"
//                     />
//                   </div>

//                   <h3 className="story-title-mobile font-cursive italic text-center">
//                     {story.title}
//                   </h3>
//                 </div>
//               ))}
//             </div>
