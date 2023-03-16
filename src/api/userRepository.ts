import { ILoginInfo, ISignupUserInfo } from "../types";
import { axiosBackendClient } from "./axiosServices/axiosBackendClient";

class UserRepository {
  signUp = async (userInfo: ISignupUserInfo) => {
    const response = await axiosBackendClient.post("/users/register", userInfo);
    return response.data;
  };
  login = async (userInfo: ILoginInfo) => {
    const response = await axiosBackendClient.post("/users/login", userInfo, {
      withCredentials: true,
    });
    return response.data;
  };
  getUserByToken = async (token: string) => {
    const response = await axiosBackendClient.post(`/users/${token}`);
    return response.data;
  };

  logout = async () => {
    const response = await axiosBackendClient.post(`/users/logout`);
    console.log("Here", response);
    return response.data;
  };
}

export const userRepository = new UserRepository();
