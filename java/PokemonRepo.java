import java.util.List;
import java.util.Optional;

public interface PokemonRepo {
    public List<Pokemon> getPokemons ();
    public void addPokemon(Pokemon p);
    public Optional<Pokemon> searchPokemon(int id) throws Exception;
}
