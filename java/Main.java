import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner newScanner = new Scanner(System.in);
        int n = newScanner.nextInt();
        Pokemon[] pokemonList = getPokemonList(n);
        for(int i = 0; i < n; ++i) {
            System.out.println(pokemonList[i].getName());
            System.out.println(pokemonList[i].getId());
            System.out.println(pokemonList[i].getWeight());
            System.out.println(pokemonList[i].getHeight());
            System.out.println("----------------------------");
        }
    }

   public static Random random = new Random();
    public static Pokemon[] getPokemonList(int length) {
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
}
