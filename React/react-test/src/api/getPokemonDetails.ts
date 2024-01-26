import { useEffect, useState } from 'react'
import { type PokemonDetailsAPI } from '../models/Pokemon'
import axios from 'axios'

export const getPokemonDetails = (id: number): {
  pokemonDetails: PokemonDetailsAPI
  isLoading: boolean
  error: any
} => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsAPI>({
    id: 0,
    name: 'default value',
    imageUrl: '',
    baseExperience: 0,
    height: 0,
    weight: 0,
    abilities: []
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      const result = response.data
      const abilities: string[] = result.abilities.map((ab: any) => ab.ability.name)
      const pokemonObject: PokemonDetailsAPI = {
        id: result.id,
        name: result.name,
        imageUrl: result.url,
        baseExperience: result.base_experience,
        height: result.height,
        weight: result.weight,
        abilities
      }
      setPokemonDetails(pokemonObject)
      setIsLoading(false)
    }).catch((error) => {
      setError(error)
      setIsLoading(false)
    })
  }, [])

  return { pokemonDetails, isLoading, error }
}
