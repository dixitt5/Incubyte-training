import React, {ReactElement, useEffect, useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {fetchPokemons} from './api'
import {type IPokemon} from '../models/Pokemon'
import {PokeCard} from "../components/PokeCard";
import {PokeDetails} from "../components/PokeDetails";

function Home(): ReactElement {
    const [index, setIndex] = useState<number>(0)
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [route, setRoute] = useState<string>('home');

    async function effectCallBack(): Promise<void> {
        const response: IPokemon[] = await fetchPokemons()

        setPokemons(response)
        console.log(pokemons)
    }

    useEffect(() => {
        void effectCallBack()
    }, [])

    const currId =(+route.split("/")[1]);
    return (
        <div className="d-flex justify-content-center">

            {route == 'home' ? <div className="container">
                <div className="row">
                    {pokemons.length > 0 ? (
                        pokemons.map((pokemon: IPokemon) => (
                            <div className="col mb-5">
                                <PokeCard setRoute={setRoute} key={pokemon.id} pokemonObj={pokemon}/>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>

            </div> :  <PokeDetails url ={pokemons[currId].url} />}
        </div>
    )
}

export default Home
