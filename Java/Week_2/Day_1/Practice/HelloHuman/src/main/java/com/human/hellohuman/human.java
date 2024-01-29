package com.human.hellohuman;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class human {

    @GetMapping("/")
    public String handleGreeting(
            @RequestParam(name = "name", defaultValue = "human") String name,
            @RequestParam(name = "lastName", defaultValue = "") String lastName,
            @RequestParam(name = "times", defaultValue = "1") int times) {

        if (!lastName.isEmpty()) {
            return "Hello " + name + " " + lastName;
        } else if (times > 1) {
            StringBuilder result = new StringBuilder();
            for (int i = 0; i < times; i++) {
                result.append("Hello ").append(name).append("\n");
            }
            return result.toString();
        } else {
            return "Hello " + name;
        }
    }
}
