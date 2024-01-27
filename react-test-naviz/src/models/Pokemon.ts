export interface IPokemon {
  id: number
  name: string
  url: string
}

export interface IPokemonDetails {
  id: number
  name: string
}

export enum PokeType {
  water,
  land,
  fire,
  other,
  rock,
}
