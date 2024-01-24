import { type PokemonType } from '../interfaces/PokeType.ts'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const usePokemonApi = (limit: number): {
  pokemons: PokemonType[]
  isLoading: boolean
  error: any
} => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  const fetchPokemonData = async (): Promise<PokemonType[]> => {
    return (await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)).data?.results
  }

  useEffect(() => {
    void fetchPokemonData().then((data: PokemonType[]) => {
      setPokemons(data)
      setIsLoading(false)
      setError(null)
    }).catch((error: any) => {
      setPokemons([])
      setIsLoading(false)
      setError(error)
    })
  }, [])

  return { pokemons, isLoading, error }
}
