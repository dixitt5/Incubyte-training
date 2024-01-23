import React from "react";
import { PokeCard } from "../components/PokeCard";
import { IPokemon, PokeType } from "../models/Pokemon";
import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const [index, setIndex] = useState<number>(383);

  const getNextPokemon = () => {
    setIndex(index + 1);
  }
  const getPreviousPokemon = () => {
    setIndex(index - 1);
  }
  const pokemon: IPokemon = {
    id: index,
    name: "charizard",
    height: 123,
    weight: 232,
    type: PokeType.fire,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + index + ".png"
  }

  return (
    <>
      <div className="container">
        <PokeCard pokemonObj={pokemon} />
        <button className="btn btn-primary" style={{ margin: 5 }} onClick={getPreviousPokemon} disabled={index === 0}>Previous</button>
        <button className="btn btn-primary" style={{ margin: 5 }} onClick={getNextPokemon} disabled={index === 400}>Next</button>
      </div>

    </>
  );

}

export default Home;


