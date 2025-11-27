"use client";

import Navigation from "@/app/components/Navigation";
import Image from "next/image";

const WardrobePage = () => {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      <Navigation />
      <div className="h-full w-full flex flex-col items-center overflow-auto md:flex-row pt-20 md:pt-[12%] bg-[#FFE8DB]">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <Image
            className="shrink-0"
            key={num}
            src={`/Wardrobe/${num}.png`}
            alt="wardrobe images"
            height={600}
            width={460}
          />
        ))}
      </div>
    </div>
  );
};
export default WardrobePage;
