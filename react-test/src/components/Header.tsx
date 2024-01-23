import { Pokemon } from "../types/Pokemon";

export type PokemonProps = {
    pokemon : Pokemon,
}


export function Header(pokemon : PokemonProps) {
  return (
    <div>
      <h1>
        Hello {pokemon.pokemon.name} <br></br>
        with type {pokemon.pokemon.type}
      </h1>
    </div>
  );
}
