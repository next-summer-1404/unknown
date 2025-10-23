"use client";
import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
   <SessionProvider>
     <HeroUIProvider>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </HeroUIProvider>
   </SessionProvider>
  );
};

export default Provider;
