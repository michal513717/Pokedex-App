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
    pokemonDetails: any;//need to change
    nextPokemonsRequest: string;

    error:unknown | null | any; // need to change

    isErrorFetchDialogOpen:boolean;
    isPokemonsDetailsDialogOpen:boolean;

    setIsErrorFetchDialogOpen: (statement:boolean) => void;
    setPokemonsDetailsDialogOpen: (statement:boolean) => void;

    setError: (data:unknown) => void; // need to change
    setPokemonDetails: (data:any) => void; //need to change
    setPokemonList: (data:IDataPokemons[]) => void;
    setNextPokemonsRequest: (url:string) => void;
}