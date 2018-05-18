package com.trs.testing;

import com.trs.tst.Calculator;
import com.trs.tst.MathService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@DisplayName("Spy Bean Test")
@ExtendWith(SpringExtension.class)
@SpringBootTest //Creates the ApplicationContext used in your SpringApplication.
public class SpyTest {

    @SpyBean
    private MathService mathService;

    @Autowired
    private Calculator calculator;

    @Test
    public void spyService() {

        calculator.sum(1, 1);

        // Checks if mathService.sum() was called with 1 & 1 as args
        Mockito.verify(mathService).sum(1, 1);

        // checks if mathService.mul() was called with any int(s) as args
        Mockito.verify(mathService).mul(Mockito.anyInt(), Mockito.anyInt());
    }
}
