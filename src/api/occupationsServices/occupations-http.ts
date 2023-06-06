import { IMarina, IOccupations } from "../../api-types";
import { IMarinaFormData } from "../../types";
import { axiosBackendClient } from "../axiosServices/axiosBackendClient";

export const getAllOccupations = async (marinaId: string) => {
  const { data } = await axiosBackendClient.get(`/occupations/${marinaId}`);
  return data;
};

export const createOccupation = async (
  occupation: IOccupations
): Promise<IOccupations> => {
  const { data } = await axiosBackendClient.post(`/occupations`, {
    occupation,
  });
  return data;
};
