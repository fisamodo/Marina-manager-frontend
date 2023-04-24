import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import { IUser } from "../../api-types";
import * as http from "./user-http";

export const cacheKeys = {
  users: "users",
  promoteDepromoteUsers: "promote-depromote-users",
};

export const useUser = () =>
  useQuery("token", async () => http.getUserByToken().then((res) => res));

export function useRegisterUser(): UseMutateAsyncFunction<IUser, any, any> {
  const { mutateAsync } = useMutation<IUser, any, any>(http.register, {
    onError: (error: any) => {
      throw error;
    },
  });
  return mutateAsync;
}

export function useLoginUser(): UseMutateAsyncFunction<IUser, any, any> {
  const { mutateAsync } = useMutation<IUser, any, any>(http.login, {
    onError: (error: any) => {
      throw error;
    },
  });
  return mutateAsync;
}

export function useLogoutUser(): UseMutateAsyncFunction<IUser> {
  const { mutateAsync } = useMutation<IUser, any, any>(http.logout, {
    onError: (error: any) => {
      throw error;
    },
  });
  return mutateAsync;
}

export const useUserIsLoggedIn = () =>
  useQuery("isLoggedIn", async () => http.logout().then((res) => res));

export function useUsers(): UseQueryResult<IUser[], any> {
  return useQuery<IUser[], any>(cacheKeys.users, () => http.getAllUsers(), {
    onError: (error: any) => {
      throw error;
    },
  });
}

export function usePromoteDepromoteUser(): UseMutateAsyncFunction<
  any,
  string,
  any
> {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation<any, string, any>(
    http.promoteDepromoteUsers,
    {
      onError: (error) => {
        throw error;
      },
      onSuccess: (error) => {
        queryClient.refetchQueries(cacheKeys.users);
      },
    }
  );
  return mutateAsync;
}
