import { MouseEventHandler, useEffect, useState } from "react";
import { PokeCard } from "../components/Header";
import { Pokemon } from "../types/Pokemon";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { fetchPokemons } from "./api";

function App() {
  const [index, setIndex] = useState<number>(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const effectCallBack = async () => { 
    const response: Pokemon[] = await fetchPokemons();
    setPokemons(response);
  }

  useEffect(() => {
    effectCallBack();
  }, []);

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
      {pokemons.length > 0 ? <PokeCard pokemon={pokemons[index]}/> : <div>Loading</div>}
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

export default Home;
