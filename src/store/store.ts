import create from "zustand/react";
import type { IStore } from "models";

export const useStore = create<IStore>((set) => ({
    pokemonList: [],


    isErrorFetchDialogOpen: false,
    // isPokemonsDetailsDialogOpen: false,

    setIsErrorFetchDialogOpen: async (statement) => {
        set((state) => ({...state, isErrorFetchDialogOpen: statement}))
    },

    setPokemonList: async (data) => {
        set((state) => ({ ...state, pokemonList:data}))
    }
}))