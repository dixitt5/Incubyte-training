package repository;


import pokemon.Pokemon;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class InMemoryPokemonRepository implements PokemonRepository {
    private HashSet<Pokemon> pokemons = new HashSet<Pokemon>();


    public InMemoryPokemonRepository(HashSet<Pokemon> pokemons) {
        this.pokemons = pokemons;
    }

    public HashSet<Pokemon> getPokemons() {
        return pokemons;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {
        this.pokemons.add(pokemon);
    }

    @Override
    public Set<Pokemon> getAllPokemons() throws UnsupportedOperationException {
        return pokemons.stream()
                .filter(pokemon -> pokemon.name().equals("pikachu"))
                .collect(Collectors.toSet());

    }

    @Override
    public void deletePokemonById(Integer i) {
        throw new UnsupportedOperationException();
    }
}
