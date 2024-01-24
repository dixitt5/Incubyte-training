
import axios from "axios";

export const fetchPokemons = async ()    => {
    return (await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=10")).data.results
    // return pokemonData.map((pokemon: IPokemon, index: number) => {
    //     return {
    //         ...pokemon,
    //         id: index + 1,
    //     }
    // })
}
