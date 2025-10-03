import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const StoryCard = ({
  image,
  title,
  setIsModalOpen,
}: {
  image: string;
  title: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex">
      <div
        key={image + title}
        className={`lg:relative hidden lg:block bg-white p-4 sm:p-6 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm lg:w-80 flex-shrink-0`}
      >
        <div
          className="mb-4 sm:mb-6 relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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
    </div>
  );
};
export default StoryCard;
