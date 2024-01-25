import { type ReactElement } from 'react'
import { type IPokemon } from '../models/Pokemon'
import { PokeCard } from '../components/PokeCard'
import { usePokemonApi } from '../hooks/usePokemonApi'
import  "../index.css"

function Home (): ReactElement {
  const {
    pokemons,
    isLoading
  } = usePokemonApi()
  return (
        <>
            {isLoading
              ? <div className="flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

              : <div className="flex justify-center">

                    <div className="flex flex-wrap justify-center">

                            {pokemons.length > 0
                              ? (
                                  pokemons.map((pokemon: IPokemon) => (
                                        <div key={pokemon.id} className="col mb-5">
                                            <PokeCard pokemonObj={pokemon}/>
                                        </div>
                                  ))
                                )
                              : (

                                    <div>Loading...</div>
                                )}

                    </div>
                </div>
            }
        </>
  )
}

export default Home
