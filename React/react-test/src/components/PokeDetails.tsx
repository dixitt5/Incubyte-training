import React from 'react'
import { IPokemon, PokeType } from '../models/Pokemon';

interface PokeDetailsProps {
    pokemon: IPokemon;
}

const PokeDetails = ({ pokemon }: PokeDetailsProps) => {
    const { id, name, type, height, weight } = pokemon;
    return (
        <>
            <span>ID: {id}</span><br />
            <span>Name: {name}</span><br />
            <span>Type: {type}</span><br />
            <span>Height: {height}</span><br />
            <span>Weight: {weight}</span><br />
        </>
    )
}

export default PokeDetails
