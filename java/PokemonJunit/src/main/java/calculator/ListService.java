package calculator;

import java.util.ArrayList;
import java.util.List;

public class ListService {
    public List<Integer> getSequence(int startIndex, int endIndex) {
        List<Integer> listInt = new ArrayList<>();

        for (int i = startIndex + 1; i < endIndex; i++) {
            listInt.add(i);
        }
        return listInt;
    }
}
