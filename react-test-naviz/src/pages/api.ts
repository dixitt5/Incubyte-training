import axios from 'axios'
import { type IPokemon } from '../models/Pokemon'

export const fetchPokemons = async (): Promise<IPokemon[]> => {
  return (await axios.get(
    'https://pokeapi.co/api/v2/pokemon/?limit=10')).data.results
  // return pokemonData.map((pokemon: IPokemon, index: number) => {
  //     return {
  //         ...pokemon,
  //         id: index + 1,
  //     }
  // })
}
