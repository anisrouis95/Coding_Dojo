package com.gold.ninja_gold;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class ninja_controller {
    @GetMapping("/")
    public String index(Model model, HttpSession session){
        if (session.getAttribute("gold")==null) {
            session.setAttribute("gold",0);
        }
        if (session.getAttribute("log")==null) {
            session.setAttribute("log",new ArrayList<String>());
        }
        model.addAttribute("gold", session.getAttribute("gold"));
        model.addAttribute("log", session.getAttribute("log"));
        return "index.jsp";
    }
    @PostMapping("/processGold")
    public String processGold (String action, HttpSession session){
        int gold = (int) session.getAttribute("gold");
        List<String> log=(List<String>) session.getAttribute("log");
        int earnedGold = 0;
        String location = "";
        switch(action){
            case "farm":
                earnedGold = getRandomNumber(10,20);
                location = "Farm";
                break;
            case "cave":
                earnedGold = getRandomNumber(5,10);
                location = "Cave";
                break;
            case "house":
                earnedGold = getRandomNumber(2,5);
                location = "House";
                break;
            case "quest":
                earnedGold = getRandomNumber(0,50);
                location = "Quest";
                break;
        }
        gold += earnedGold;
        String timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        log.add("Earned "+ earnedGold+ " gold from "+ location+"("+ timestamp+ ")");
        session.setAttribute("gold", gold);
        session.setAttribute("log", log);
        return "redirect:/";
    }

    private int getRandomNumber(int min, int max) {
        return (int) (Math.random()*(max-min+1)+min);
    }


}
