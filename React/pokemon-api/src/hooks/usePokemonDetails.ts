import { type PokeType } from '../interfaces/PokeType.ts'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const usePokemonDetails = (id: number): {
  pokemon: PokeType
  isLoading: boolean
  error: any
} => {
  const [pokemon, setPokemon] = useState<PokeType>({
    url: '',
    weight: 0,
    height: 0,
    name: '',
    abilities: []
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  async function fetchPokemonDetails (): Promise<PokeType> {
    return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
  }
  useEffect(() => {
    void fetchPokemonDetails().then((data: PokeType) => {
      setPokemon(data)
      setIsLoading(false)
      setError(null)
    }).catch((error: any) => {
      setPokemon({
        url: '',
        weight: 0,
        height: 0,
        name: '',
        abilities: []
      })
      setIsLoading(false)
      setError(error)
    })
  }, [])

  return { pokemon, isLoading, error }
}
