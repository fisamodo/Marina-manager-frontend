import { useQuery, UseQueryResult } from "react-query";
import { IMarina } from "../../api-types";
import * as http from "./marina-http";

const cacheKeys = {
  marinas: "marinas",
};

export function useMarinas(): UseQueryResult<IMarina[], any> {
  return useQuery<IMarina[], any>(
    cacheKeys.marinas,
    () => http.getAllMarinas(),
    {
      onError: (error: any) => {
        throw error;
      },
    }
  );
}