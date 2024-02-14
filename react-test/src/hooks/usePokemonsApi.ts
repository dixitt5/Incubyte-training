import { useEffect, useState } from 'react'
import { type PokemonApi } from '../types/Pokemon'
import axios from 'axios'

export const usePokemonsApi = (): {
  pokemons: PokemonApi[]
  isLoading: boolean
  error: any
} => {
  const [pokemons, setPokemons] = useState<PokemonApi[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    axios.get('http://localhost:8080/pokemon').then((response) => {
      const pokes: PokemonApi[] = response.data.map((p: PokemonApi, index: number) => ({ ...p, id: index + 1 }))
      setPokemons(pokes)
      setIsLoading(false)
    }).catch((err) => {
      setError(err)
    })
  }, [])

  return { pokemons, isLoading, error }
}
