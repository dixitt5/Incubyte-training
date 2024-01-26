export interface Pokemon {
  id: number
  name: string
  type: PokeType
  height: number
  weight: number
  imageUrl: string
}

export enum PokeType {
  water,
  land,
  fire,
  other,
  rock,
}

export interface PokemonAPI {
  id: number
  name: string
  imageUrl: string
}

export interface PokemonDetailsAPI extends PokemonAPI {
  baseExperience: number
  height: number
  weight: number
  abilities: string[]
}
