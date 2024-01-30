import java.util.Random;

public class InMemoryPokemonRepository implements PokemonRepository {

    public static Random random = new Random();
    public static Pokemon[] getStaticPokemonList(int length) {
        Pokemon[] pokemonList = new Pokemon[length];
        for(int k = 0; k < length; ++k){
            StringBuilder name = new StringBuilder();
            for (int i = 0; i < 4; ++i) {
                name.append(randomChar());
            }
            Pokemon pokemon = new Pokemon(name.toString(),
                    random.nextInt(0,100),
                    random.nextInt(0,1000),
                    random.nextInt(0,1000));
            pokemonList[k] = pokemon;
        }
        return pokemonList;
    }

    public static char randomChar() {
        return (char) (Math.random() * 26 + 'a');
    }
    public Pokemon[] getPokemonList(int length) {
        return getStaticPokemonList(length);
    }
}

