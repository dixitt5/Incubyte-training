import axios from 'axios'
import { type PokemonAPI } from '../models/Pokemon'
import { useEffect, useState } from 'react'

export const getPokemons = (limit: number, offset: number): { pokemons: PokemonAPI[], isLoading: boolean, error: any } => {
  const [pokemons, setPokemons] = useState<PokemonAPI[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`).then((response) => {
      const pokes: PokemonAPI[] = response.data.results.map((poke: PokemonAPI, index: number) => ({ ...poke, id: (offset + index + 1) }))
      setPokemons(pokes)
      setIsLoading(false)
    }).catch((error) => {
      setError(error)
      setIsLoading(false)
    })
  }, [])

  return { pokemons, isLoading, error }
}
