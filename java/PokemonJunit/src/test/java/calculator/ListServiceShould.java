package calculator;

import org.junit.jupiter.api.Test;
import java.util.List;
import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

class ListServiceShould {
    ListService listService = new ListService();
    @Test
    void verify_sequence() {
        int startIndex = 1;
        int endIndex = 5;
        List<Integer> listInt = listService.getSequence(startIndex, endIndex);
        assertThat(listInt).containsSequence(2,3,4);
    }

}