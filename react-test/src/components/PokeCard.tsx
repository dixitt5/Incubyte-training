
import React from "react"
import { IPokemon } from "../models/Pokemon"

interface PokeCardProps {
    pokemonObj : IPokemon
    setRoute: (route: string) => void
}

export const PokeCard = (props: PokeCardProps) => {
    return <>
        {<div onClick={() => {
            props.setRoute(`about/${props.pokemonObj.id}`)
        }}>
            <div className="card bg-light p-3">
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonObj.id}.png`}
                        alt={props.pokemonObj.name} width={200}/>
                </div>
                <div className="text-center">{props.pokemonObj.name}</div>
            </div>

        </div>}
        </>
}
