import { Header } from "../components/Header";
import { Pokemon, PokemonType } from "../types/Pokemon";

const p1 : Pokemon = {
  name: "Pikachu",
  width: 20,
  height: 20,
  type: PokemonType.Other,
}

function App() {
  return (
    <Header pokemon={p1}/>
  );
}

export default App;
