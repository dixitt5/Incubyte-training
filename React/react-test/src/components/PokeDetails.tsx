import { type ReactElement } from 'react'
import { getPokemonDetails } from '../api/getPokemonDetails'
import PokeImage from './PokeImage'

interface PokeDetailsProps {
  _id: number
  setRoute: (route: string) => void
}

function capitalizeFirstLetter (str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

const PokeDetails = ({ _id, setRoute }: PokeDetailsProps): ReactElement => {
  const { pokemonDetails, isLoading, error } = getPokemonDetails(_id)
  const { id, name, baseExperience, height, weight, abilities } = pokemonDetails
  return (
    <>
      {
        error !== null && (<div>{error}</div>)
      }
      {
        !isLoading
          ? (<>
            <PokeImage id={id} name={name} />
            <br />
            <span>ID: {id}</span><br />
            <span>Name: {capitalizeFirstLetter(name)}</span><br />
            <span>Base Experience: {baseExperience}</span><br />
            <span>Height: {height}</span><br />
            <span>Weight: {weight}</span><br />
            <span>
              Abilities: <br />
              <ul>
                {abilities?.map((ability: string, index: number) => (<li key={index}>{capitalizeFirstLetter(ability)}</li>))}
              </ul>
            </span>
            <button onClick={() => { setRoute('PokeImage') }}>Go Back</button>
          </>)
          : (<h3>Loading...</h3>)
      }
    </>
  )
}

export default PokeDetails
