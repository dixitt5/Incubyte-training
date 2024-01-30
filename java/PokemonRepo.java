import java.util.List;

public interface PokemonRepo {
    public List<Pokemon> getPokemons ();
    public void addPokemon(Pokemon p);
}
