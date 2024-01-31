package Repositories;

import Pokemon.Pokemon;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class InMemoryPokemonRepository implements PokemonRepository {
    private HashSet<Pokemon> pokemons = new HashSet<Pokemon>();


    public InMemoryPokemonRepository(HashSet<Pokemon> pokemons) {
        this.pokemons = pokemons;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {
        this.pokemons.add(pokemon);
    }

    @Override
    public Set<Pokemon> getAllPokemons() throws UnsupportedOperationException{
        throw new UnsupportedOperationException();
//        return== pokemons.stream()
//                .filter(pokemon -> pokemon.name().equals("pikachu"))
//                .collect(Collectors.toSet());

    }

    public int countPokemon(String _name) {
        return (int) pokemons.stream()
                .filter(pokemon -> pokemon.name().equals(_name))
                .count();
    }
}
