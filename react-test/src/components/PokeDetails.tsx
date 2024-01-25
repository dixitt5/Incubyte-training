import React, { type ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

interface PokeDetailsProps {
  name: string
  height: number
  weight: number

}

export async function getDetails (url: string): Promise<PokeDetailsProps> {
  console.log((await axios.get(url)).data)
  const data = (await axios.get(url)).data
  return { name: data.name, height: data.height, weight: data.weight } satisfies PokeDetailsProps
}
export function PokeDetails (): ReactElement {
  const { id } = useParams()
  const [pokemonDetails, setPokemonDetails] = useState<PokeDetailsProps>()
  useEffect(() => {
    void getDetails(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((details) => {
      // console.log(details)
      setPokemonDetails(details)
    })
  }, [])
  return (
        <div className="flex justify-center">
            <div className="mx-8 py-12 rounded-md shadow-lg bg-amber-50 p-1 h-[500px] w-[400px] rounded-2xl">
                <div className="flex justify-center">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={pokemonDetails?.name} width={350}/>
                </div>
                <div className="text-4xl text-center underline-offset-2">name: {pokemonDetails?.name}</div>
                {/* <div className="text-center">{pokemonDetails?.generation}</div> */}
            </div>
        </div>
  )
}
