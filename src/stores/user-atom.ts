import { recoilPersist } from "recoil-persist";
import {
  atom,
  SetterOrUpdater,
  useRecoilState,
  useResetRecoilState,
} from "recoil";
import { IUser } from "../api-types";

export const useCurrentUser = (): [IUser, any] => {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  return [currentUser, setCurrentUser];
};
const { persistAtom } = recoilPersist();

const user = atom<any>({
  key: "user",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const useResetUserState = () => {
  return useResetRecoilState(user);
};
