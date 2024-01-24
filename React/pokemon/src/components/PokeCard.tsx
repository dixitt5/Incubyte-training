import { colorList } from '../enums/Pokemon_enum'
import { type Pokemon } from '../types/Pokemon'

interface PokeCardProps {
  pokemon: Pokemon
}

function PokeCard (pokeObj: PokeCardProps): JSX.Element {
  return (
    <>
      <div
        className="card shadow-lg mb-4 mt-4"
        style={{ width: '18rem', margin: '5px auto' }}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeObj.pokemon.id}.png`}
          className="card-img-top"
          alt={pokeObj.pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title">{pokeObj.pokemon.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Height: {pokeObj.pokemon.height}
            </li>
            <li className="list-group-item">
              Weight: {pokeObj.pokemon.weight}
            </li>
            <li className="list-group-item">
              Type:
              {pokeObj.pokemon.type.map((pType, index) => (
                <span
                  key={index}
                  className={` m-2 rounded px-2 py-1 text-light ${
                    colorList[pokeObj.pokemon.type[index]]
                  }`}
                >
                  {pType}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PokeCard
