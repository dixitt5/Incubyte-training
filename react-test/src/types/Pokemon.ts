export interface Pokemon {
  id: number
  name: string
  types: PokemonType[] | string[]
  height: number
  width: number
  URL: string
}

export enum PokemonType {
  Water,
  Fire,
  Rock,
  Other,
}
