import Header from '../components/Header';
import { PokemanCard } from '../components/PokemonCard';
import { Pokemon, PokemonType } from '../types/Pokemon';

const newPokemon: Pokemon = {
  name: "Pikachu",
  type: PokemonType.Other,
  weight: 25,
  height: 25
}

function HomePage() {
  const user = { name: "manish" };
  return (
    <div>
      <Header />
      Hello World {user.name}
      <PokemanCard pokemon={newPokemon} />
    </div>
  )
}

export default HomePage