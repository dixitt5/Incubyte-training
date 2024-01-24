
import React from "react"
import { IPokemon } from "../models/Pokemon"

interface PokeCardProps {
    pokemonObj : IPokemon
}

export const PokeCard = (props: PokeCardProps) => {
    console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonObj.id}.png`)
    return <>
           <div className="card"> <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonObj.id}.png`} alt={props.pokemonObj.name} width={200}/>
            </div>
               <div>{props.pokemonObj.name}</div></div>

    </>
}
