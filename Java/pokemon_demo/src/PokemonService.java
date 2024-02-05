import java.util.ArrayList;
import java.util.List;

public class PokemonService {
//    private List<Pokemon> pokemonList = new ArrayList<>();

//    public PokemonService(List<Pokemon> pokemonList) {
//        this.pokemonList = pokemonList;
//    }

//    public void addPokemon(Pokemon pokemon){
//        this.pokemonList.add(pokemon);
//    }

    PokemonRepo inMemoryPokemon = new InMemoryPokemonRepo();

    public void showPokemons() {
        this.inMemoryPokemon.getPokemons().forEach(pokemon -> {
            System.out.printf("ID: %d", pokemon.id());
            System.out.printf("Name: %s", pokemon.name());
            System.out.printf("Type: %s", pokemon.pokemonType());
            System.out.printf("Height: %s", pokemon.height());
            System.out.printf("Weight: %s", pokemon.weight());
        });
    }
//    @Override
//    public String toString() {
//        return "PokemonController{" +
//                "pokemonList=" + pokemonList +
//                "}\n";
//    }
}
