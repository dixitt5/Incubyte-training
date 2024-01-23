export type Pokemon = {
  name: string;
  type: PokemonType;
  height: number;
  width: number;
};

export enum PokemonType {
  Grass,
  Water,
  Fire,
  Rock,
  Other,
}
