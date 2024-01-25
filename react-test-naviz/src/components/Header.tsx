import React from "react";
import { IPokemon } from "../models/Pokemon";


export type PokemonProps = {
  pokemon: IPokemon;
};

export function Header({ pokemon }: PokemonProps) {
  const {id,url, name} = pokemon;
  return (
    <div className="card my-4 mx-auto shadow-md">
      <div className="card-body text-center py-5">
        <img className="img-fluid mx-auto d-block mb-4" src={url} alt={name} />
        <h2> <span>#{id} </span>{name}</h2>

      </div>
    </div>
  );
}
