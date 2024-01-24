import { Pokemon } from "../types/Pokemon";

export type PokemonProps = {
  pokemon: Pokemon;
};

export function PokeCard({ pokemon }: PokemonProps) {
  const {id,URL, name,types, height, width} = pokemon;
  return (
    <div className="card my-4 mx-auto shadow-md">
      <div className="card-body text-center py-5">
        <img className="img-fluid mx-auto d-block mb-4" src={URL} alt={name} />
        <h2> <span>#{id} </span>{name}</h2>
        <p className="text-muted mb-3">{types.toString()}</p>
        <p className="mb-0">
          Dimension: {height} x {width}
        </p>
      </div>
    </div>
  );
}
