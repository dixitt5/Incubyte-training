import { type ReactElement } from 'react'
import { usePokemonDetails } from '../hooks/usePokemonDetails'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const Details = (): ReactElement => {
  const { id } = useParams()
  const { isDarkMode } = useContext(DarkModeContext)
  const { pokemonDetails, isLoading, error } = usePokemonDetails(Number(id))
  return (
    <div className={`text-center ${isDarkMode ? 'bg-black text-light' : ''}`}>
        {/* <h1>Pokemon Details</h1> */}
        {error !== null && (<div>{error.message}</div>)}
        {
          !isLoading
            ? (
              <div className={`card w-25 mx-auto my-auto ${isDarkMode ? 'bg-black text-light ' : ''} `}>
                <img className="img-fluid mx-auto mb-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`} alt={pokemonDetails?.name} />
                <h2 className='fs-3'>ID: {pokemonDetails?.id}</h2>
                <h2 className='fs-3'>Name: {pokemonDetails?.name}</h2>
                <h2 className='fs-3'>Base Experience: {pokemonDetails?.baseExperience}</h2>
                <h2 className='fs-3'>Height: {pokemonDetails?.height}</h2>
                <h2 className='fs-3'>Weight: {pokemonDetails?.weight}</h2>
                <h2 className='fs-3'>Abilities: <ul>{pokemonDetails?.abilities.map((ab, index) => {
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
