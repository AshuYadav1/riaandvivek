"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import Navigation from "@/app/components/Navigation";

export default function WelcomePage() {
  return (
    <>
      <Navigation />
      <div
        className="w-full relative z-10
          pt-[10vh] md:pt-[10vh] lg:pt-[20vh]
          flex justify-center
          md:px-[6%]"
      >
        <div className="shadow-2xl h-screen">
          <div className="grid grid-rows-[50vh_auto] lg:grid-cols-2 lg:grid-rows-1 h-full">
            {/* Left side - Image */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="relative w-full h-full">
                <Image
                  src="/she-says-yes.jpg"
                  alt="Ria & Vivek"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right side - Main Message */}
            <div
              className="
    flex flex-col justify-center lg:items-center
    m-8 sm:m-12 md:m-24 lg:m-0
  "
            >
              <div
                className="
      bg-white bg-clip-padding text-center
      p-[5%] px-[7%] lg:px-[15%]
      border-[10px] border-white/50
      shadow-xl rounded-lg
      max-w-xl mx-auto space-y-4 lg:h-full text-gray-700 text-base leading-relaxed bg-gradient-to-r from-[#FFE8DB] to-white
    "
              >
                <div className="flex flex-col font-alice justify-center gap-6">
                  <h1 className="title leading-tight text-[#c4a882]">
                    Welcome
                  </h1>

                  <div className="text-gray-700 max-w-xl mx-auto space-y-4 text-base">
                    <p>
                      With hearts brimming with love and gratitude, we joyfully
                      invite you to be part of the most cherished day of our
                      lives.
                    </p>
                    <p>
                      As we embark on this wonderful journey together, your
                      presence will make our celebration truly complete.
                    </p>
                    <p>
                      Please join us in celebrating our wedding on{" "}
                      <span className="font-semibold text-[#c4a882]">
                        March 5th - 6th, 2026
                      </span>{" "}
                      as we gather to share love, laughter, and blessings.
                    </p>
                    <p>
                      We can&apos;t wait to create unforgettable memories with
                      our beloved family and friends.
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2 sm:gap-3 text-black">
                    <p className="text-sm sm:text-lg font-alice">
                      With love <br />{" "}
                      <span className="font-english text-3xl text-[#c4a882]">
                        Ria &amp; Vivek
                      </span>
                    </p>
                  </div>
                  {/* Parents’ Names */}
                  <div className="mt-6 text-xs sm:text-sm text-gray-600 font-alice space-y-1">
                    <p>
                      Ria&apos;s Parents –{" "}
                      <span className="font-medium">
                        Madhu &amp; Manish Nagpal
                      </span>
                    </p>
                    <p>
                      Vivek&apos;s Parents –{" "}
                      <span className="font-medium">
                        Asmita &amp; Mukul Gandhi
                      </span>
                    </p>
                  </div>
                </div>
                {/* Footer + Button */}
                <div className="lg:flex hidden flex-col items-center gap-4 mt-8">
                  <Link href="/events">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-[#c4a882] text-[#FFE8DB] px-6 py-3 rounded-full shadow-lg text-sm md:text-base font-playfair tracking-wide transition-all duration-300"
                    >
                      Events
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="inline-flex"
                      >
                        <CircleArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
