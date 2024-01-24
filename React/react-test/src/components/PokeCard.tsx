
import React from "react"
import { IPokemon } from "../models/Pokemon"
import PokeImage from "./PokeImage";
import PokeDetails from "./PokeDetails";

interface PokeCardProps {
    pokemonObj: IPokemon;
    route: string
    // children: JSX.Element // React.ReactNode
}

export const PokeCard = ({ pokemonObj, route }: PokeCardProps) => {
    // console.log(children.props.children); // This how we can access the children within the props.
    return <>
        <div>
            {
                route === "PokeImage"
                    ? <PokeImage url={pokemonObj.imageUrl} name={pokemonObj.name} />
                    : <PokeDetails pokemon={pokemonObj} />
            }
        </div>
    </>
}