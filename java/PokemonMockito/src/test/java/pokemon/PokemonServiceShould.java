package pokemon;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import repository.InMemoryPokemonRepository;

import java.util.List;
import java.util.Set;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PokemonServiceShould {

    @Mock InMemoryPokemonRepository inMemoryPokemonRepository;
    @Mock Statistics statistics;
    @InjectMocks PokemonService pokemonService;

    @Captor ArgumentCaptor<Integer> idArgumentCaptor;

    @Test
    void get_all_pokemons() {
        // arrange
        Set<Pokemon> pikachu = Set.of(new Pokemon("Pikachu", "https://google.com"));
        when(inMemoryPokemonRepository.getAllPokemons()).thenReturn(pikachu);

        // act
        Set<Pokemon> allPokemons = pokemonService.getAllPokemons();

        // assert
        verify(inMemoryPokemonRepository).getAllPokemons();
        assertThat(allPokemons).isEqualTo(pikachu);
    }

    @Test
    void add_pokemon() {
        Pokemon pokemon = new Pokemon("Pikachu", "https://google.com");

        // We are trying to add Pokemon through service
        pokemonService.addPokemon(pokemon);

        // We are checking that is it has interaction in repository
        verify(inMemoryPokemonRepository).addPokemon(pokemon);
    }

    @Test
    void get_pokemon_by_id() {
        int searchId = 10;
        Pokemon pokemonDummy = new Pokemon("Pikachu", "https://google.com");

        Pokemon pokemon = pokemonService.getPokemonById(searchId);
        assertThat(pokemon).isEqualTo(pokemonDummy);
    }

    @Test
    void call_statistics_on_getAllPokemons() {
        Set<Pokemon> allPokemons = pokemonService.getAllPokemons();

        verify(statistics).getSetLog();
    }

    @Test
    void call_statistics_on_addPokemon() {
        Pokemon pokemonDummy = new Pokemon("Pikachu", "https://google.com");

        pokemonService.addPokemon(pokemonDummy);

        verify(statistics).getSetLog();
    }

    @Test
    void delete_pokemon_by_id() {
        pokemonService.deletePokemonById();

        verify(inMemoryPokemonRepository).deletePokemonById(idArgumentCaptor.capture());
        Integer captureIdValue = idArgumentCaptor.getValue();

        assertThat(captureIdValue).isEqualTo(1);
    }
}