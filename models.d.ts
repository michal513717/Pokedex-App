export type GetImagesCallbackType = <T extends {name:string}>(pokemonList: T[]) => void;
export type DefaultCallbackType = () => void;
export type GetFromUrlCallbackType = (url:string) => void;

export interface IDataPokemons {
    name: string;
    image: string;
    weight: number;
    heigth: number;
}

export interface IStore {
    pokemonList: IDataPokemons[];
    nextPokemonsRequest: string;

    isErrorFetchDialogOpen:boolean;

    setIsErrorFetchDialogOpen: (statement:boolean) => void;
    setPokemonList: (data:IDataPokemons[]) => void;
    setNextPokemonsRequest: (url:string) => void;
}