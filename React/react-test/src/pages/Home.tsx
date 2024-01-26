import { type ReactElement, useState } from 'react'
import { type PokemonAPI } from '../models/Pokemon'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { getPokemons } from '../api/getPokemons'
import PokeImage from '../components/PokeImage'
import PokeDetails from '../components/PokeDetails'

function capitalizeFirstLetter (str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

const Home = (): ReactElement => {
  // const [index, setIndex] = useState<number>(383)
  const [route, setRoute] = useState<string>('PokeImage')

  // const getNextPokemon = (): void => {
  //   setIndex(index + 1)
  // }
  // const getPreviousPokemon = (): void => {
  //   setIndex(index - 1)
  // }
  // const pokemon: Pokemon = {
  //   id: index,
  //   name: 'charizard',
  //   height: 123,
  //   weight: 232,
  //   type: PokeType.fire,
  //   imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + index + '.png'
  // }
  // const fetchPokemons = async (): Promise<void> => {
  //   const pokemons: PokemonAPI[] = await getPokemons()
  // }
  const pokemonLimit = 10
  const pokemonOffset = 1000
  const { pokemons, isLoading, error } = getPokemons(pokemonLimit, pokemonOffset)
  // console.log('Pokemons:', pokemons)
  // console.log('IsLoading:', isLoading)
  // console.log('Error:', error)

  return (
    <>
      {error !== null && (<h1>{error}</h1>)}
      {
        !isLoading
          ? <div className="container">
            {/* <PokeCard pokemonObj={pokemon} route={route}><div>Children</div></PokeCard> */}
            {
              // pokemons.map((pokemon: PokemonAPI) => (<PokeCard pokemonObj={pokemon} key={pokemon.id} route={route} />))
            }

            {/* <button className="btn btn-primary" style={{ margin: 5 }} onClick={getPreviousPokemon}
            disabled={index === 0}>Previous
          </button>
          {
            route === 'PokeImage'
              ? <button className="btn btn-danger" style={{ margin: 5 }} onClick={() => { setRoute('PokeDetails') }}>Details</button>
              : <button className="btn btn-success" style={{ margin: 5 }} onClick={() => { setRoute('PokeImage') }}>Image</button>
          }
          <button className="btn btn-primary" style={{ margin: 5 }} onClick={getNextPokemon}
            disabled={index === 400}>Next
          </button> */}

            {
              route === 'PokeImage'
                ? pokemons.map((pokemon: PokemonAPI, index: number) => {
                  return <div onClick={() => { setRoute('PokeDetails_' + pokemon.id) }} key={index}>
                    <PokeImage id={pokemon.id} name={pokemon.name} />
                    <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
                  </div>
                })
                : <PokeDetails _id={+route.split('_')[1]} setRoute={setRoute} />
            }
          </div>

          : <h3>Loading...</h3>
      }
    </>
  )
}

export default Home
