import { UseMutateAsyncFunction, useMutation, useQuery, useQueryClient, UseQueryResult } from "react-query";
import { IMarina } from "../../api-types";
import * as http from "./marina-http";
import { IMarinaFormData } from "../../types";

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

export function useCreateMarina(): UseMutateAsyncFunction<IMarinaFormData, any, any> {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<IMarina, any, any>(http.createMarina, {
    onError: (error: any) => {
      throw error;
    },
    onSuccess: () => {
      queryClient.refetchQueries(cacheKeys.marinas)
   }
  });
  return mutateAsync;
}

export function useEditMarina(): UseMutateAsyncFunction<IMarina, any, any> {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<IMarina, any, any>(http.editMarina, {
    onError: (error: any) => {
      throw error;
    },
    onSuccess: () => {
       queryClient.refetchQueries(cacheKeys.marinas)
    }
  });
  return mutateAsync;
}