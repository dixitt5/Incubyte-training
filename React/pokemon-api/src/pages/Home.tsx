import { type ReactElement, useState } from 'react'
import { type PokemonType } from '../interfaces/PokeType.ts'
import PokeCard from '../components/PokeCard.tsx'
import { PokeDetails } from '../components/PokeDetails.tsx'
import { usePokemonApi } from '../hooks/usePokemonApi.ts'

export const Home = (): ReactElement => {
  const [router, setRouter] = useState<string>('home')
  const { pokemons, isLoading, error } = usePokemonApi(10)

  if (error != null) {
    return <div>{error}</div>
  }

  return (
        <div>
          {isLoading
            ? <>Loading</>
            : router === 'home'
              ? <div className="d-flex flex-wrap">
                {pokemons.map((pokemon: PokemonType, index: number) => (
                    <PokeCard key={index} setRouter={setRouter} pokemon={{ ...pokemon, id: index + 1 }}/>))}
              </div>
              : router.startsWith('pokemon/') ? <PokeDetails id = {parseInt(router.split('/')[1])} /> : <div>About</div>
          }
        </div>
  )
}
