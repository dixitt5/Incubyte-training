
import React from "react"
import { IPokemon } from "../models/Pokemon"

interface PokeCardProps {
    pokemonObj: IPokemon
}

export const PokeCard = (props: PokeCardProps) => {
    return <>
        <div>
            <img width={200} src={props.pokemonObj.imageUrl} alt={props.pokemonObj.name} /><br />
            <span>ID: {props.pokemonObj.id}</span><br />
            <span>Name: {props.pokemonObj.name}</span><br />
            <span>Type: {props.pokemonObj.type}</span><br />
            <span>Height: {props.pokemonObj.height}</span><br />
            <span>Weight: {props.pokemonObj.weight}</span><br />
        </div>
    </>
}