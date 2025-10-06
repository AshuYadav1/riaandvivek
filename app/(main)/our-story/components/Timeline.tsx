"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dispatch, SetStateAction, useEffect } from "react";

import Image from "next/image";
import { FaHeart } from "react-icons/fa6";

const itemVariants = {
  hidden: (side: string) => ({
    opacity: 0,
    x: side === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const heartVarients = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export default function Timeline({
  stories,
}: {
  stories: {
    title: string;
    image: string;
    date: string;
    content: string;
    positon: string;
  }[];
  // setCurrentStory: Dispatch<SetStateAction<number>>;
  // setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="h-full w-full py-6 rounded-xl shadow-lg font-mono">
      <h1 className="title flex justify-center">
        <p className="bg-white px-10 rounded-b-3xl">Our Love Story</p>
      </h1>
      <div>
        {stories.map(({ title, image, date, content, positon }) => (
          <AnimatedEntry
            key={image}
            side={positon}
            image={image}
            date={date}
            title={title}
            content={content}
            // setCurrentStory={setCurrentStory}
            // index={index}
            // setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
      <footer className="title flex justify-center">
        <p className="bg-white px-10 rounded-t-3xl">Our Love Story</p>
      </footer>
    </div>
  );
}

// index,
// setCurrentStory,
// setIsModalOpen,
function AnimatedEntry({
  side,
  title,
  image,
  date,
  content,
}: {
  side: string;
  title: string;
  image: string;
  date: string;
  content: string;
  // index: number;
  // setCurrentStory: Dispatch<SetStateAction<number>>;
  // setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className={`h-[420px] w-full flex`}>
      {side === "left" ? (
        <div className="h-full w-full flex items-center ">
          <div className="h-fit w-1/2 flex flex-col items-end justify-center gap-2 bg-gradient-to-r from-transparent to-white py-4">
            <h2 className="px-4 font-english text-2xl font-semibold">{date}</h2>
            <p className="pr-4 lg:pl-32 font-alice">{content}</p>
          </div>
          <div className="relative h-full w-1 bg-white flex items-center">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={heartVarients}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="absolute -right-2 size-5 text-[#b26e59]"
            >
              <FaHeart className="size-5" />
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            custom={side}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="bg-gradient-to-r from-white to-transparent px-2 w-1/2"
          >
            <div
              className={`bg-white p-4 sm:p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-sm lg:w-80 flex-shrink-0`}
            >
              <div
                className="mb-4 sm:mb-6 relative cursor-pointer"
                onClick={() => {
                  // setIsModalOpen(true);
                  // setCurrentStory(index);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      width={400}
                      height={400}
                      className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-end ">
          <motion.div
            ref={ref}
            custom={side}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className=" bg-gradient-to-r from-transparent to-white px-2 w-1/2 flex justify-end"
          >
            {" "}
            <div
              className={`bg-white p-4 sm:p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm lg:w-80 flex-shrink-0`}
            >
              <div
                className="mb-4 sm:mb-6 relative cursor-pointer"
                onClick={() => {
                  // setIsModalOpen(true);
                  // setCurrentStory(index);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      width={400}
                      height={400}
                      className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          <div className="relative h-full w-1 bg-white flex items-center">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={heartVarients}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="absolute -right-2 size-5 text-[#b26e59]"
            >
              <FaHeart className="size-5" />
            </motion.div>
          </div>
          <div className="h-fit w-1/2 flex flex-col gap-2 justify-center bg-gradient-to-r from-white py-4">
            <h2 className="px-4 font-english text-2xl font-semibold">{date}</h2>
            <p className="px-4 lg:pr-32 font-alice">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
