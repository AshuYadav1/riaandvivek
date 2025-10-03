"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SideNavigationProps {
  currentStory?: number;
  totalStories?: number;
  onPreviousStory?: () => void;
  onNextStory?: () => void;
}

export default function SideNavigation({
  currentStory,
  totalStories,
  onPreviousStory,
  onNextStory,
}: SideNavigationProps) {
  const pathname = usePathname();
  // const router = useRouter();

  const isStoryPage = pathname === "/our-story";

  const handlePrevious = () => {
    if (isStoryPage && onPreviousStory) {
      onPreviousStory();
    }
  };

  const handleNext = () => {
    if (isStoryPage && onNextStory) {
      onNextStory();
    }
  };

  const canGoPrevious = isStoryPage
    ? currentStory !== undefined && currentStory !== 0
    : currentStory !== undefined && currentStory > 0;

  const canGoNext = isStoryPage
    ? currentStory !== undefined &&
      totalStories !== undefined &&
      currentStory < totalStories - 1
    : currentStory !== undefined && currentStory > 0;

  // 🔑 Shared button style
  const baseButton =
    "p-4 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 text-white";
  const activeButton =
    "bg-[#bba582] hover:bg-[#a08660] cursor-pointer active:bg-[#7a6645] border-[#bba582]/40 hover:shadow-xl";
  const disabledButton =
    "bg-[#bba582]/60 cursor-not-allowed border-[#bba582]/30";

  return (
    <>
      {/* Previous Button */}
      <div className="fixed left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-40">
        <motion.button
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          whileHover={canGoPrevious ? { scale: 1.05, x: -2 } : {}}
          whileTap={canGoPrevious ? { scale: 0.95 } : {}}
          className={`${baseButton} ${
            canGoPrevious ? activeButton : disabledButton
          }`}
          title={isStoryPage ? "Previous Story" : "Previous Page"}
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* Next Button */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-40"
      >
        <motion.button
          onClick={handleNext}
          disabled={!canGoNext}
          whileHover={canGoNext ? { scale: 1.05, x: 2 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
          className={`${baseButton} ${
            canGoNext ? activeButton : disabledButton
          }`}
          title={isStoryPage ? "Next Story" : "Next Page"}
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </motion.button>
      </motion.div>
    </>
  );
}
