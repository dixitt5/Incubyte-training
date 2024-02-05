import java.util.ArrayList;
import java.util.List;

public class InMemoryPokemonRepo implements PokemonRepo{

    private List<Pokemon> pokemonList = new ArrayList<>();

    public InMemoryPokemonRepo() {
        pokemonList.add(new Pokemon(1, "bulbasaur", PokemonTypes.FIRE, 10, 10));
    }

    @Override
    public List<Pokemon> getPokemons() {
        return pokemonList;
    }
}
