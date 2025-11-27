"use client";

import Navigation from "@/app/components/Navigation";
import Image from "next/image";

const WardrobePage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#FFE8DB] to-[#FFE8DB] md:to-white relative overflow-hidden">
      <Navigation />
      <div className="min-h-screen w-full flex flex-col items-center gap-2 overflow-auto md:flex-row md:gap-6 pt-20 md:pt-[12%] md:px-6">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <Image
            className="shrink-0"
            key={num}
            src={`/Wardrobe/${num}.png`}
            alt="wardrobe images"
            height={400}
            width={380}
          />
        ))}
      </div>
    </div>
  );
};
export default WardrobePage;
