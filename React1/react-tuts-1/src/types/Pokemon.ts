export interface Pokemon {
    name: string;
    type: PokemonType;
    height: number;
    weight: number;
}

export const enum PokemonType {
    Grass = 'Grass',
    Water = 'Water',
    Fire = 'Fire',
    Other = 'Other'
}