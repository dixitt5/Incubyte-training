import React, { type ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

interface PokeDetailsProps {
  name: string
  id: number
  // generation: string,
}

export async function getDetails (id: number): Promise<PokeDetailsProps> {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  console.log((await axios.get(url)).data)
  const data = (await axios.get(url)).data

  const obj: PokeDetailsProps = { name: data.name, id: data.id }
  return obj
}
export function PokeDetails (): ReactElement {
  const [pokemonDetails, setPokemonDetails] = useState<PokeDetailsProps>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate('/error')
    }
    getDetails(+(id ?? 0))
      .then((details) => {
        setPokemonDetails(details)
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (

        <>
            <div className="card bg-light p-3">
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`}
                        alt={pokemonDetails?.name} width={200}/>
                </div>
                <div className="text-center">{pokemonDetails?.name}</div>
                {/* <div className="text-center">{pokemonDetails?.generation}</div> */}
            </div>
            <button onClick={() => { navigate('/pokemons') }} >Go Back</button>
        </>
  )
}
