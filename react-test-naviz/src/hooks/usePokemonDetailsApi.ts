import { useEffect, useState } from 'react'
import searchPokemon from '../api/searchPokemon'
import { type IPokemonDetails } from '../models/Pokemon'
import { useNavigate } from 'react-router-dom'

interface PokemonDetailsApiReturnType {
  pokemon: IPokemonDetails
  isLoading: boolean
  error: any
}

interface PokemonDetailsApiProps {
  id?: string | undefined
  name?: string | undefined
}

export function usePokemonDetailsApi (props: PokemonDetailsApiProps): PokemonDetailsApiReturnType {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState<IPokemonDetails>({
    id: 0,
    name: ''
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    if (props.id !== undefined && isNaN(Number(props.id))) {
      navigate('/error')
    }
    const searchParameter = props.id ?? props.name
    searchPokemon(searchParameter)
      .then((pokemon) => {
        const modifiedPokemon: IPokemonDetails = {
          id: pokemon.id,
          name: pokemon.name
        }
        setPokemon(modifiedPokemon)
        setIsLoading(false)
        setError(null)
      })
      .catch((err: Error) => {
        setPokemon({
          id: 0,
          name: ''
        })
        setIsLoading(false)
        setError(err)
      })
  }, [])

  return {
    pokemon,
    isLoading,
    error
  }
}
