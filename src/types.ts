import { CSSProperties } from "react";
import { IMarina } from "./api-types";

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
export type IMarinaFormData = Omit<IMarina, "_id">;
