export interface IPokemon {
    name : string,
    type : PokeType |string,
    height : number,
    weight : number,
    imageUrl: string,
    id: number,
}

export enum PokeType {
    water,
    land,
    fire,
    grass,
    other,
    poison,
    rock,
}

export const PokeTypeNames = {
    [PokeType.water]: "Water",
    [PokeType.land]: "Land",
    [PokeType.fire]: "Fire",
    [PokeType.grass]: "Grass",
    [PokeType.other]: "Other",
    [PokeType.poison]: "Poison",
    [PokeType.rock]: "Rock",
}