package pokemon;

import repository.PokemonRepository;

import java.util.Set;

public class PokemonService {
    private final PokemonRepository pokemonRepository;
    private final Statistics statistics;
    public PokemonService(PokemonRepository pokemonRepository, Statistics stats) {
        this.pokemonRepository = pokemonRepository;
        this.statistics = stats;
    }

    public void addPokemon(Pokemon pokemon) {
        statistics.getSetLog();
        pokemonRepository.addPokemon(pokemon);
    }

    public Set<Pokemon> getAllPokemons() {
        statistics.getSetLog();
        return pokemonRepository.getAllPokemons();
    }

    public Pokemon getPokemonById(int searchId) {
        return new Pokemon("Pikachu", "https://google.com");
    }

    public void deletePokemonById() {
        pokemonRepository.deletePokemonById(1);
    }
}
