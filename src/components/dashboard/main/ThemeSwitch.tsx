"use client";

import React, { useState } from "react";
import { Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; 

const ThemeSwitch = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex items-center">
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}  
        size="lg"
        color="success"
        classNames={{
          base: "rounded-full bg-gray-300 hover:bg-gray-400 transition-all relative",
          thumb: "bg-[#8CFF45] shadow-none",
        }}
        thumbIcon={({ isSelected }) =>
          isSelected ? (
            <SunIcon className="w-4 h-4 text-black" />   
          ) : (
            <MoonIcon className="w-4 h-4 text-black" /> 
          )
        }
      />
    </div>
  );
};

export default ThemeSwitch;
