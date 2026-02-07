package com.group2.assignment2.model;


import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
@Table(name="Books")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; //Notice "Long" and not "long"

    @Column(nullable = false)
    private String title;

    private String description;

    @Column
    private String published_year;

    @Column(nullable = false)
    private String author;

    @Enumerated(EnumType.STRING)
    @Column
    private Category category;
}
