import {IPokemon, PokeType} from "../models/Pokemon";
import axios from "axios";

export const fetchPokemons = async (): Promise<IPokemon[]> => {
    const pokemonData = (await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=10")).data.results
    return pokemonData.map((pokemon: IPokemon, index: number) => {
        return {
            ...pokemon,
            id: index + 1,
        }
    })
}
