import { type ReactElement } from 'react'
import { type PokemonType } from '../interfaces/PokeType.ts'
import PokeCard from '../components/PokeCard.tsx'
import { usePokemonApi } from '../hooks/usePokemonApi.ts'

export const Home = (): ReactElement => {
  // const { isDarkTheme } = useContext(ThemeContext)
  const { pokemons, isLoading, error } = usePokemonApi(12)

  if (error != null) {
    return <div>{error}</div>
  }

  return (
        <div>
          {isLoading
            ? <div className="spinner-border text-primary" role="status">
              </div>
            : <div className="d-flex flex-wrap">
                {pokemons.map((pokemon: PokemonType, index: number) => (
                    <PokeCard key={index} pokemon={{ ...pokemon, id: index + 1 }}/>))}
              </div>
          }
        </div>
  )
}
