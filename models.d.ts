export type GetImagesCallbackType = <T extends {name:string}>(pokemonList: T[]) => void;
export type DefaultCallbackType = () => void;

export interface IDataPokemons {
    name: string;
    image: string;
    weight: number;
    heigth: number;
}

export interface IStore {
    pokemonList: object[],

    isErrorFetchDialogOpen:boolean;

    setIsErrorFetchDialogOpen: (statement:boolean) => void;
    // setPokemonList: (data:object[]) => void;
}