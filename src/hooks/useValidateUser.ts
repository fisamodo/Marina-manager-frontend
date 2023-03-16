import { useQuery } from "react-query";
import { userRepository } from "../api/userRepository";

export const useUser = () =>
  useQuery(
    "token",
    async () => await userRepository.getUserByToken().then((res) => res)
  );

export const useUserIsLoggedIn = () =>
  useQuery(
    "isLoggedIn",
    async () => await userRepository.logout().then((res) => res)
  );
