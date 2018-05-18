package com.trs.tst;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by shajee on 17/5/18.
 */
@Component
public class Calculator {

    @Autowired
    MathService mathService;

    public int sum(int a, int b) {
        return mathService.sum(a, b);
    }

    public int sub(int a, int b) {
        return mathService.sub(a, b);
    }

    public int mul(int a, int b) {
        return mathService.mul(a, b);
    }
}