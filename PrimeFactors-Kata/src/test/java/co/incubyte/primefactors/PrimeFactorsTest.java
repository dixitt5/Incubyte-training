package co.incubyte.primefactors;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class PrimeFactorsTest {

    PrimeFactors primeFactors = new PrimeFactors();
    @Test
    @DisplayName("factors")
    void factors() {
        assertThat(primeFactors.findFor(1)).isEmpty();
        assertThat(primeFactors.findFor(2)).isEqualTo(List.of(2));
        assertThat(primeFactors.findFor(3)).isEqualTo(List.of(3));
        assertThat(primeFactors.findFor(4)).isEqualTo(List.of(2, 2));
        assertThat(primeFactors.findFor(5)).isEqualTo(List.of(5));
        assertThat(primeFactors.findFor(6)).isEqualTo(List.of(2, 3));
        assertThat(primeFactors.findFor(7)).isEqualTo(List.of(7));
        assertThat(primeFactors.findFor(8)).isEqualTo(List.of(2, 2, 2));
        assertThat(primeFactors.findFor(9)).isEqualTo(List.of(3, 3));
        assertThat(primeFactors.findFor(2 * 2 * 3 * 3 * 5 * 7 * 11 * 13)).isEqualTo(List.of(2, 2, 3, 3, 5, 7, 11, 13));
    }
}
