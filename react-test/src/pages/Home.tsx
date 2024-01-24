import React, {ReactElement, useEffect, useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {fetchPokemons} from './api'
import {type IPokemon} from '../models/Pokemon'
import {PokeCard} from "../components/PokeCard";

function Home(): ReactElement {
    const [index, setIndex] = useState<number>(0)
    const [pokemons, setPokemons] = useState<IPokemon[]>([])

    async function effectCallBack(): Promise<void> {
        const response: IPokemon[] = await fetchPokemons()

        setPokemons(response)
        console.log(pokemons)
    }

    useEffect(() => {
        void effectCallBack()
    }, [])


    return (
        <>
            <div className="container">
                <div className="row">
                    {pokemons.length > 0 ? (
                        pokemons.map((pokemon: IPokemon) => (
                            <div className="col-md-5 mb-3">
                                <PokeCard key={pokemon.id} pokemonObj={pokemon} />
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home
