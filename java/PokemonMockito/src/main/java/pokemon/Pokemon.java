package pokemon;

import java.util.Objects;

public record Pokemon(String name, String url) {
    public Pokemon{
        Objects.requireNonNull(name);
        Objects.requireNonNull(url);
    }
}
