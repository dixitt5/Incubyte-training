import Pokemon.*;
import Repositories.InMemoryPokemonRepository;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        PokemonService pokemonService = new PokemonService(new InMemoryPokemonRepository(new HashSet<Pokemon>()));
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Add Pokemon");
            System.out.println("2. Show Pokemon");
            System.out.println("3. Count specific pokemons");
            System.out.println("4. Exit");
            int command = scanner.nextInt();
            scanner = new Scanner(System.in);
            switch (command) {
                case 1 -> {
                    System.out.print("Enter Pokemon Name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter Pokemon URL: ");
                    scanner = new Scanner(System.in);
                    String url = scanner.nextLine();
                    Pokemon pokemon = new Pokemon(name, url);
                    pokemonService.addPokemon(pokemon);
                }
                case 2 -> {
                    try {
                        System.out.println("-----------------------------------------");
                        final Set<Pokemon> pokemonList = pokemonService.getAllPokemons();
                        System.out.println("ALL POKEMONS");
                        System.out.println("--------------------------------------");
                        for (Pokemon pokemonItem : pokemonList) {
                            System.out.print(pokemonItem.name() + " | ");
                            System.out.println(pokemonItem.url());
                        }
                        System.out.println("------------------------------------------");
                    } catch (Exception err) {
                        err.printStackTrace();
                        System.out.println(err.getMessage());
                    }
                }
                case 3 -> {
                    System.out.println("-------------------------------------------");
                    int count = pokemonService.countPokemon("pikachu");
                    System.out.println("Pokemon count: " + count);
                }
                case 4 -> System.exit(0);
                default -> System.out.println("Invalid Command");
            }
        }
    }
}
