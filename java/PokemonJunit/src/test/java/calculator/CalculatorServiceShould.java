package calculator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


public class CalculatorServiceShould {

    CalculatorService calculatorService = new CalculatorService();
    int number1;
    int number2;

    @BeforeEach
    void beforeEach() {
        number1 = 10;
        number2 = 20;
    }

    @ParameterizedTest
    @CsvSource({
        "10, 20, 30",
        "-10, 20, 10",
    })
    void add_2_numbers(int number1, int number2, int expected) {
        // 3 A's
        // arrange

        // act
        int result = calculatorService.add(number1, number2);

        // assert
        assertEquals(expected ,result);
    }

    @Test
    void throws_exception_when_exceed_max_value() {
        NumberFormatException numberFormatException = assertThrows(NumberFormatException.class, () -> {
            calculatorService.add(Integer.MAX_VALUE, number2);
        });
        assertEquals("It exceeds the MAX Value.", numberFormatException.getMessage());
    }

    @Test
    void subtract_2_numbers() {
        int result = calculatorService.subtract(number1, number2);

        assertEquals(-10, result);
    }

    @Test
    void multiply_2_numbers() {
        int number1 = 10;
        int number2 = 20;

        int result = calculatorService.multiply(number1, number2);

        assertEquals(200, result);
    }

    @Test
    void divide_2_numbers() {
        int number1 = 20;
        int number2 = 10;

        int result = calculatorService.divide(number1, number2);

        assertEquals(2, result);
    }
}
