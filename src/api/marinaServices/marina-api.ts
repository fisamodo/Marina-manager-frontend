import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { IMarina, IMarinaWithOccupancy } from "../../api-types";
import * as http from "./marina-http";
import { IMarinaFormData } from "../../types";

const cacheKeys = {
  marinas: "marinas",
  marina: "marina",
  marinasWithOccupancy: "marinasWithOccupancy",
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

export function useMarina(marinaId: string): UseQueryResult<IMarina, any> {
  return useQuery<IMarina, any>(
    cacheKeys.marina,
    () => http.getMarina(marinaId),
    {
      onError: (error: any) => {
        throw error;
      },
    }
  );
}

export function useCreateMarina(): UseMutateAsyncFunction<
  IMarinaFormData,
  any,
  any
> {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<IMarina, any, any>(http.createMarina, {
    onError: (error: any) => {
      throw error;
    },
    onSuccess: () => {
      queryClient.refetchQueries(cacheKeys.marinas);
      queryClient.refetchQueries(cacheKeys.marina);
      queryClient.refetchQueries(cacheKeys.marinasWithOccupancy);
    },
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
      queryClient.refetchQueries(cacheKeys.marinas);
      queryClient.refetchQueries(cacheKeys.marina);
      queryClient.refetchQueries(cacheKeys.marinasWithOccupancy);
    },
  });
  return mutateAsync;
}

export function useMarinaWithCurrentOccupancy(
  marinaId: string
): UseQueryResult<IMarinaWithOccupancy, any> {
  return useQuery<IMarinaWithOccupancy, any>(
    cacheKeys.marinasWithOccupancy,
    () => http.getMarinaWithCurrentOccupancy(marinaId),
    {
      onError: (error: any) => {
        throw error;
      },
    }
  );
}
