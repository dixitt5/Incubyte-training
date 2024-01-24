import { type ReactElement } from 'react'
import { type PokemonApi } from '../types/Pokemon'

export interface PokemonProps {
  pokemon: PokemonApi
};

function capitalisedName (name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function PokeCard ({ pokemon }: Readonly<PokemonProps>): ReactElement {
  const { id, url, name } = pokemon
  return (
    <div className="card my-4 mx-auto shadow-md">
      <div className="card-body text-center py-5">
        <img className="img-fluid mx-auto d-block mb-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
        <a href={url} target='_blank' rel='noreferrer'><h2> <span>#{id} </span>{capitalisedName(name)}</h2></a>

        {/* <p className="text-muted mb-3">{types.toString()}</p> */}
        <p className="mb-0">
          {/* Dimension: {height} x {width} */}
        </p>
      </div>
    </div>
  )
}
