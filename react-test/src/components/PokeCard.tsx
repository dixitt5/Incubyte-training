
import React from "react"
import { IPokemon } from "../models/Pokemon"

interface PokeCardProps {
    pokemonObj : IPokemon
}

export const PokeCard = (props: PokeCardProps) => {
    return <>
        
            <div>
                <img src={props.pokemonObj.imageUrl} alt={props.pokemonObj.name} />
            </div>
           <div>{ props.pokemonObj.name}</div>
        
    </>
}