package com.gold.bookapi.bookapi.controllers;

import com.gold.bookapi.bookapi.models.Book;
import com.gold.bookapi.bookapi.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books/{id}")
    public String showBook (@PathVariable Long id, Model model){
        Book book = bookService.findBook(id);
        model.addAttribute("book", book);
        return "show.jsp";
    }

}
