import { type ReactElement, useState } from 'react'
import HomePage from './HomePage'
import { PokemonDetails } from './PokemonDetails'
import { PokemonType, type Pokemon } from '../types/Pokemon'

const newPokemon: Pokemon = {
  name: 'Pikachu',
  type: PokemonType.Other,
  weight: 25,
  height: 25
}

export default function CustomRouter (): ReactElement {
  const [route, setRoute] = useState<string>('Home')
  return <>
        {route === 'Home' ? <HomePage setRoute={setRoute}/> : <PokemonDetails pokemon={newPokemon}/>}
    </>
}
