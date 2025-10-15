"use client";

import Login from "@/app/components/Login";
import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContext = {
  isUserAuth: boolean;
  isAdminAuth: boolean;
};

const AuthContext = createContext<AuthContext | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const [isUserAuth, setIsUserAuth] = useState(false);
  const [isAdminAuth, setIsAdminAuth] = useState(false);

  useEffect(() => {
    const isAdminAlreadyAuth = sessionStorage.getItem("admin-auth");
    if (isAdminAlreadyAuth) setIsAdminAuth(true);

    const isUserAlreadyAuth = sessionStorage.getItem("user-auth");
    if (isUserAlreadyAuth) setIsUserAuth(true);
  }, []);

  if (pathname === "/horizonadmin") {
    if (!isAdminAuth)
      return <Login setIsAuth={setIsAdminAuth} authFor="Admin" />;
  }

  if (!isUserAuth) return <Login setIsAuth={setIsUserAuth} authFor="User" />;

  return (
    <AuthContext.Provider
      value={{
        isAdminAuth,
        isUserAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext must be used within a AuthContextProvider");

  return context;
}
