import { create } from "zustand";
import Cookies from "js-cookie";

type User = {
  token: string;
  email: string;
  username: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => {
    Cookies.set("user", JSON.stringify(user), { expires: 7, sameSite: "Lax" });
    set({ user });
  },
  clearUser: () => {
    Cookies.remove("user");
    set({ user: null });
  },
}));
