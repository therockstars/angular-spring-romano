package com.trs.testing;

import com.trs.tst.Calculator;
import com.trs.tst.MathService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@DisplayName("Mock Bean Test")
@ExtendWith(SpringExtension.class)
@SpringBootTest //Creates the ApplicationContext used in your SpringApplication.
public class MockBeanTest {

    @MockBean
    private MathService mathService;

    @Autowired
    private Calculator calculator;

    @Test
    public void mockService() {

       // the below ensures that anytime the sum() method is called in mathService, it always returns -14, irrespective os what is given as an inut
        Mockito.when(mathService.sum(Mockito.anyInt(), Mockito.anyInt())).thenReturn(-14);

       Assertions.assertEquals(calculator.sum(1, 5), -14);

    }
}
