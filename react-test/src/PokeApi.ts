import axios from 'axios'
import { type PokemonDetailsApi, type PokemonApi } from './types/Pokemon'

export const fetchPokemons = async (): Promise<PokemonApi[]> => {
  const result = (await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')).data.results
  return result.map((p: PokemonApi, index: number) => ({ ...p, id: index + 1 }))
}

export const fetchPokemonDetails = async (id: number): Promise<PokemonDetailsApi> => {
  const result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
  const abilities: string[] = result.abilities.map((ab: any) => ab.ability.name)
  const pokemonObject = {
    name: result.name,
    url: result.url,
    id: result.id,
    baseExperience: result.base_experience,
    height: result.height,
    weight: result.weight,
    abilities
  }
  return pokemonObject
}
