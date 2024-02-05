import java.util.ArrayList;
import java.util.List;

public class InMemoryPokemonRepo implements PokemonRepo {

    List<Pokemon> PokemonList = new ArrayList<>();
    public InMemoryPokemonRepo() {
        PokemonList.add(new Pokemon("Pikachu",2,10,20));
    }

    @Override
    public List<Pokemon> getPokemons() {
        return PokemonList;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {
        PokemonList.add(pokemon);
    }
}
