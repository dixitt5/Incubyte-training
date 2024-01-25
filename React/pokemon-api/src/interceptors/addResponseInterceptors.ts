import axios, { type AxiosResponse } from 'axios'
import { type PokemonType } from '../interfaces/PokeType.ts'

export const addResponseInterceptors = (): void => {
  axios.interceptors.response.use((response: AxiosResponse<any, any>): AxiosResponse<any, any> => {
    if (response.config.url !== undefined && response.config.url.startsWith('https://pokeapi.co/api/v2/pokemon/?')) {
      // list of pokemons
      const responsePokemonData: PokemonType[] = []
      response.data?.results.map((element: PokemonType, index: number) =>
        responsePokemonData.push({
          id: index,
          name: element.name,
          url: element.url
        })
      )

      response.data = responsePokemonData
      return response
    } else {
      // specific one
      // const { height, url, weight, name, abilities } = response.data
      // console.log('Type of Abilities', typeof abilities)
      // const abs = abilities.map((ele: any) => ele.ability.name)
      // response.data = { height, url, weight, name, abs }
      return response
    }
  })
}
