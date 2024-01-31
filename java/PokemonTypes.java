public enum PokemonTypes {
    FIRE("Fire"),
    ROCK("Rock");

    PokemonTypes(String type) {
        this.type = type;
    }

       private final String type;
   public String getType()
   {
       return type;
   }

}
