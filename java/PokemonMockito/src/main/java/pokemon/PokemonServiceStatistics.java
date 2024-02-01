package pokemon;

public class PokemonServiceStatistics implements Statistics {
    private static int getSetLogCounter = 0;

    private static void incrementGetSetCounter() {
        getSetLogCounter++;
    }

    @Override
    public void getSetLog() {
        incrementGetSetCounter();
    }
}
