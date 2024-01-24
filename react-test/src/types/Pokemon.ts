export interface Pokemon {
  id: number
  name: string
  types: PokemonType[] | string[]
  height: number
  width: number
  URL: string
};

export interface PokemonApi {
  name: string
  url: string
  id: number
}

export interface PokemonDetailsApi extends PokemonApi {
  baseExperience: number
  height: number
  weight: number
  abilities: string[]
}

export enum PokemonType {
  Water,
  Fire,
  Rock,
  Other,
}
