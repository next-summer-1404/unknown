"use client";
import React, { FC, useState } from "react";
import StartUserRegistration from "@/components/auth/register/StartUserRegistration";
import VerifyEmail from "@/components/auth/register/VerifyEmail";
import CompleteRegistration from "@/components/auth/register/CompleteRegistration";

interface IProps {
  navigateFlag?: number;
}

const RegisterAuthPage: FC<IProps> = ({ navigateFlag = 1 }) => {
  const [state, setState] = useState<number>(navigateFlag);

  const goToNextStep = () => {
    setState((prev) => Math.min(prev + 1, 3));
  };

  const goToPreviousStep = () => {
    setState((prev) => Math.max(prev - 1, 1));
  };

  switch (state) {
    case 1:
      return <StartUserRegistration onNext={goToNextStep} />;
    case 2:
      return <VerifyEmail onNext={goToNextStep} onBack={goToPreviousStep} />;
    case 3:
      return <CompleteRegistration onNext={goToNextStep}  />;
    default:
      return <p>مرحله نامعتبر است.</p>;
  }
};

export default RegisterAuthPage;
