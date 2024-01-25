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
          navigate(`/pokemons/${props.pokemonObj.id}`)
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
