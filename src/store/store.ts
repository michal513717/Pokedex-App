import create from "zustand/react";
import type { IStore } from "models";

export const useStore = create<IStore>((set) => ({
    isLogged:false,
}))