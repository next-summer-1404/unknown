"use client";

import Image from "next/image";
import React, { useState } from "react";
import GreenArrow from "../../../assets/images/greenArrow.png";
import PropertyStepper from "./PropertyStepper";
import BasicInfoForm from "./BasicInfoForm ";
import AddressForm from "./AddressForm ";
import FacilitiesForm from "./FacilitiesForm ";
import ImagesUpload from "./ImagesUpload ";
import ConfirmPage from "./ConfirmPage ";

const AddProperty = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="h-auto bg-[#393939] text-white rounded-2xl pb-8">
      <div className="flex items-center justify-between px-8 py-3">
        <p className="text-[#AAA] text-[16px] font-light">ساخت آگهی ملک جدید</p>
        <div className="flex items-center gap-2">
          <p className="text-[#8CFF45] text-[16px]">لیست املاک من</p>
          <Image src={GreenArrow} width={50} height={16} alt="Green arrow" />
        </div>
      </div>

      <div className="border-t border-dashed border-[#333] mb-6 mx-8" />

      <div className="px-8">
        <PropertyStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>

      <div className="mt-8 px-8">
        {activeStep === 0 && <BasicInfoForm setActiveStep={setActiveStep} />}
        {activeStep === 1 && <AddressForm setActiveStep={setActiveStep} />}
        {activeStep === 2 && <FacilitiesForm setActiveStep={setActiveStep} />}
        {activeStep === 3 && <ImagesUpload setActiveStep={setActiveStep}/>}
        {activeStep === 4 && <ConfirmPage setActiveStep={setActiveStep}/>}
      </div>
    </div>
  );
};

export default AddProperty;
