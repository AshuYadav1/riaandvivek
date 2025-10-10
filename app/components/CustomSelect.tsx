"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

import countryCodes from "@/utils/countryCodes_full";
import { Member } from "../(main)/rsvp2/page";

const CustomSelect = ({
  setSelectedCountryCode,
  memberIndex,
  handleMemberChange,
}: {
  setSelectedCountryCode?: Dispatch<SetStateAction<string>>;
  memberIndex?: number;
  handleMemberChange?: (
    index: number,
    field: keyof Member,
    value: string
  ) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOpen] = useState(countryCodes[0]);

  useEffect(() => {
    if (setSelectedCountryCode) setSelectedCountryCode(selectedOption.code);
    if (handleMemberChange)
      handleMemberChange(memberIndex!, "code", selectedOption.code);
  }, [selectedOption]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative h-8 w-22 text-white cursor-pointer outline-none focus-within:border-primary px-2 py-[22px] text-sm flex items-center justify-between"
      >
        <div className="flex gap-2">
          <Image
            src={selectedOption.flag}
            alt={selectedOption.name}
            height={20}
            width={28}
          />{" "}
          {selectedOption.code}
        </div>
        {open && (
          <div
            className="absolute z-10 h-60 top-11 w-28 left-0 overflow-y-scroll cursor-pointer border-2 text-black bg-white border-[#BFBFBF] outline-none focus-within:border-primary
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
                  width={28}
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
