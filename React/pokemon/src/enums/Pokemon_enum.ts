export const enum PokemonType {
  Grass = 'Grass',
  Fire = 'Fire',
  Water = 'Water',
  Rock = 'Rock',
  Other = 'Other'
}

export const colorList = {
  [PokemonType.Grass]: 'bg-success',
  [PokemonType.Fire]: 'bg-warning',
  [PokemonType.Water]: 'bg-info',
  [PokemonType.Rock]: 'bg-secondary',
  [PokemonType.Other]: 'bg-danger'
}
