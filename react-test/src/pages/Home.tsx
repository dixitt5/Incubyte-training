import React from "react";
import { PokeCard } from "../components/PokeCard";
import { IPokemon, PokeType } from "../models/Pokemon";

const [index, setIndex] = useState<number>(0);

const getNextPokemon = () => {
  useState(index + 1);
}
const getPreviousPokemon = () => {
  useState(index - 1);
}

function Home() {
  const pokemon: IPokemon[] = [
    {
      name: "charizard",
      height: 123,
      weight: 232,
      type: PokeType.fire,
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      id: 12
    },
    {
      name: "charizard",
      height: 123,
      weight: 232,
      type: PokeType.fire,
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      id: 13
    },
    {
      name: "charizard",
      height: 123,
      weight: 232,
      type: PokeType.fire,
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      id: 14
    },
    {
      name: "charizard",
      height: 123,
      weight: 232,
      type: PokeType.fire,
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      id: 15
    }]
  return <>(
    <PokeCard pokemonObj={pokemon} />
    <button onclick="getPreviousPokemon()">Prev</button>
    )</>;
}

export default Home;


