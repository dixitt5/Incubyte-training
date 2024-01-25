import { type Pokemon } from '../types/Pokemon'

interface PokemonCardProps {
  pokemon: Pokemon
  setRoute: (route: string) => void

}

export function PokemanCard (props: PokemonCardProps): JSX.Element {
  return (
        <><div>{props.pokemon.name}</div>
        <button onClick={() => { props.setRoute('about') }}> Details </button>
        </>
  )
}
