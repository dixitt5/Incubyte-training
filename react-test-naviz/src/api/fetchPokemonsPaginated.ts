import axios from 'axios'
import { type IPokemon } from '../models/Pokemon'

interface PokemonsPaginatedReturnType {
  pokemons: IPokemon[]
  totalPokemons: number
}

export default async function fetchPokemonsPaginated (limit: number, offset: number): Promise<PokemonsPaginatedReturnType> {
  const res = (await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)).data
  return {
    pokemons: res.results,
    totalPokemons: res.count
  }
}
