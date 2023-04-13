import { recoilPersist } from "recoil-persist";
import {
  atom,
  SetterOrUpdater,
  useRecoilState,
  useResetRecoilState,
} from "recoil";

export const useCurrentUser = (): [any, any] => {
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
