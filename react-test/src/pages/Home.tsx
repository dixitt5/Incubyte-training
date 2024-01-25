import { useContext } from 'react'
import { PokeCard } from '../components/Card'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { usePokemonsApi } from '../hooks/usePokemonsApi'
import { useNavigate } from 'react-router-dom'
import DarkModeContext from '../context/DarkModeContext'

function App (): JSX.Element {
  // const [index, setIndex] = useState<number>(0)
  const navigate = useNavigate()
  const { isDarkMode } = useContext(DarkModeContext)
  // const [pokemons, setPokemons] = useState<PokemonApi[]>([])
  // const [isloading, setIsloading] = useState<boolean>(true)

  const { pokemons, isLoading, error } = usePokemonsApi()

  return (
    <>
        {
      error !== null && (<div>{error.message}</div>)}

      {
      isLoading
        // eslint-disable-next-line multiline-ternary
        ? (
        <div className={`${isDarkMode ? 'bg-secondary text-light' : ''} d-flex flex-column h-100 my-auto justify-content-center align-items-center`}>
            <div
              className="spinner-border text-primary me-2"
              role="output"
              aria-hidden="true"
            ></div>
            <h3 className="mb-0">Loading...</h3>
          </div>
          ) : (
        <div className={`${isDarkMode ? 'bg-dark text-light' : ''}` }>
          <div className="container">
            <div className="row row-cols-5">
              {/* Adjust number of columns as needed */}
              {pokemons.map((pokemon) => (
                <div className="col" style={{ cursor: 'pointer' }} key={pokemon.id} onClick={ () => {
                  navigate(`${pokemon.id}`)
                }}>
                  <PokeCard pokemon={pokemon} />
                </div>
              ))}
            </div>
          </div>
          {/* Buttons- Next Previous Change Route */}
          {/* <div className="d-flex justify-content-center mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  changePokemon(false)
                }}
              >
                Prev
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  changePokemon(true)
                }}
              >
                Next
              </button>
              <button>
                Change Route
              </button>
            </div>
          </div> */}
        </div>
          )}
    </>
  )
}

export default App
