import Header from '../components/Header'
import { PokemanCard } from '../components/PokemonCard'
import { type Pokemon, PokemonType } from '../types/Pokemon'
import { type ReactElement } from 'react'

export const newPokemon: Pokemon = {
  name: 'Pikachu',
  type: PokemonType.Other,
  weight: 25,
  height: 25
}

function HomePage (): ReactElement {
  const user = { name: 'manish' }

  return (
    <div>
      <Header />
      Hello World {user.name}
      <PokemanCard pokemon={newPokemon} />

    </div>
  )
}

export default HomePage
