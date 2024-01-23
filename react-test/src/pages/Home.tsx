import { MouseEventHandler, useEffect, useState } from "react";
import { PokeCard } from "../components/Header";
import { Pokemon } from "../types/Pokemon";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { fetchPokemons } from "../fakeApi";

function App() {
  const [index, setIndex] = useState<number>(0);
  const [pokemons, setPokemon] = useState<Pokemon[]>([]);
  const [isloading, setLoading] = useState<boolean>(true);

  const callbackInvoke = async () =>  {
    const result = await fetchPokemons();
    setPokemon(result as Pokemon[]);
    setLoading(false);
  };

  useEffect(() => {
    callbackInvoke();
  }, []);

  const changePokemon = (goForward: boolean): MouseEventHandler | void => {
    if (goForward) {
      if (index === pokemons.length - 1) {
        alert("This was the last pokemon");
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        alert("This was the first pokemon");
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    <>
      {isloading ? (
        <div className="d-flex flex-column h-100 my-auto justify-content-center align-items-center">
          <div
            className="spinner-border text-primary me-2"
            role="status"
            aria-hidden="true"
          ></div>
          <h3 className="mb-0">Loading...</h3>
        </div>
      ) : (
        <div>
          <PokeCard pokemon={pokemons[index]} />
          <div className="d-flex justify-content-center mb-3">
            <div className="btn-group" role="group" aria-label="Basic example">
              {/* {index > 0 && ( */}
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => changePokemon(false)}
              >
                Prev
              </button>
              {/* )} */}

              {/* {index < pokemons.length - 1 && ( */}
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => changePokemon(true)}
              >
                Next
              </button>
              {/* )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
