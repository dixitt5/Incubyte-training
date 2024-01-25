import { type ReactElement, useContext } from 'react'
import { type PokemonType } from '../interfaces/PokeType.ts'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext.ts'

interface PokeCardProps {
  pokemon: PokemonType
}

function PokeCard (pokeObj: PokeCardProps): ReactElement {
  const { isDarkTheme } = useContext(ThemeContext)

  const navigate = useNavigate()
  return (
        <>
            <div
                className="card shadow-lg mb-4 mt-4"
                style={{ width: '18rem', margin: '5px auto', backgroundColor: isDarkTheme ? '#414141' : 'white', color: isDarkTheme ? 'white' : 'black' }}
                onClick={() => { navigate(`${pokeObj.pokemon.id}`) }}
            >
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeObj.pokemon.id}.png`}
                    className="card-img-top"
                    alt={pokeObj.pokemon.url}
                />
                <div className="card-body">
                    <h5 className="card-title">{pokeObj.pokemon.name}</h5>
                    <ul className="list-group list-group-flush">
                        <a href={''} className="text-decoration-none">
                            Link
                        </a>
                    </ul>
                </div>
            </div>
        </>
  )
}

export default PokeCard
