"use client";

import { exportToExcel } from "@/utils/exportToExcel";
import axios from "axios";
import { useEffect, useState } from "react";

export interface RSVP {
  name: string;
  age: number;
  countryCode: number;
  contact: number;
  email: string;
  attending: "Yes" | "No" | "Maybe";
  team: "Groom" | "Bride";
  members: number;
  familyDetails: {
    name: string;
    age: number;
    code: string;
    contact?: number;
  }[];
}

const HorizonAdminPage = () => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllRSVPs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/rsvps");
      console.log(data);

      setRsvps(data.data);

      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllRSVPs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFE8DB] to-white relative overflow-hidden p-4">
      <main className="h-full w-full text-black font-medium font-alice">
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-white animate-spin fill-[#bba582]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : rsvps.length ? (
          <>
            <div className="grid grid-cols-11 wrap-break-word">
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Name
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Age
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Country Code
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Contact
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                email
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Attending
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Team
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Members
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Age
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Country code
              </p>
              <p className="border-[1px] text-left px-2 py-1 font-semibold">
                Contact
              </p>
            </div>
            {rsvps.map((rsvp, index) => (
              <div
                key={rsvp.email + index}
                className="grid grid-cols-11 wrap-break-word"
              >
                <p className="border-[1px] px-2 py-1">{rsvp.name}</p>
                <p className="border-[1px] px-2 py-1">{rsvp.age}</p>
                <p className="border-[1px] px-2 py-1">{rsvp.countryCode}</p>
                <p className="border-[1px] px-2 py-1">{rsvp.contact}</p>
                <p className="border-[1px] px-2 py-1">{rsvp.email}</p>
                <p className="border-[1px] px-2 py-1">{rsvp.attending}</p>
                <p className="border-[1px] px-2 py-1">{rsvp.team}</p>
                <div className="grid grid-cols-1">
                  {rsvp.familyDetails &&
                    rsvp.familyDetails.map((member, i) => (
                      <p
                        key={member.name + i}
                        className="border-[1px] px-2 py-1"
                      >
                        {member.name}
                      </p>
                    ))}
                </div>
                <div className="grid grid-cols-1">
                  {rsvp.familyDetails &&
                    rsvp.familyDetails.map((member, i) => (
                      <p
                        key={member.name + member.age + i}
                        className="border-[1px] px-2 py-1"
                      >
                        {member.age}
                      </p>
                    ))}
                </div>
                <div className="grid grid-cols-1">
                  {rsvp.familyDetails &&
                    rsvp.familyDetails.map((member, i) => (
                      <p
                        key={member.name + member.code + i}
                        className="border-[1px] px-2 py-1"
                      >
                        {member.code}
                      </p>
                    ))}
                </div>
                <div className="grid grid-cols-1">
                  {rsvp.familyDetails &&
                    rsvp.familyDetails.map((member, i) => (
                      <p
                        key={member.name + member.contact + i}
                        className="border-[1px] px-2 py-1"
                      >
                        {member.contact}
                      </p>
                    ))}
                </div>
              </div>
            ))}
            <button
              onClick={() => exportToExcel(rsvps, "Wedding-attendance.xlsx")}
              className="float-right px-6 py-2 bg-emerald-600 font-medium cursor-pointer active:scale-95 transition-transform rounded-2xl text-xl text-white mt-6"
            >
              Export to excel
            </button>
          </>
        ) : (
          <div>No RSVPs yet</div>
        )}
      </main>
    </div>
  );
};
export default HorizonAdminPage;
