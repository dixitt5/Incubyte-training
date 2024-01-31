import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        PokemonService service = getPokemonService();


        service.getAll().forEach(pokemon -> {
            System.out.println(pokemon.name());
            System.out.println(pokemon.id());
            System.out.println(pokemon.height());
            System.out.println(pokemon.weight());
        });

//        service.searchPokemon();

        /*
        stream.map()
         */
//        List<String> pokeNames = service.getAll().stream().map(new Function<Pokemon, String>() {
//            @Override
//            public String apply(Pokemon pokemon) {
//                return pokemon.name();
//            }
//        }).toList();

//        List<String> pokeNames2 = service.getAll().stream().map(pokemon -> pokemon.name()).toList();

//        List<String> pokeNames = service.getAll().stream().map(Pokemon::name).toList();

//        List<Pokemon> pokemonStream = service.getAll().stream().filter(new Predicate<Pokemon>() {
//            @Override
//            public boolean test(Pokemon pokemon) {
//                return pokemon.name().startsWith("char");
//            }
//        }).flatMap(new Function<Pokemon, Stream<String>>() {
//            @Override
//            public Stream<String> apply(Pokemon pokemon) {
//                return pokemon.pokemonType.stream().map()
//            }
//        })
//        System.out.println(pokemonStream);


    }

    private static PokemonService getPokemonService() {
        PokemonService service = new PokemonService(new InMemoryPokemonRepo());
//        Scanner newScanner = new Scanner(System.in);
//        System.out.println("Enter name of pokemon");
//        String name = newScanner.nextLine();
//        System.out.println("Enter id of pokemon");
//        int id = newScanner.nextInt();
//        System.out.println("Enter height of pokemon");
//        int height = newScanner.nextInt();
//        System.out.println("Enter weight of pokemon");
//        int weight = newScanner.nextInt();

        service.add(new Pokemon("pqr", 1, 30, 40));
        service.add(new Pokemon("charizard", 2, 10, 20));
        service.add(new Pokemon("charrur", 3, 20, 30));
        return service;
    }
}
