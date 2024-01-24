import { PokemonType } from '../enums/Pokemon_enum'
import { type Pokemon } from '../types/Pokemon'

export const pokemonList: Pokemon[] = [
  {
    id: 1,
    name: 'Pikachu',
    type: [PokemonType.Other],
    height: 20,
    weight: 25
  },
  {
    id: 2,
    name: 'Pikachu',
    type: [PokemonType.Fire, PokemonType.Grass],
    height: 20,
    weight: 25
  },
  {
    id: 3,
    name: 'Pikachu',
    type: [PokemonType.Rock, PokemonType.Fire],
    height: 20,
    weight: 25
  },
  {
    id: 4,
    name: 'Pikachu',
    type: [PokemonType.Water],
    height: 20,
    weight: 25
  }
]
