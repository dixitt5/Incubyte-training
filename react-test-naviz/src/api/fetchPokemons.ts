import axios from 'axios'
import { type IPokemon } from '../models/Pokemon'

export default async function fetchPokemons (): Promise<IPokemon[]> {
  return (await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=15')).data.results
}
