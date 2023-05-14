import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import * as http from "./occupations-http";
import { IMarinaFormData } from "../../types";
import { IOccupations } from "../../api-types";

const cacheKeys = {
  occupations: "occupations",
};

export function useOccupations(
  marinaId: string
): UseQueryResult<IOccupations[], any> {
  return useQuery<IOccupations[], any>(
    cacheKeys.occupations,
    () => http.getAllOccupations(marinaId),
    {
      onError: (error: any) => {
        throw error;
      },
    }
  );
}

export function useCreateOccupations(): UseMutateAsyncFunction<
  IOccupations,
  any,
  any
> {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<IOccupations, any, any>(
    http.createOccupation,
    {
      onError: (error: any) => {
        throw error;
      },
      onSuccess: () => {
        queryClient.refetchQueries(cacheKeys.occupations);
      },
    }
  );
  return mutateAsync;
}
