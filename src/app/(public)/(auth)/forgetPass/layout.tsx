import BaseAuth from "@/components/auth/login/BaseAuth";
import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const RegisterLayout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <BaseAuth>
        {children}
      </BaseAuth>
    </div>
  );
};

export default RegisterLayout;
