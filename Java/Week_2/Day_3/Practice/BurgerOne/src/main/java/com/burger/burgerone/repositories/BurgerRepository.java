package com.burger.burgerone.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface BurgerRepositore {
}

@Repository
public interface BurgerRepositore extends CrudRepository<Burger, Long> {
    // this method retrieves all the books from the database
    List<Burger> findAll();

    // this method finds books with descriptions containing the search string
    List<Burger> findByDescriptionContaining(String search);

    // this method counts how many titles contain a certain string
    Long countByTitleContaining(String search);

    // this method deletes a book that starts with a specific title
    Long deleteByTitleStartingWith(String search);
}
