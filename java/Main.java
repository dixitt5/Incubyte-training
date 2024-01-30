import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        PokemonService service = new PokemonService(new InMemoryPokemonRepo());
        Scanner newScanner = new Scanner(System.in);
        System.out.println("Enter name of pokemon");
        String name = newScanner.nextLine();
        System.out.println("Enter id of pokemon");
        int id = newScanner.nextInt();
        System.out.println("Enter height of pokemon");
        int height = newScanner.nextInt();
        System.out.println("Enter weight of pokemon");
        int weight = newScanner.nextInt();

        service.add(new Pokemon(name, id, height, weight));


        service.getAll().forEach(pokemon -> {
            System.out.println(pokemon.name());
            System.out.println(pokemon.id());
            System.out.println(pokemon.height());
            System.out.println(pokemon.weight());
        });
    }
}
