import { type ReactElement } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { type IPokemon } from '../models/Pokemon'
import { PokeCard } from '../components/PokeCard'
import { usePokemonApi } from '../hooks/usePokemonApi'

function Home (): ReactElement {
  const {
    pokemons,
    isLoading
  } = usePokemonApi()
  return (
        <>
            {isLoading
              ? <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

              : <div className="d-flex justify-content-center">

                    <div className="container">
                        <div className="row">
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
                </div>
            }
        </>
  )
}

export default Home
