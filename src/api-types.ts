import { IDropdownOption } from "./types";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: UserType;
  marinaId: string;
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

export interface IOccupations {
  registrationNumber: string;
  isUsingElectricPort: boolean;
  isUsingWaterPort: boolean;
  boatType: IDropdownOption;
  marinaId: string;
}

export enum BoatType {
  SPEED_BOAT,
  SMALL_BOAT,
  SAIL_BOAT,
  YACHT,
  FERRY,
}

export interface IOccupancyStats {
  amount: number;
  boatType: string;
  maxAmount: number;
}

export interface IMarinaWithOccupancy {
  marina: IMarina;
  occupancy: IOccupancyStats;
}
