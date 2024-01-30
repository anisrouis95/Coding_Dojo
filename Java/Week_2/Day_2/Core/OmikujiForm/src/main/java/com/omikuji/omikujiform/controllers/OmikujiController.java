package com.omikuji.omikujiform.controllers;


import com.omikuji.omikujiform.models.OmikujiFormModel;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/omikuji")
public class OmikujiController {

    @GetMapping
    public String showOmikujiForm(Model model) {
        model.addAttribute("omikujiForm", new OmikujiFormModel());
        return "omikuji-form.jsp";
    }

    @PostMapping("/processForm")
    public String processForm(@ModelAttribute OmikujiFormModel omikujiForm, HttpSession session) {
        // Save form data to session
        session.setAttribute("omikujiForm", omikujiForm);
        return "redirect:/omikuji/show";
    }

    @GetMapping("/show")
    public String showFortune(Model model, HttpSession session) {
        // Retrieve form data from session
        OmikujiFormModel omikujiForm = (OmikujiFormModel) session.getAttribute("omikujiForm");
        model.addAttribute("omikujiForm", omikujiForm);
        return "omikuji-show.jsp";
    }
}