export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: UserType;
}
export type UserType = "admin" | "employee";
