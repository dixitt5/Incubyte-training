import { type Pokemon, PokemonType } from './types/Pokemon'

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: 'bublasaur',
    width: 20,
    height: 20,
    types: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Rock]],
    URL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  },
  {
    id: 2,
    name: 'Bulbasour',
    width: 20,
    height: 20,
    types: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Other]],
    URL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
  },
  {
    id: 3,
    name: 'Snorlax',
    width: 20,
    height: 20,
    types: [PokemonType[PokemonType.Water]],
    URL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
  }
]

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(pokemons)
    }, 1000)
  })
}
