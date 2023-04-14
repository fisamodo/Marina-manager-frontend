export interface IUser {
  _id: string;
  firstName: string;
  lastname: string;
  email: string;
  password: string;
  usertype: UserType;
}
export type UserType = "admin" | "employee";
