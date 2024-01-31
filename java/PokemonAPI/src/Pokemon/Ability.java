package Pokemon;

public enum Ability {
    NINJETSU("Ninjetsu"),
    TINJETSU("Tinjetsu"),
    GENJETSU("Genjetsu");

    private final String abilityName;

    private Ability(String abilityName) {
        this.abilityName = abilityName;
    }
    public String getAbility() {
        return abilityName;
    }
}
