import { type ReactElement, useEffect, useState } from 'react'
import { type PokemonType } from '../types/PokeEnum.ts'
import axios from 'axios'
import PokeCard from '../components/PokeCard.tsx'
import { PokeDetails } from '../components/PokeDetails.tsx'

export const Home = (): ReactElement => {
  const [pokemonData, setPokemonData] = useState<PokemonType[]>([])
  const [router, setRouter] = useState<string>('home')

  const fetchPokemonData = async (): Promise<PokemonType[]> => {
    return (await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')).data?.results
  }

  useEffect(() => {
    void fetchPokemonData().then((data: PokemonType[]) => {
      setPokemonData(data)
    })
  }, [])
  return (
        <div>
          {pokemonData.length <= 0
            ? <>Loading</>
            : router === 'home'
              ? <div className="d-flex flex-wrap">
                {pokemonData.map((pokemon: PokemonType, index: number) => (
                    <PokeCard key={index} setRouter={setRouter} pokemon={{ ...pokemon, id: index + 1 }}/>))}
              </div>
              : router.startsWith('pokemon/') ? <PokeDetails id = {parseInt(router.split('/')[1])} /> : <div>About</div>
          }
        </div>
  )
}
