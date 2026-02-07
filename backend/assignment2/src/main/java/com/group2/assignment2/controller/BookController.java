package com.group2.assignment2.controller;

import com.group2.assignment2.model.Book;
import com.group2.assignment2.model.BookRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.InvalidPropertyException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class BookController {

    @Autowired //an annotation for automatic dependency injection
    private BookRepository bookRep;


    @PostMapping("/books")
    public ResponseEntity<Book> createBook(@RequestBody Book newBook){
        try{
            if(newBook.getTitle().isEmpty() || newBook.getAuthor().isEmpty()){
                log.error("Missing fields");
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            Book bookObj = bookRep.save(newBook);
            return new ResponseEntity<>(bookObj, HttpStatus.CREATED);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
