package repository;


import pokemon.Pokemon;
import java.util.Set;

public interface PokemonRepository {
    public void addPokemon(Pokemon pokemon);
    public Set<Pokemon> getAllPokemons();

    void deletePokemonById(Integer i);
}
