package calculator;

public class CalculatorService {

    public int add(int number1, int number2) {
        try {
            return Math.addExact(number1, number2);
        }catch (ArithmeticException arithmeticException){
            throw new NumberFormatException("It exceeds the MAX Value.");
        }
    }

    public int subtract(int number1, int number2) {
        return number1 - number2;
    }


    public int multiply(int number1, int number2) {
        return number1 * number2;
    }

    public int divide(int number1, int number2) {
        return number1 / number2;
    }
}
