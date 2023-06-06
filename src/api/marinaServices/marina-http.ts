import { IMarina } from "../../api-types";
import { IMarinaFormData } from "../../types";
import { axiosBackendClient } from "../axiosServices/axiosBackendClient";

export const getAllMarinas = async () => {
  const { data } = await axiosBackendClient.get("/marinas");
  return data;
};

export const createMarina = async (
  marina: IMarinaFormData
): Promise<IMarina> => {
  const { data } = await axiosBackendClient.post("/marinas", { marina });
  return data;
};

export const editMarina = async (marina: IMarina): Promise<IMarina> => {
  const { data } = await axiosBackendClient.patch("/marinas", { marina });
  return data;
};

export const getMarinaWithCurrentOccupancy = async (marinaId: string) => {
  const { data } = await axiosBackendClient.get(
    `/marinas/occupancy/${marinaId}`
  );
  return data;
};

export const getMarina = async (marinaId: string) => {
  const { data } = await axiosBackendClient.get(`/marinas/${marinaId}`);
  return data;
};
