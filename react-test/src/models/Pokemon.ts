export interface IPokemon {
    name: string,
    type: PokeType[] | string[],
    height: number,
    weight: number,
    imageUrl: string,
    id: number,
}

export enum PokeType {
    water,
    land,
    fire,
    other,
    rock,
}