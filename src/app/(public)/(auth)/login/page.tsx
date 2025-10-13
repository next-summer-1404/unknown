"use client";
import LoginPage from "@/components/auth/login/LoginPage";
import React, { FC, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
  navigateFlga: number;
}

const LoginAuthPage: FC<IProps> = ({ children, navigateFlga }) => {
  const [state, setState] = useState<number>(1);
  if (state === 1) {
    return <LoginPage />;
  }

  return null
};

export default LoginAuthPage;
