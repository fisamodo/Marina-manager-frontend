import { CSSProperties } from "react";

export interface IDropdownOption {
  label: string;
  value: any;
}

export type ICSSProps = {
  className?: string | undefined;
  style?: CSSProperties | undefined;
};

export interface ISignupUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type ILoginInfo = Omit<ISignupUserInfo, "firstName" | "lastName">;
