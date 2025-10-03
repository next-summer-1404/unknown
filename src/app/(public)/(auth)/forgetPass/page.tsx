"use client";
import ResetPassword from '@/components/auth/forgetpass/ResetPassword';
import SendRequest from '@/components/auth/forgetpass/SendRequest';
import VerifyTheRequest from '@/components/auth/forgetpass/VerifyTheRequest';
import React, { FC, useState } from 'react'


interface IProps {
  navigateFlag?: number;
}

const ForgetPassPage: FC<IProps> = ({ navigateFlag = 1 }) => {
  const [state, setState] = useState<number>(navigateFlag);

  const goToNextStep = () => {
    setState((prev) => Math.min(prev + 1, 3));
  };

  const goToPreviousStep = () => {
    setState((prev) => Math.max(prev - 1, 1));
  };

  switch (state) {
    case 1:
      return <SendRequest onNext={goToNextStep} />;
    case 2:
      return <VerifyTheRequest onNext={goToNextStep}  />;
    case 3:
      return <ResetPassword onNext={goToNextStep}  />;
    default:
      return <p>مرحله نامعتبر است.</p>;
  }
}
export default ForgetPassPage
