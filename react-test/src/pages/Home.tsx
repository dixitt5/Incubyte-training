import { useEffect, useState } from 'react'
import { PokeCard } from '../components/Card'
import { type PokemonApi } from '../types/Pokemon'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { fetchPokemons } from '../PokeApi'

interface RouterProps {
  setRoute: (route: string) => void
}

function App ({ setRoute }: Readonly<RouterProps>): JSX.Element {
  const [index, setIndex] = useState<number>(0)
  const [pokemons, setPokemons] = useState<PokemonApi[]>([])
  const [isloading, setIsloading] = useState<boolean>(true)

  const getPokemons = async (): Promise<void> => {
    const result = await fetchPokemons()
    setPokemons(result)
    setIsloading(false)
  }

  useEffect(() => {
    void getPokemons()
  }, [])

  const changePokemon = (goForward: boolean): void => {
    if (goForward) {
      if (index === pokemons.length - 1) {
        alert('This was the last pokemon')
      } else {
        setIndex(index + 1)
      }
    } else if (index === 0) {
      alert('This was the first pokemon')
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <>
      {
      isloading
        // eslint-disable-next-line multiline-ternary
        ? (
        <div className="d-flex flex-column h-100 my-auto justify-content-center align-items-center">
            <div
              className="spinner-border text-primary me-2"
              role="output"
              aria-hidden="true"
            ></div>
            <h3 className="mb-0">Loading...</h3>
          </div>
          ) : (
        <div>
          <div className="container">
            <div className="row row-cols-5">
              {/* Adjust number of columns as needed */}
              {pokemons.map((pokemon) => (
                <div className="col" style={{ cursor: 'pointer' }} key={pokemon.id} onClick={ () => {
                  setRoute(`details/${pokemon.id}`)
                }}>
                  <PokeCard pokemon={pokemon} />
                </div>
              ))}
            </div>
          </div>
          {/* <PokeCard pokemon={pokemons[index]} /> */}
          <div className="d-flex justify-content-center mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
              {/* {index > 0 && ( */}
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  changePokemon(false)
                }}
              >
                Prev
              </button>
              {/* )} */}

              {/* {index < pokemons.length - 1 && ( */}
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  changePokemon(true)
                }}
              >
                Next
              </button>
              {/* )} */}
              <button>
                Change Route
              </button>
            </div>
          </div>
        </div>
          )}
    </>
  )
}

export default App
