import react, { useCallback, useState } from 'react';
import { GetImagesCallbackType, IDataPokemons, GetFromUrlCallbackType } from '../../models';
import { useStore } from '../store';
import { useAxios } from './useAxios';
import { useOpenDialog } from './useOpenDialogs';

export function useGetPokemons() {
    const { setNextPokemonsRequest, setPokemonList } = useStore();
    const { setIsErrorFetchDialogOpen } = useOpenDialog();
    const { fetchData } = useAxios();
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

    const fetchDataCallback = useCallback<GetFromUrlCallbackType>(async (url) => {
        const data = await fetchData(url, "GET", '')

        if (data[1].isError === true) {

            setIsErrorFetchDialogOpen(true);
        }

        if (data[1].isError === false) {

            setNextPokemonsRequest(data[0].next);
            getPokemonImage(data[0].results);
        }
    }, [])

    const getPokemonImage = useCallback<GetImagesCallbackType>(async (pokemonList) => {
        let pokemonsListDetails: IDataPokemons[] = [];
        let dataResponse = null;
        let pokemonDetails: IDataPokemons;
        let pokemon;

        for (let i = 0; i < pokemonList.length; i++) {
            pokemon = pokemonList[i];

            dataResponse = await (fetchData(baseUrl + '/' + pokemon.name, "GET", ''));

            if (dataResponse[1].isError === false) {

                pokemonDetails = {
                    name: pokemon.name,
                    image: dataResponse[0].sprites.front_default,
                    weight: dataResponse[0].weight,
                    heigth: dataResponse[0].height
                }

                pokemonsListDetails.push(pokemonDetails)
            }
        }

        setPokemonList(pokemonsListDetails);
    }, []);

    return { fetchDataCallback };
}