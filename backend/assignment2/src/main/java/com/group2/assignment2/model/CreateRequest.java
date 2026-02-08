package com.group2.assignment2.model;

import lombok.*;

//this class represents the structure of the body in a POST-request
//Specifically for CreateBook
//Inspired from this YouTube video: https://www.youtube.com/watch?v=D0HZp72Ze4Y

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class CreateRequest {

    private String title;

    private String description;

    private String published_year;

    private String author;

    private String category;
}
