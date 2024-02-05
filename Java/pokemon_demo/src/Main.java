import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        List<Pokemon> pokemonList = new ArrayList<>();
//
//        pokemonList.add(new Pokemon(1, "bulbasaur", PokemonTypes.FIRE));
//        pokemonList.add(new Pokemon(2, "ivysaur", PokemonTypes.GRASS));

        PokemonService pokemonService = new PokemonService();

//        pokemonService.addPokemon(new Pokemon(3, "pikachu", PokemonTypes.ROCK));

        pokemonService.showPokemons();



    }
}