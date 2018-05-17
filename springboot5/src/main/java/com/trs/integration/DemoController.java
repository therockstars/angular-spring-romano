package com.trs.integration;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by shajee on 17/5/18.
 */

@RestController
public class DemoController {

    @RequestMapping("/")
    public String helloHessage() {
        return "Hello World!";
    }

}
