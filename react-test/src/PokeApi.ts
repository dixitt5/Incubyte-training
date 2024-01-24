import axios from 'axios'
import { type PokemonDetailsApi, type PokemonApi } from './types/Pokemon'

// const pokemons: Pokemon[] = [
//   {
//     id: 1,
//     name: 'Pikachu',
//     width: 20,
//     height: 20,
//     types: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Rock]],
//     URL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
//   },
//   {
//     id: 2,
//     name: 'Bulbasour',
//     width: 20,
//     height: 20,
//     types: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Other]],
//     URL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
//   },
//   {
//     id: 3,
//     name: 'Snorlax',
//     width: 20,
//     height: 20,
//     types: [PokemonType[PokemonType.Water]],
//     URL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
//   }
// ]

export const fetchPokemons = async (): Promise<PokemonApi[]> => {
  const result = (await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')).data.results
  return result.map((p: PokemonApi, index: number) => ({ ...p, id: index + 1 }))
}

export const fetchPokemonDetails = async (id: number): Promise<PokemonDetailsApi> => {
  const result = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
  const pokemonObject = {
    name: result.name,
    url: result.url,
    id: result.id,
    baseExperience: result.base_experience,
    height: result.height,
    weight: result.weight
  }
  return pokemonObject
}
