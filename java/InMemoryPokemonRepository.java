import java.util.*;

public class InMemoryPokemonRepository implements PokemonRepository {

    public static Random random = new Random();
    public static List<Pokemon> getStaticPokemonList(int length) {
        List<Pokemon> pokemonList = new ArrayList<>();
        for(int k = 0; k < length; ++k){
            StringBuilder name = new StringBuilder();
            for (int i = 0; i < 4; ++i) {
                name.append(randomChar());
            }
            Pokemon pokemon = new Pokemon(name.toString(),
                    random.nextInt(0,100),
                    random.nextInt(0,1000),
                    random.nextInt(0,1000));
            pokemonList.add(pokemon);
        }
        return pokemonList.stream().filter(InMemoryPokemonRepository::isValid).
                map(InMemoryPokemonRepository::getNewName).toList();

    }

    public static boolean isValid(Pokemon pokemon){
        return pokemon.id() < 500;
    }

    public static Pokemon getNewName(Pokemon pokemon){
        String newName = pokemon.name().substring(0,1).toUpperCase() + pokemon.name().substring(1, 4);
        return new Pokemon(newName, pokemon.number(), pokemon.level(), pokemon.id());
    }

    public static char randomChar() {
        return (char) (Math.random() * 26 + 'a');
    }
    public List<Pokemon> getPokemonList(int length) {
        return getStaticPokemonList(length);
    }
}

