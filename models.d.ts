
export interface IStore {
    pokemonList: object[],

    isErrorFetchDialogOpen:boolean;

    setIsErrorFetchDialogOpen: (statement:boolean) => void;
    setPokemonList: (data:object[]) => void;
}