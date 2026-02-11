package com.group2.assignment2.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
   // https://spring.io/guides/gs/accessing-data-jpa
}
