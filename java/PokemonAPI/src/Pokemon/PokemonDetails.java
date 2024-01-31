package Pokemon;

import java.util.List;

public class PokemonDetails {
    private int id;
    private String name;
    private String url;
    private double height;
    private double weight;

    private List<Ability> abilities;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public List<Ability> getAbilities() {
        return abilities;
    }

    public void setAbilities(List<Ability> abilities) {
        this.abilities = abilities;
    }

    private String displayAbilities(List<Ability> abilities) {
        String output = "";
        for (Ability ability : abilities) {
            output += ability.getAbility() + ", ";
        }
        return output;
    }

    @Override
    public String toString() {
        return "PokemonDetails{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", height=" + height +
                ", weight=" + weight +
                ", abilities=" + displayAbilities(abilities) +
                '}';
    }
}
