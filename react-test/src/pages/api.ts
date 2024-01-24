import { IPokemon, PokeType } from "../models/Pokemon";

const pokemons: IPokemon[] = [
    {
      id: 1,
      name: "Pikachu",
      weight: 20,
      height: 20,
      type: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Rock]],
      URL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "Bulbasour",
      weight: 20,
      height: 20,
      type: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Other]],
      URL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      id: 3,
      name: "Snorlax",
      weight: 20,
      height: 20,
      type: [PokemonType[PokemonType.Water]],
      URL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    },
  ];

export const fetchPokemons = async () : Promise<Pokemon[]> => {
    return new Promise((resolve) => {
         resolve(pokemons);
    });
}