import { type ReactElement } from 'react'
import { type AbilityDetails } from '../interfaces/PokemonAbilityDetails.ts'
import { usePokemonDetails } from '../hooks/usePokemonDetails.ts'
import { useNavigate, useParams } from 'react-router-dom'

export const PokeDetails = (): ReactElement => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pokemon, isLoading, error } = usePokemonDetails(+(id ?? 0))
  if (error != null) {
    return <div>{error}</div>
  }
  return <>
    {isLoading
      ? <div className="spinner-border text-primary" role="status">
        </div>
      : <div className="card shadow-lg w-25 h-25 mx-auto">
          <img className="card-img-top"
               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
               alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">name: {pokemon.name}</h5>
            <p className="card-text">height: {pokemon.height}</p>
            <p className="card-text">height: {pokemon.weight}</p>
            {pokemon.abilities.map((ab: AbilityDetails, index: number) => (
                <span key={index}>{ab.ability.name}, </span>))}
          </div>
          <button type="button" className="btn btn-info m-auto mb-2" onClick={() => { navigate(-1) }}>Go Back</button>
        </div>
    }
  </>
}
