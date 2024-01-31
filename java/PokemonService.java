import java.util.List;

public class PokemonService {

    private final PokemonRepo pokemonRepo;

    public PokemonService(PokemonRepo pokemonRepo) {
        this.pokemonRepo = pokemonRepo;
    }

    public List<Pokemon> getAll() {
        return pokemonRepo.getPokemons();
    }

    public void add(Pokemon pokemon) {

        pokemonRepo.addPokemon(pokemon);
    }

    public void searchPokemon(int id)
    {

    }
}
