import React from "react";
import { PokeCard } from "../components/PokeCard";
import { IPokemon, PokeType } from "../models/Pokemon";


function Home() {
  const pokemon : IPokemon = {
    name: "charizard",
    height: 123,
    weight: 232,
    type: PokeType.fire,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    id : 12
  }
  return (
     <PokeCard pokemonObj={pokemon} />
  );
}

export default Home;
