package com.group2.assignment2.controller;

import com.group2.assignment2.model.Book;
import com.group2.assignment2.model.BookRepository;
import com.group2.assignment2.model.Category;
import com.group2.assignment2.model.CreateRequest;
import com.group2.assignment2.validation.ErrResponseBody;
import com.group2.assignment2.validation.Validator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.InvalidPropertyException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.autoconfigure.JacksonProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tools.jackson.core.*;

import java.util.Optional;

@Slf4j
@RestController
public class BookController {

    @Autowired //an annotation for automatic dependency injection
    private BookRepository bookRep;

    @GetMapping("/books")
    public ResponseEntity<?> getAllBooks(){
        return new ResponseEntity<>(bookRep.findAll(), HttpStatus.OK);
    }

    @GetMapping("/books/id")
    public ResponseEntity<?> getBookById(@RequestParam Long id){
        Optional<Book> book = bookRep.findById(id);
        if(book.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @DeleteMapping("/books/id")
    public ResponseEntity<?>deleteBook(@RequestParam Long id){
        //check if the book exists before deleting it
        Optional<Book> book = bookRep.findById(id);
        if(book.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        bookRep.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/books")
    public ResponseEntity<?> createBook(@RequestBody CreateRequest request){ //type "?" so we are not limited to return only type "Book"
        try{
            if(request.getTitle().isEmpty()) {
                return new ResponseEntity<>(new ErrResponseBody(400, "Title is required"), HttpStatus.BAD_REQUEST);
            }
            if(request.getAuthor().isEmpty()){
                return new ResponseEntity<>(new ErrResponseBody(400, "Author is required"), HttpStatus.BAD_REQUEST);
            }
            if(request.getDescription().length() > 500){
                return new ResponseEntity<>(new ErrResponseBody(400, "Description length too long"), HttpStatus.BAD_REQUEST);
            }

            Category category = Validator.validateCategory(request.getCategory());
            if(category == null){
                return new ResponseEntity<>(new ErrResponseBody(400, "The given category is not supported"), HttpStatus.BAD_REQUEST);
            }

            //saves the book in the datasource (H2 database)
            Book bookObj = bookRep.save(new Book(
                    null, request.getTitle(),
                    request.getDescription(),
                    request.getPublished_year(),
                    request.getAuthor(),
                    category));

            return new ResponseEntity<>(bookObj, HttpStatus.CREATED);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
