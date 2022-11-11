import create from "zustand";
import type { IStore } from './../../models';

export const useStore = create<IStore>((set) => ({
    pokemonList: [],
    nextPokemonsRequest: '',

    isErrorFetchDialogOpen: false,
    isPokemonsDetailsDialogOpen: false,

    setIsErrorFetchDialogOpen: async (statement) => {
        set((state) => ({ ...state, isErrorFetchDialogOpen: statement }))
    },

    setPokemonList: async (data) => {
        set((state) => ({ ...state, pokemonList: [ ...state.pokemonList, ...data ] }))
    },

    setNextPokemonsRequest: async (url) => {
        set((state) => ({ ...state, nextPokemonsRequest: url}))
    }
}))