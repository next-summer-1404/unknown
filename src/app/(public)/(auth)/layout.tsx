import BaseAuth from "@/components/auth/login/BaseAuth";
import { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const RegisterLayout: FC<ILayout> = ({ children }) => {
  return <BaseAuth>{children}</BaseAuth>;
};

export default RegisterLayout;
