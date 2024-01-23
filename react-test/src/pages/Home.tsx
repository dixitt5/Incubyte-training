import { MouseEventHandler, useState } from "react";
import { PokeCard } from "../components/Header";
import { Pokemon, PokemonType } from "../types/Pokemon";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [index, setIndex] = useState<number>(0);

  const pokemons: Pokemon[] = [
    {
      id: 1,
      name: "Pikachu",
      width: 20,
      height: 20,
      types: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Rock]],
      URL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "Bulbasour",
      width: 20,
      height: 20,
      types: [PokemonType[PokemonType.Fire], PokemonType[PokemonType.Other]],
      URL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      id: 3,
      name: "Snorlax",
      width: 20,
      height: 20,
      types: [PokemonType[PokemonType.Water]],
      URL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    },
  ];

  const changePokemon = (goForward: boolean): MouseEventHandler | void => {
    if (goForward) {
      if (index === pokemons.length - 1) {
        alert("This was the last pokemon");
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        alert("This was the first pokemon");
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    <>
      <PokeCard pokemon={pokemons[index]} />
      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          {/* {index > 0 && ( */}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => changePokemon(false)}
          >
            Prev
          </button>
          {/* )} */}

          {/* {index < pokemons.length - 1 && ( */}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => changePokemon(true)}
          >
            Next
          </button>
          {/* )} */}
        </div>
      </div>
    </>
  );
}

export default App;
