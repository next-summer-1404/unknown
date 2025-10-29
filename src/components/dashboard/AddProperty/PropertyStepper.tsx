"use client";
import React, { useState } from "react";
import {
  InformationCircleIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  PhotoIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

interface PropertyStepperProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const PropertyStepper: React.FC<PropertyStepperProps> = ({ activeStep, setActiveStep }) => {

  const steps = [
    { label: "مشخصات اولیه", icon: InformationCircleIcon },
    { label: "آدرس", icon: MapPinIcon },
    { label: "امکانات", icon: BuildingOffice2Icon },
    { label: "تصاویر ملک", icon: PhotoIcon },
    { label: "تایید نهایی", icon: CheckCircleIcon },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-[#727070] py-4 rounded-[30px] mt-5">
      <div className="flex items-center justify-between w-[90%]">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          return (
            <div key={index} className="flex items-center">
              <button
                onClick={() => setActiveStep(index)}
                className={`relative flex items-center text-sm font-medium transition-all
                  ${
                    isActive
                      ? "text-[#111] font-semibold"
                      : "text-[#111] hover:text-[#333]"
                  }
                `}
              >
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-full border-[2px] ${
                    isCompleted
                      ? "border-[#4CAF50] bg-[#4CAF50]"
                      : isActive
                      ? "border-[#111]"
                      : "border-[#777]"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircleIcon className="w-4 h-4 text-white" />
                  ) : (
                    <step.icon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#111]" : "text-[#393939]"
                      }`}
                    />
                  )}
                </div>

                <span
                  className={`ml-2 ${
                    isActive ? "text-[#111]" : "text-[#393939]"
                  }`}
                >
                  {step.label}
                </span>
              </button>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-4 w-16 border-t-[2px] ${
                    index < activeStep ? "border-[#4CAF50]" : "border-[#393939]"
                  } border-dashed`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PropertyStepper;
