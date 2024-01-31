package Repositories;

import Pokemon.Pokemon;

import java.util.List;
import java.util.Set;

public interface PokemonRepository {
    public void addPokemon(Pokemon pokemon);
    public Set<Pokemon> getAllPokemons();
    public int countPokemon(String _name);
}
