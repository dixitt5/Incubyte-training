import axios from 'axios'
import { useEffect, useState } from 'react'
import { type PokemonDetailsApi } from '../types/Pokemon'

export const usePokemonDetails = (id: number): {
  pokemonDetails: PokemonDetailsApi
  isLoading: boolean
  error: any
} => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsApi>({
    name: '',
    url: '',
    id: 0,
    baseExperience: 0,
    height: 0,
    weight: 0,
    abilities: []
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      const result: PokemonDetailsApi = response.data
      setPokemonDetails(result)
      setIsLoading(false)
    }).catch(error => {
      setError(error)
      setIsLoading(false)
    })
  }, [])

  return { pokemonDetails, isLoading, error }
}
