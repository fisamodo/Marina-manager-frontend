export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: UserType;
}

export interface IMarina {
  _id: string;
  marinaName: string;
  hasElectricPort: boolean;
  hasWaterSource: boolean;
  maxNumberOfSpeedBoats: number;
  maxNumberOfSmallBoats: number;
  maxNumberOfSailBoats: number;
  maxNumberOfYachts: number;
  maxNumberOfFerries: number;
}

export type UserType = "admin" | "employee";
