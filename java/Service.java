public class Service {
    private final PokemonRepository repository;
    public Service(PokemonRepository repository) {
        this.repository = repository;
    }

  public Pokemon[] getPokemonList(int length) {
        return repository.getPokemonList(length);
  }
}
