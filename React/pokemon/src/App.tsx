import { type ReactElement, useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'
import { pokemonList } from './data/PokeData'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { type Pokemon } from './types/Pokemon'
import { getPokemons } from './api'

function App (): ReactElement {
  const [index, setIndex] = useState<number>(0)
  const isFirstPokemon: boolean = index === 0
  const isLastPokemon: boolean = index === pokemonList.length - 1

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    getPokemons()
      .then((res: Pokemon[]) => {
        setPokemons(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handlePrevious = (): void => {
    if (index >= 0) {
      setIndex(index - 1)
    }
  }

  const handleNext = (): void => {
    if (index < pokemonList.length) {
      setIndex(index + 1)
    }
  }
  return (
        <>
            {pokemons.length > 0
              ? (
                    <div>
                        <PokeCard pokemon={pokemons[index]}/>
                        <div className="w-100 d-flex justify-content-center">
                            {!isFirstPokemon && (
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mx-4"
                                    style={{}}
                                    onClick={handlePrevious}
                                    disabled={isFirstPokemon}
                                >
                                    Previous
                                </button>
                            )}
                            {!isLastPokemon && (
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mx-4"
                                    onClick={handleNext}
                                    disabled={isLastPokemon}
                                    style={{ display: isLastPokemon ? 'none' : 'block' }}
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                )
              : (
                    <div>Loading</div>
                )}
        </>
  )
}

export default App
