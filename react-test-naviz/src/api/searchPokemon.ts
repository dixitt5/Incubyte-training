import axios from 'axios'
import { type IPokemonDetails } from '../models/Pokemon'

export default async function searchPokemon (searchParameter: string | undefined): Promise<IPokemonDetails> {
  return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchParameter}/`)).data
}
