"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronLeft, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navigationItems = [
  { name: "WELCOME", href: "/welcome" },
  { name: "EVENTS", href: "/events" },
  { name: "RiViSP", href: "/rsvp2" },
  { name: "WARDROBE PLANNER", href: "/wardrobe" },
  { name: "OUR STORY", href: "/our-story" },
  { name: "FAQs", href: "/faqs" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Logic to determine the next page for navigation
  const currentPageIndex = navigationItems.findIndex(
    (item) => item.href === pathname
  );

  const nextPage =
    navigationItems[(currentPageIndex + 1) % navigationItems.length];

  const prevPage =
    currentPageIndex === 0
      ? null
      : navigationItems[(currentPageIndex - 1) % navigationItems.length];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-amber-50/95 to-white/95 backdrop-blur-sm h-40">
        <div className="h-full flex flex-col justify-center items-center px-6">
          <div className="text-center flex items-center">
            {/* <h1 className="title text-3xl lg:text-4xl xl:text-5xl text-amber-900 mb-2">
              Ria & Vivek - Wedding Celebrations
            </h1> */}
            <Link href={"/"}>
              <Image
                src={"/LOGO.png"}
                alt="Logo"
                height={108}
                width={108}
                className="mx-auto"
              />
            </Link>

            <p className=" font-english text-3xl text-amber-800">
              Ria &amp; Vivek
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 xl:gap-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href && "border-b-2"
                } text-xs lg:text-sm tracking-wider transition-colors hover:text-amber-900 font-trajanpro ${
                  pathname === item.href
                    ? "text-amber-900 font-medium"
                    : "text-amber-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* <div className="absolute top-4 right-4">
          <Link
            href="/rsvp"
            className="bg-amber-700 text-white px-4 py-2 text-xs tracking-wider hover:bg-amber-800 transition-colors"
          >
            RSVP
          </Link>
        </div> */}
      </nav>

      {/* Tablet Navigation (mobile-style) */}
      <div className="hidden md:flex lg:hidden fixed inset-0 z-50 flex-col">
        <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-amber-50/95 to-white/95 backdrop-blur-sm h-[10vh] flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/LOGO.png"}
              alt="Logo"
              height={108}
              width={108}
              className="mx-auto"
            />
          </Link>
        </header>
        <div className="h-[12vh]"></div>

        {/* Toggle Menu Button (Hamburger ↔ X) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="fixed top-5 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700 transition-all"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Prev page btn */}
        {prevPage && (
          <Link
            href={prevPage.href}
            aria-label="Go to previous page"
            className="fixed bottom-4 left-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700"
          >
            <ChevronLeft size={24} />
          </Link>
        )}
        {/* Next Page Button */}
        <Link
          href={nextPage.href}
          aria-label="Go to next page"
          className="fixed bottom-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700"
        >
          <ChevronRight size={24} />
        </Link>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Slide-up Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-[10vh] left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto"
            >
              <div className="p-6">
                <nav className="flex flex-col divide-y divide-gray-200">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-center tracking-wider text-sm font-trajanpro ${
                        pathname === item.href
                          ? "text-amber-700 font-medium"
                          : "text-gray-800 hover:text-amber-600"
                      }`}
                    >
                      <span
                        className={`${
                          pathname === item.href &&
                          "border-b-2 border-amber-700"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-amber-50/95 to-white/95 backdrop-blur-sm h-[10vh] flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/LOGO.png"}
              alt="Logo"
              height={108}
              width={108}
              className="mx-auto"
            />
          </Link>
        </header>

        {/* Toggle Menu Button (Hamburger ↔ X) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="fixed top-5 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700 transition-all"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Prev page btn */}
        {prevPage && (
          <Link
            href={prevPage.href}
            aria-label="Go to previous page"
            className="fixed bottom-4 left-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700"
          >
            <ChevronLeft size={24} />
          </Link>
        )}
        {/* Next Page Button */}
        <Link
          href={nextPage.href}
          aria-label="Go to next page"
          className="fixed bottom-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700"
        >
          <ChevronRight size={24} />
        </Link>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Slide-in Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-[10vh] left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto"
            >
              <div className="p-6">
                <nav className="flex flex-col divide-y divide-gray-200 font-trajanpro">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-center tracking-wider text-sm ${
                        pathname === item.href
                          ? "text-amber-700 font-medium"
                          : "text-gray-800 hover:text-amber-600"
                      }`}
                    >
                      <span
                        className={`${
                          pathname === item.href &&
                          "border-b-2 border-amber-700"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
