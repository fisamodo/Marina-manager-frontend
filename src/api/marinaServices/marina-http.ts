import { IMarina } from "../../api-types";
import { axiosBackendClient } from "../axiosServices/axiosBackendClient";

export const getAllMarinas = async () => {
  const { data } = await axiosBackendClient.get("/marinas");
  return data;
};

export const createMarina = async (marina: IMarina): Promise<IMarina> => {
  console.log(marina)
  const { data } = await axiosBackendClient.post("/marinas", { marina });
  return data;
};
