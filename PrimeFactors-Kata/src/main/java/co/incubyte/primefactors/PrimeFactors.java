package co.incubyte.primefactors;

import java.util.Collections;
import java.util.List;

public class PrimeFactors {
    public List<Integer> findFor(Integer number) {
        int reminder = number;
        List<Integer> factors = new java.util.ArrayList<>(Collections.emptyList());
        if (reminder > 1) {
            int divisor = 2;
            while(reminder > 1) {
                while (reminder % divisor == 0) {
                    factors.add(divisor);
                    reminder /= divisor;
                }
                divisor++;
            }
        }
        return factors;
    }
}
