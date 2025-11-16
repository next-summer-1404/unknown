"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider
        attribute="class" 
        defaultTheme="dark"
        enableSystem={false}
        value={{ dark: "dark", light: "light" }}
      >
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default Provider;
