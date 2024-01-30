import java.util.ArrayList;
import java.util.List;

public class PokemonController {
    private List<Pokemon> pokemonList = new ArrayList<>();

    public PokemonController(List<Pokemon> pokemonList) {
        this.pokemonList = pokemonList;
    }

    public void addPokemon(Pokemon pokemon){
        this.pokemonList.add(pokemon);
    }

    public void showPokemons() {
        this.pokemonList.forEach((pokemon -> {
            System.out.printf("ID: %d", pokemon.getId());
            System.out.printf("Name: %s", pokemon.getName());

        }));
    }
    @Override
    public String toString() {
        return "PokemonController{" +
                "pokemonList=" + pokemonList +
                "}\n";
    }
}
