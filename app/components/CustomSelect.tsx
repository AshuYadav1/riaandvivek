"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

const countryCodes = [
  {
    name: "India",
    code: "+91",
    flag: "https://cdn-icons-png.flaticon.com/512/330/330439.png",
  },
  {
    name: "Singapore",
    code: "+65",
    flag: "https://cdn-icons-png.flaticon.com/512/299/299981.png",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "https://cdn-icons-png.freepik.com/512/10948/10948404.png",
  },
  {
    name: "United States",
    code: "+1",
    flag: "https://cdn-icons-png.freepik.com/256/330/330459.png",
  },
  {
    name: "Canada",
    code: "+1",
    flag: "https://cdn-icons-png.flaticon.com/512/197/197430.png",
  },
  {
    name: "Australia",
    code: "+61",
    flag: "https://cdn-icons-png.flaticon.com/512/323/323367.png",
  },
  {
    name: "Germany",
    code: "+49",
    flag: "https://cdn-icons-png.flaticon.com/512/3909/3909219.png",
  },
  {
    name: "France",
    code: "+33",
    flag: "https://cdn-icons-png.freepik.com/512/10948/10948297.png",
  },
  {
    name: "Japan",
    code: "+81",
    flag: "https://cdn-icons-png.freepik.com/512/10948/10948350.png",
  },
];

const CustomSelect = ({
  setSelectedCountryCode,
}: {
  setSelectedCountryCode: Dispatch<SetStateAction<string>>;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOpen] = useState(countryCodes[0]);

  useMemo(() => {
    setSelectedCountryCode(selectedOption.code);
  }, [selectedOption]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="relative h-8 w-22 cursor-pointer outline-none focus-within:border-primary px-2 py-[22px] text-sm flex items-center justify-between"
      >
        <div className="flex gap-2">
          <Image
            src={selectedOption.flag}
            alt={selectedOption.name}
            height={20}
            width={20}
          />{" "}
          {selectedOption.code}
        </div>
        {open && (
          <div
            className="absolute z-10 h-fit top-11 w-28 left-0 overflow-y-scroll cursor-pointer border-2 text-black bg-white border-[#BFBFBF] outline-none focus-within:border-primary
          rounded-lg px-1 py-2 text-xl flex flex-col"
          >
            {countryCodes.map((country) => (
              <div
                key={country.name}
                onClick={() => setSelectedOpen(country)}
                className="w-20 px-1 py-2 flex hover:bg-primary/20 rounded-lg text-sm text-start gap-2"
              >
                <Image
                  src={country.flag}
                  alt={country.name}
                  height={20}
                  width={20}
                />{" "}
                {country.code}
              </div>
            ))}
          </div>
        )}
      </button>
    </>
  );
};

export default CustomSelect;
