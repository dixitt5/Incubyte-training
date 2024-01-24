import { type PokemonType } from '../enums/Pokemon_enum'

export interface Pokemon {
  id: number
  name: string
  type: PokemonType[]
  height: number
  weight: number
}
