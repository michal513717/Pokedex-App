import create from "zustand";
import type { IStore } from './../../models';

export const useStore = create<IStore>((set) => ({
    error:null,
    pokemonList: [],
    pokemonDetails: {},
    nextPokemonsRequest: '',


    isErrorFetchDialogOpen: false,
    isPokemonsDetailsDialogOpen: false,

    setIsErrorFetchDialogOpen: async (statement) => {
        set((state) => ({ ...state, isErrorFetchDialogOpen: statement }))
    },

    setPokemonsDetailsDialogOpen: async (statement) => {
        set((state) => ({ ...state, isPokemonsDetailsDialogOpen: statement}))
    },

    setPokemonList: async (data) => {
        set((state) => ({ ...state, pokemonList: [ ...state.pokemonList, ...data ] }))
    },

    setPokemonDetails: async (data) => {
        set((state) => ({ ...state, pokemonDetails: data }))
    },

    setError: async (data) => {
        set((state) => ({ ...state, error: data }))
    },

    setNextPokemonsRequest: async (url) => {
        set((state) => ({ ...state, nextPokemonsRequest: url}))
    }
}))