import React, {ReactElement, useEffect, useState} from "react";
import axios from "axios";

interface  PokeDetailsProps {
    name: string,
    id: number,
    // generation: string,
}

export async function getDetails(url: string) {
    console.log((await axios.get(url)).data)
    const data = (await axios.get(url)).data;
    return  {name: data.name, id: data.id,} as PokeDetailsProps
}
export function PokeDetails( {url, id, name} : { url: string, id: number, name : string }): ReactElement {
    const [pokemonDetails, setPokemonDetails] = useState<PokeDetailsProps>();
    useEffect(() => {
        getDetails(url).then((details) => {
            // console.log(details)
            setPokemonDetails(details)
        } )
    }, []);
    console.log(pokemonDetails)
    return (

        <>
            <div className="card bg-light p-3">
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`}
                        alt={name} width={200}/>
                </div>
                <div className="text-center">{name}</div>
                {/*<div className="text-center">{pokemonDetails?.generation}</div>*/}
            </div>
        </>
    )

}
