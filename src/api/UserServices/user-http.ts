import { ILoginInfo, ISignupUserInfo } from "../../types";
import { axiosBackendClient } from "../axiosServices/axiosBackendClient";

export const register = async (userInfo: ISignupUserInfo) => {
  const { data } = await axiosBackendClient.post("/users/register", userInfo);
  return data;
};
export const login = async (userInfo: ILoginInfo) => {
  const { data } = await axiosBackendClient.post("/users/login", userInfo, {
    withCredentials: true,
  });
  return data;
};
export const getUserByToken = async () => {
  const { data } = await axiosBackendClient.get("/users/verify");
  return data;
};

export const logout = async () => {
  const { data } = await axiosBackendClient.post("/users/logout");
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axiosBackendClient.get("users/all-users");
  return data;
};
