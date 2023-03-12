import { useQuery } from "react-query";
import { userRepository } from "../api/userRepository";

export const useUser = (token: string) =>
  useQuery("surveys", () =>
    userRepository.getUserByToken(token).then((res) => res)
  );
