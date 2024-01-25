import React, { type ReactElement } from 'react'
import { type IPokemon } from '../models/Pokemon'
import { useNavigate } from 'react-router-dom'

interface PokeCardProps {
  pokemonObj: IPokemon
}

export const PokeCard = (props: PokeCardProps): ReactElement => {
  const navigate = useNavigate()
  return <>
        {<div onClick={() => {
          navigate(`${props.pokemonObj.id}`)
        }}>
            <div className="mx-8 rounded-sm shadow-lg bg-amber-50 p-4">
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonObj.id}.png`}
                        alt={props.pokemonObj.name} width={200}/>
                </div>
                <div className="text-xl text-center">{props.pokemonObj.name}</div>
            </div>

        </div>}
        </>
}
