import { type ReactElement, useEffect, useState } from 'react'
import axios from 'axios'

interface pokeyType {
  name: string
  url: string
  height: number
  weight: number
}

export const PokeDetails = ({ id }: { id: number }): ReactElement => {
  const [pokemonDetail, setPokemonDetail] = useState<pokeyType>({ url: '', weight: 0, height: 0, name: '' })
  async function fetchPokemonDetails (): Promise<pokeyType> {
    return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
  }

  useEffect(() => {
    void fetchPokemonDetails().then((data: pokeyType) => {
      console.log(data)
      setPokemonDetail(data)
    })
  }, [])
  return <>
    <div className="card w-25 h-25 mx-auto">
      <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">name: {pokemonDetail.name}</h5>
        <p className="card-text">height: {pokemonDetail.height}</p>
        <p className="card-text">height: {pokemonDetail.weight}</p>
      </div>
    </div>
  </>
}
