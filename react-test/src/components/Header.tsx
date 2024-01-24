import React from "react";
import { IPokemon } from "../models/Pokemon";


export type PokemonProps = {
  pokemon: IPokemon;
};

export function PokeCard({ pokemon }: PokemonProps) {
  const {id,imageUrl, name,type, height, weight} = pokemon;
  return (
    <div className="card my-4 mx-auto shadow-md">
      <div className="card-body text-center py-5">
        <img className="img-fluid mx-auto d-block mb-4" src={imageUrl} alt={name} />
        <h2> <span>#{id} </span>{name}</h2>
        <p className="text-muted mb-3">{type.toString()}</p>
        <p className="mb-0">
          Dimension: {height} x {weight}
        </p>
      </div>
    </div>
  );
}
