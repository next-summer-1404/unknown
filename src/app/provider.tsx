"use client";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
     <HeroUIProvider>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </HeroUIProvider>
  );
};

export default Provider;
