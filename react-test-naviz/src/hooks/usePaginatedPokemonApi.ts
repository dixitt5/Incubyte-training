import { useEffect, useState } from 'react'
import { type IPokemon } from '../models/Pokemon'
import fetchPokemonsPaginated from '../api/fetchPokemonsPaginated'

interface PaginatedPokemonApiReturnType {
  pokemons: IPokemon[]
  totalPokemons: number
  isLoading: boolean
  error: any
}

interface PaginatedPokemonApiProps {
  itemsPerPage: number
  firstItemIndex: number
  currentPage: number
}

export default function usePaginatedPokemonApi (props: PaginatedPokemonApiProps): PaginatedPokemonApiReturnType {
  const {
    itemsPerPage,
    firstItemIndex,
    currentPage
  } = props
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)
  const [totalPokemons, setTotalPokemons] = useState<number>(0)

  useEffect(() => {
    fetchPokemonsPaginated(itemsPerPage, firstItemIndex)
      .then((response) => {
        const modifiedPokemons = response.pokemons.map((pokemon: IPokemon, index: number) => {
          return {
            ...pokemon,
            id: firstItemIndex + index + 1
          }
        })

        setPokemons(modifiedPokemons)
        setIsLoading(false)
        setError(null)
        setTotalPokemons(response.totalPokemons)
      }).catch((err) => {
        setPokemons([])
        setIsLoading(false)
        setError(err)
        setTotalPokemons(0)
      })
  }, [currentPage])
  return {
    pokemons,
    totalPokemons,
    isLoading,
    error
  }
}
