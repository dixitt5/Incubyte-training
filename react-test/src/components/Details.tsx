import { useEffect, useState, type ReactElement } from 'react'
import { fetchPokemonDetails } from '../PokeApi'
import { type PokemonDetailsApi } from '../types/Pokemon'

interface PokemonId { id: number }

const Details = ({ id }: PokemonId): ReactElement => {
  const [pokemon, setPokemon] = useState<PokemonDetailsApi>()

  const getPokemon = async (id: number): Promise<void> => {
    const result = await fetchPokemonDetails(id)
    setPokemon(result)
    console.log(result)
  }

  useEffect(() => {
    void getPokemon(id)
  }, [])
  return (
    <div className='text-center'>
        <h1>Pokemon Details</h1>
        {
          pokemon !== null
            ? (
              <div>
                <img className="img-fluid mx-auto d-block mb-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`} alt={pokemon?.name} />
              <h2>ID: {pokemon?.id}</h2>
              <h2>Name: {pokemon?.name}</h2>
              <h2>Base Experience: {pokemon?.baseExperience}</h2>
              <h2>Height: {pokemon?.height}</h2>
              <h2>Weight: {pokemon?.weight}</h2>
              <h2>Abilities: <ul>{pokemon?.abilities.map((ab, index) => {
                return <li key={index}>{ab}</li>
              })}</ul></h2>
            </div>
              )
            : (
            <h2>Loading...</h2>
              )
        }
    </div>
  )
}

export default Details
