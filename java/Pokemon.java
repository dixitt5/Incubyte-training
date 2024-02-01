public class Pokemon {
    private final String name;
    private final int id;
    private final int height;
    private final int weight;

    Pokemon(String name, int id, int height, int weight) {
        this.name = name;
        this.height = height;
        this.id = id;
        this.weight = weight;
    }

    public String getName() {
        return this.name;
    }

    public int getHeight() {
        return this.height;
    }

    public int getId() {
        return this.id;
    }

    public int getWeight() {
        return this.weight;
    }

}
