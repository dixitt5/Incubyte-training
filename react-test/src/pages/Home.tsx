import React from "react";
import { PokeCard } from "../components/PokeCard";
import { IPokemon, PokeType } from "../models/Pokemon";
import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const [index, setIndex] = useState<number>(0);

  const getNextPokemon = () => {
    setIndex(index + 1);
  }
  const getPreviousPokemon = () => {
    setIndex(index - 1);
  }
  const pokemon: IPokemon[] = [
    {
      name: "charizard",
      height: 123,
      weight: 232,
      type:[ PokeType.fire, PokeType.other],
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      id: 12
    },
    {
      name: "bulbasor",
      height: 13,
      weight: 322,
      type:[ PokeType.poison, PokeType.grass, PokeType.other],
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      id: 13
    },
    {
      name: "pikachu",
      height: 123,
      weight: 232,
      type:[ PokeType.land, PokeType.other],
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      id: 14
    },
    ]
    return (
      <>
       <PokeCard pokemonObj ={pokemon[index]} />
      <div className="d-flex justify-content-center mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          {/* {index > 0 && ( */}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => getPreviousPokemon()}
          >
            Prev
          </button>
          {/* )} */}

          {/* {index < pokemons.length - 1 && ( */}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => getNextPokemon()}
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


