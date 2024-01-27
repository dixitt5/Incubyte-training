import React, { type ReactElement } from 'react'
import { type IPokemon } from '../models/Pokemon'
import { useNavigate } from 'react-router-dom'

interface PokeCardProps {
  pokemonObj: IPokemon
}

export const PokeCard = (props: PokeCardProps): ReactElement => {
  const navigate = useNavigate()
  return (
        <>
            {
                <div
                    onClick={() => {
                      navigate(`/pokemons/${props.pokemonObj.id}`)
                    }}
                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <img className="p-4 rounded-t-lg"
                         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonObj.id}.png`}
                         alt={props.pokemonObj.name}/>

                    <div className="px-5 pb-5">
                        <div className="flex items-center justify-center">
                            <span className="font-bold text-gray-900 dark:text-white text-xs sm:text-xl break-all uppercase">{props.pokemonObj.name}</span>
                        </div>
                    </div>
                </div>
            }
        </>
  )
}
