import { pokemonList } from "./data/PokeData"
import { Pokemon } from "./types/Pokemon";

export const getPokemons = async (): Promise<Pokemon[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pokemonList);
        }, 2000)
        // reject(new Error('pokemon fetch has failed'));

    })
}