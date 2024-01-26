import { type PokemonAPI } from '../models/Pokemon'
import PokeImage from './PokeImage'
import PokeDetails from './PokeDetails'
import { type ReactElement } from 'react'

interface PokeCardProps {
  pokemonObj: PokemonAPI
  route: string
  // children: JSX.Element // React.ReactNode
}

export const PokeCard = ({ pokemonObj, route }: PokeCardProps): ReactElement => {
  // console.log(children.props.children); // This how we can access the children within the props.
  return <>
    <div>
      {
        route === 'PokeImage'
          ? <PokeImage id={pokemonObj.id} name={pokemonObj.name} />
          : <PokeDetails pokemon={pokemonObj} />
      }
    </div>
  </>
}
