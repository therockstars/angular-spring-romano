package com.trs.tst;

import org.springframework.stereotype.Service;

/**
 * Created by shajee on 17/5/18.
 */

@Service
public class MathService {

    public int sum(int a, int b) {
        int val = a + b;
        System.out.println("<<< The Return Value >>>>>> = " + val);
        return val;
    }

    public int sub(int a, int b) {
        return a - b;
    }

    public int mul(int a, int b) {
        return a * b;
    }
}
