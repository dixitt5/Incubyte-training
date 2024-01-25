import { type Pokemon } from '../types/Pokemon'
import { type ReactElement } from 'react'

interface PokemonDetailsProps {
  pokemon: Pokemon
}

export function PokemonDetails (props: PokemonDetailsProps): ReactElement {
  return (
        <>
            <div>{props.pokemon.name}</div>
            <div>{props.pokemon.height}</div>
        </>
  )
}
