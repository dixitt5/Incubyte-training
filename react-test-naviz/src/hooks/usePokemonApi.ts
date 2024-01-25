import { useEffect, useState } from 'react'
import { fetchPokemons } from '../pages/api'
import { type IPokemon } from '../models/Pokemon'

export function usePokemonApi (): {
  pokemons: IPokemon[]
  isLoading: boolean
  error: any
} {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    fetchPokemons()
      .then((pokemons) => {
        const modifiedPokemons = pokemons.map((pokemon: IPokemon, index: number) => {
          return {
            ...pokemon,
            id: index + 1
          }
        })

        setPokemons(modifiedPokemons)
        setIsLoading(false)
        setError(null)
      }).catch((err) => {
        setPokemons([])
        setIsLoading(false)
        setError(err)
      })
  }, [])
  return { pokemons, isLoading, error }
}
