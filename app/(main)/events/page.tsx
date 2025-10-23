import Navigation from "@/app/components/Navigation";
import Image from "next/image";

import haldi from "../../../public/haldi.png";
import mehendi from "../../../public/mehandi.png";
import sangeet from "../../../public/sangeet.png";
import baraat from "../../../public/baarat.png";
import jaimala from "../../../public/jaimala.png";
import pheras from "../../../public/pheras.png";
import reception from "../../../public/reception.png";
import white from "../../../public/white-bg.jpeg";

// Day 1
// 5th March

// Mehendi
// Sangeet followed by After Party

// Day 2
// 6th March

// Haldi
// Baraat
// Jaimala
// Pheras
// Reception & After Party

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-url('/white-bg.jpeg') relative overflow-hidden">
      <Navigation />
      <Image src={white} fill alt="bg" className="absolute top-0 -z-10" />
      <div className="pt-[12%] flex justify-center">
        <div className="w-[840px] pt-10 flex flex-col px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-alice text-5xl! text-[#c4a882] underline">
            Events
          </h1>
          <section className="flex flex-col gap-4 pt-2">
            <div className="flex items-center justify-center w-full">
              <div className="border-t border-[#c4a882]/50 flex-grow max-w-[60px] mr-4"></div>
              <h2 className="text-center font-alice text-4xl rounded-b-2xl text-[#c4a882] py-2">
                5 <sup>th</sup> March
              </h2>
              <div className="border-t border-[#c4a882]/50 flex-grow max-w-[60px] ml-4"></div>
            </div>

            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={mehendi} alt="mehendi" />
              <div className="lg:w-96 md:w-80 w-44 text-sm">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  MEHENDI CEREMONY
                </p>
                <p className="font-alice">
                  is a joyful, pre-wedding event where intricate henna designs
                  are applied to the bride&apos;s hands and feet, symbolizing
                  blessings for prosperity and good fortune in her marriage
                </p>
              </div>
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <div className="lg:w-96 md:w-80 w-44 text-sm">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  SANGEET & AFTER PARTY
                </p>
                <p className="font-alice">
                  involving music, dancing, and singing that unites families and
                  friends to celebrate the upcoming union of the couple, this
                  event will be held at Jewel Ballroom
                </p>
              </div>
              <Image height={140} width={140} src={sangeet} alt="sangeet" />
            </div>
          </section>

          <section className="flex flex-col gap-4 pt-2">
            <div className="flex items-center justify-center w-full">
              <div className="border-t border-[#c4a882]/50 flex-grow max-w-[60px] mr-4"></div>
              <h2 className="text-center font-alice text-4xl rounded-b-2xl py-2 text-[#c4a882]">
                6 <sup>th</sup> March
              </h2>
              <div className="border-t border-[#c4a882]/50 flex-grow max-w-[60px] ml-4"></div>
            </div>

            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={haldi} alt="haldi" />
              <div className="lg:w-96 md:w-80 w-44 text-sm">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  HALDI CEREMONY
                </p>
                <p className="font-alice">
                  where a turmeric paste is applied to the bride and groom for
                  purification and to bless the couple with a happy start to
                  their married life
                </p>
              </div>
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <div className="lg:w-96 md:w-80 w-44 text-sm">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  BARAAT CEREMONY
                </p>
                <p className="font-alice">
                  a vibrant and celebratory procession led by the groom and his
                  family, dancing and singing with music to the wedding venue.
                </p>
              </div>
              <Image height={140} width={140} src={baraat} alt="baraat" />
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={jaimala} alt="jaimala" />
              <div className="lg:w-96 md:w-80 w-44 text-sm">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  JAIMALA CEREMONY
                </p>
                <p className="font-alice">
                  ritual where the bride and groom garland each other,
                  symbolizing mutual acceptance and the official beginning of
                  their journey as a couple.
                </p>
              </div>
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <div className="lg:w-96 md:w-80 w-44 text-sm">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  PHERAS CEREMONY
                </p>
                <p className="font-alice">
                  where the bride and groom circle a sacred fire, exchanging
                  vows and making seven solemn promises for their life together.
                </p>
              </div>
              <Image height={140} width={140} src={pheras} alt="pheras" />
            </div>
            <div className="h-48 w-full flex items-center justify-evenly my-4">
              <Image height={140} width={140} src={reception} alt="reception" />
              <div className="lg:w-96 md:w-80 w-44 text-sm">
                <p className="font-alice text-2xl text-center text-[#c4a882]">
                  RECEPTION & AFTER PARTY
                </p>
                <p className="font-alice">
                  is a joyous occasion where friends and family can express
                  their love and well wishes for the couple&apos;s life
                  together.
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4 mb-6">
            <div className="flex items-center justify-center w-full">
              <div className="border-t border-[#c4a882]/50 flex-grow max-w-[60px] mr-4"></div>
              <h2 className="text-center font-alice text-4xl text-[#c4a882] rounded-b-2xl py-2">
                7 <sup>th</sup> March
              </h2>
              <div className="border-t border-[#c4a882]/50 flex-grow max-w-[60px] ml-4"></div>
            </div>

            <div className="w-full flex flex-col items-center">
              <h2 className="w-full font-alice text-2xl flex justify-center text-[#c4a882]">
                Checkout
              </h2>
              <p className=" w-72 text-center mt-2 mb-4 font-alice">
                Checkout with memories and photos that last forever
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default EventsPage;
