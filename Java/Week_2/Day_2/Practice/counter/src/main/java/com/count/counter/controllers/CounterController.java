package com.count.counter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CounterController {

    private int counter = 0;

    @GetMapping("/counter")
    public String showCounter() {
        return "counter.jsp";
    }

    @GetMapping("/increment")
    @ResponseBody
    public String incrementCounter() {
        counter++;
        return "Counter incremented to: " + counter;
    }

    @GetMapping("/incrementByTwo")
    @ResponseBody
    public String incrementByTwo() {
        counter += 2;
        return "Counter incremented by 2 to: " + counter;
    }

    @GetMapping("/reset")
    @ResponseBody
    public String resetCounter() {
        counter = 0;
        return "Counter reset to: " + counter;
    }
}
