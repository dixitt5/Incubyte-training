export interface IPokemon {
    name : string,
    type : PokeType,
    height : number,
    weight : number,
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