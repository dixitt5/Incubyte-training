import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.function.Predicate;

public class InMemoryPokemonRepo implements PokemonRepo {

    List<Pokemon> PokemonList = new ArrayList<>();
    public InMemoryPokemonRepo() {
//        PokemonList.add(new Pokemon("Pikachu",2,10,20));
    }

    @Override
    public List<Pokemon> getPokemons() {
        return PokemonList;
    }

    @Override
    public void addPokemon(Pokemon pokemon) {
        PokemonList.add(pokemon);
    }

    @Override
    public Optional<Pokemon> searchPokemon(int id) throws NoSuchElementException {
        Optional<Pokemon> first = PokemonList.stream().filter(new Predicate<Pokemon>() {
            @Override
            public boolean test(Pokemon pokemon) {
                return id == pokemon.id();
            }
        }).findFirst();
        if(first.isPresent()) {
            return first;
        } else {
            throw new NoSuchElementException("no element found!");
        }
    }


}
