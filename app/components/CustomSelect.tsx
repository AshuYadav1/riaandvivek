/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

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
  const [openUp, setOpenUp] = useState(false);
  const [selectedOption, setSelectedOpen] = useState(countryCodes[0]);

  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (setSelectedCountryCode) setSelectedCountryCode(selectedOption.code);
    if (handleMemberChange)
      handleMemberChange(memberIndex!, "code", selectedOption.code);
  }, [selectedOption, memberIndex, setSelectedCountryCode, handleMemberChange]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const dropdownHeight = 200;

      setOpenUp(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
    }
    setOpen(!open);
  };

  return (
    <>
      <button
        ref={dropdownRef}
        type="button"
        onClick={() => toggleDropdown()}
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
            className={`${
              openUp ? "bottom-full" : "top-full"
            } absolute z-10 h-60 w-28 left-0 overflow-y-scroll cursor-pointer border-2 text-black bg-white border-[#BFBFBF] outline-none focus-within:border-primary
          rounded-lg px-1 py-2 text-xl flex flex-col`}
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
