package com.trs.testing;

import com.trs.tst.MathService;
import org.junit.jupiter.api.*;


@Tag("Assert")
@DisplayName("Assert Equal Test")
class AssertEqualTest {

    @Test
    @DisplayName("should sum two numbers 3 + 2 = 5")
    void shouldSumTwoNumbers() {
        MathService mathService = new MathService();
        Assertions.assertEquals(5, mathService.sum(3, 2));
    }

    @Test
    @DisplayName("should subtract two numbers 3 - 2 = 1")
    void shouldSubtractTwoNumbers() {
        MathService mathService = new MathService();
        Assertions.assertEquals(1, mathService.sub(3, 2));
    }

    @Test
    @DisplayName("should multiply two numbers 3 * 2 = 6")
    void shouldMultiplyTwoNumbers() {
        MathService mathService = new MathService();
        Assertions.assertEquals(6, mathService.mul(3, 2));
    }

}
