import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Service service = new Service(new InMemoryPokemonRepository());
        Scanner scanner = new Scanner(System.in);
         int length = scanner.nextInt();
        Pokemon[] pokemonList = service.getPokemonList(length);
        for (Pokemon pokemon : pokemonList) {
            System.out.println(pokemon);
        }
    }
}
