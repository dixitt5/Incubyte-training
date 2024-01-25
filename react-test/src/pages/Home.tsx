import { type MouseEventHandler, useEffect, useState } from 'react'
import { PokeCard } from '../components/Header'
import { type Pokemon } from '../types/Pokemon'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { fetchPokemons } from '../fakeApi'
import { PokemonDetails } from './PokemonDetails'

function Home (): JSX.Element {
  const [index, setIndex] = useState<number>(0)
  const [pokemons, setPokemon] = useState<Pokemon[]>([])
  const [isloading, setLoading] = useState<boolean>(true)
  const [home, setHome] = useState<string>('Home')

  const callbackInvoke = async (): Promise<void> => {
    const result = await fetchPokemons()
    setPokemon(result)
    setLoading(false)
  }
  useEffect(() => {
    void callbackInvoke().then()
  }, [])

  const changePokemon = (goForward: boolean): MouseEventHandler | void => {
    if (goForward) {
      if (index === pokemons.length - 1) {
        alert('This was the last pokemon')
      } else {
        setIndex(index + 1)
      }
    } else {
      if (index === 0) {
        alert('This was the first pokemon')
      } else {
        setIndex(index - 1)
      }
    }
  }

  return (
        <>
            {
                // eslint-disable-next-line multiline-ternary
                home !== 'Home' ? (
                <PokemonDetails/>
                ) : (
                <div>
                    {/* eslint-disable-next-line multiline-ternary */}
                    {isloading ? (
                              <div className="d-flex flex-column h-100 my-auto justify-content-center align-items-center">
                            <div
                                className="spinner-border text-primary me-2"
                                role="status"
                                aria-hidden="true"
                            ></div>
                            <h3 className="mb-0">Loading...</h3>
                        </div>
                    ) : (
                        <div>
                            <PokeCard pokemon={pokemons[index]}/>

                            <div className="d-flex justify-content-center mb-3">
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example"
                                >
                                    {/* {index > 0 && ( */}
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        onClick={() => changePokemon(false)}
                                    >
                                        Prev
                                    </button>

                                    {/* )} */}

                                    {/* {index < pokemons.length - 1 && ( */}
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        onClick={() => changePokemon(true)}
                                    >
                                        Next
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        onClick={() => {
                                          setHome('About')
                                        }}
                                    >
                                        Details
                                    </button>
                                    {/* )} */}
                                </div>
                            </div>
                        </div>

                    )}
                </div>

                )}
        </>
  )
}

export default Home
