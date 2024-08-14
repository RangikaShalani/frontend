import { createContext, useContext } from "react";
import UserStore from "./user";

interface Store {
  userStore: UserStore;
}

export const store: Store = {
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);
