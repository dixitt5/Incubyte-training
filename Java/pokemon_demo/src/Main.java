import java.util.ArrayList;
import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        List<Pokemon> pokemonList = new ArrayList<>();

        pokemonList.add(new Pokemon(1, "bulbasaur"));
        pokemonList.add(new Pokemon(2, "ivysaur"));

        PokemonController pokemonController = new PokemonController(pokemonList);

        pokemonController.addPokemon(new Pokemon(3, "pikachu"));

        System.out.println(pokemonController);

    }
}