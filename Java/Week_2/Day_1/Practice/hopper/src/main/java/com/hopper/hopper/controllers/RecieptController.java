package com.hopper.hopper.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RecieptController {
    @RequestMapping("/")
    public String index(Model model){
        String name = "John Doe";
        String itemName = "Widget";
        double price = 10.99;
        String description = "A high-quality widget for various uses.";
        String vendor = "Tech Supplies Inc.";

        model.addAttribute("name", name);
        model.addAttribute("itemName", itemName);
        model.addAttribute("price", price);
        model.addAttribute("description", description);
        model.addAttribute("vendor", vendor);

        return "index.jsp";
    }
}
