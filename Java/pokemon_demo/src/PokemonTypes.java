public enum PokemonTypes {
    FIRE("Fire"),
    GRASS("Grass"),
    ROCK("Rock");


    private final String type;

    PokemonTypes(String type) {

        this.type = type;
    }

    public String getType() {
        return type;
    }
}
