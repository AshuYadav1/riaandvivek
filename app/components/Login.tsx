"use client";

import { Dispatch, SetStateAction, useState } from "react";

const Login = ({
  setIsAuth,
  authFor,
}: {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  authFor: "User" | "Admin";
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const verifyAdmin = () => {
    if (
      username.trim() === "HorizonAdmin" &&
      password.trim() === "HorizonAdmin@2025"
    ) {
      setIsAuth(true);
      sessionStorage.setItem("admin-auth", "true");
    } else {
      setError("Invalid credentials");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const verifyUser = () => {
    if (password.trim() === "#rivi") {
      setIsAuth(true);
      sessionStorage.setItem("user-auth", "true");
    } else {
      setError("Invalid credentials");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <>
      {authFor === "User" ? (
        <section className="min-h-screen w-full bg-gradient-to-r from-[#FFE8DB] to-white flex flex-col justify-center items-center">
          <p className="text-red-500">{error && error}</p>
          <div className="w-80 flex flex-col gap-4 ">
            <p className="mb-4 text-3xl text-center font-alice">Login</p>
            <input
              className="px-2 py-1 rounded-sm h-10 w-full outline-none bg-gray-200 text-gray-80 placeholder:text-gray-80-600 font-mediub-2 dark:border-black focus:border-blue-500 transition-all"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
              type="text"
              placeholder="password"
            />
            <button
              onClick={() => verifyUser()}
              className="bg-amber-950 rounded-md text-xl text-white font-semibold py-1 active:scale-95 transition-all mt-4"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </section>
      ) : (
        <section className="min-h-screen w-full bg-gradient-to-r from-[#FFE8DB] to-white flex flex-col justify-center items-center">
          <p className="text-red-500">{error && error}</p>
          <div className="w-80 flex flex-col gap-4 ">
            <p className="mb-4 text-3xl text-center font-alice">HorizonAdmin</p>
            <input
              className="px-2 py-1 rounded-sm h-10 w-full outline-none bg-gray-200 text-gray-800 placeholder:text-gray-800-600 font-mediumb-2border-blue-500 transition-all"
              onChange={(e) => setUsername(e.target.value)}
              value={username || ""}
              type="text"
              placeholder="username"
            />
            <input
              className="px-2 py-1 rounded-sm h-10 w-full outline-none bg-gray-200 text-gray-80 placeholder:text-gray-80-600 font-mediub-2 dark:border-black focus:border-blue-500 transition-all"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
              type="text"
              placeholder="password"
            />
            <button
              onClick={() => verifyAdmin()}
              className="bg-amber-950 rounded-md text-xl text-white font-semibold py-1 active:scale-95 transition-all mt-4"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </section>
      )}
    </>
  );
};
export default Login;
