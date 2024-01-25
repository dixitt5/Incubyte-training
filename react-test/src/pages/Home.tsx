import React, {ReactElement, useEffect, useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {fetchPokemons} from './api'
import {type IPokemon} from '../models/Pokemon'
import {PokeCard} from "../components/PokeCard";
import {PokeDetails} from "../components/PokeDetails";
import {usePokemonApi} from "../hooks/usePokemonApi";

function Home(): ReactElement {
    const [index, setIndex] = useState<number>(0)
    // const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [route, setRoute] = useState<string>('home');



    const {pokemons, isLoading, error} =  usePokemonApi();
    const currId =(+route.split("/")[1]);

    return (
        <>
        {isLoading ?
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

            :
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

                    </div> :
                    <PokeDetails url={pokemons[currId].url} id={pokemons[currId].id} name={pokemons[currId].name}/>}
            </div>
        }
        </>
    )
}

export default Home
