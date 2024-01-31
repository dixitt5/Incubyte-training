package Pokemon;

import Repositories.PokemonRepository;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

public class PokemonService {
    private final PokemonRepository pokemonRepository;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    public void addPokemon(Pokemon pokemon) {
        pokemonRepository.addPokemon(pokemon);
    }

    public Set<Pokemon> getAllPokemons() throws EntityNotFoundException {
        try {
            Set<Pokemon> allPokemons = pokemonRepository.getAllPokemons();
//            if (allPokemons.isEmpty()) {
//                throw new EntityNotFoundException("No such element found");
//            }
            return allPokemons;
        } catch (UnsupportedOperationException err) {
            throw new EntityNotFoundException(err);
        }

    }

    public int countPokemon(String _name) {
        return pokemonRepository.countPokemon(_name);
    }
}
