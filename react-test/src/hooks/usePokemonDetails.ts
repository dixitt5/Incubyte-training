import axios from 'axios'
import { useState } from 'react'
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

  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
    const result = response.data
    const abilities: string[] = result.abilities.map((ab: any) => ab.ability.name)
    const pokemonObject = {
      name: result.name,
      url: result.url,
      id: result.id,
      baseExperience: result.base_experience,
      height: result.height,
      weight: result.weight,
      abilities
    }
    setPokemonDetails(pokemonObject)
    setIsLoading(false)
  }).catch(error => {
    setError(error)
    setIsLoading(false)
  })

  return { pokemonDetails, isLoading, error }
}
