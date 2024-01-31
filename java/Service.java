import java.util.List;

public class Service {
    private final PokemonRepository repository;
    public Service(PokemonRepository repository) {
        this.repository = repository;
    }

  public List<Pokemon> getPokemonList(int length) {
        return repository.getPokemonList(length);
  }
}
