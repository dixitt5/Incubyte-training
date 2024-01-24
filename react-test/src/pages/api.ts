import { IPokemon, PokeType } from "../models/Pokemon";

const pokemons: IPokemon[] = [
    {
      id: 1,
      name: "Pikachu",
      weight: 20,
      height: 20,
      type: [PokeType[PokeType.fire], PokeType[PokeType.rock]],
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "Bulbasour",
      weight: 20,
      height: 20,
      type: [PokeType[PokeType.fire], PokeType[PokeType.other]],
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      id: 3,
      name: "Snorlax",
      weight: 20,
      height: 20,
      type: [PokeType[PokeType.water]],
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    },
  ];

export const fetchPokemons = async () : Promise<IPokemon[]> => {
    return new Promise((resolve) => {
         resolve(pokemons);
    });
}