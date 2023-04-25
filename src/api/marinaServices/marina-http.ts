import { axiosBackendClient } from "../axiosServices/axiosBackendClient";

export const getAllMarinas = async () => {
  const { data } = await axiosBackendClient.get("/marinas");
  return data;
};
