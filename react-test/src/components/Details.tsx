import { type ReactElement } from 'react'
import { usePokemonDetails } from '../hooks/usePokemonDetails'

interface PokemonId { id: number }

const Details = ({ id }: PokemonId): ReactElement => {
  // const [pokemon, setPokemon] = useState<PokemonDetailsApi>()

  // const getPokemon = async (id: number): Promise<void> => {
  //   const result = await fetchPokemonDetails(id)
  //   setPokemon(result)
  //   console.log(result)
  // }

  // useEffect(() => {
  //   void getPokemon(id)
  // }, [])

  const { pokemonDetails, isLoading, error } = usePokemonDetails(id)

  return (
    <div className='text-center'>
        <h1>Pokemon Details</h1>
        {error !== null && (<div>{error.message}</div>)}
        {
          !isLoading
            ? (
              <div className='card'>
                <img className="img-fluid mx-auto d-block mb-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`} alt={pokemonDetails?.name} />
                <h2>ID: {pokemonDetails?.id}</h2>
                <h2>Name: {pokemonDetails?.name}</h2>
                <h2>Base Experience: {pokemonDetails?.baseExperience}</h2>
                <h2>Height: {pokemonDetails?.height}</h2>
                <h2>Weight: {pokemonDetails?.weight}</h2>
                <h2>Abilities: <ul>{pokemonDetails?.abilities.map((ab, index) => {
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
