package com.group2.assignment2.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//this class is used to represent the JSON error response to the client
// Spring automatically converts this object to JSON in response
//Implemented as a DomainBean, found at https://www.geeksforgeeks.org/springboot/spring-rest-json-response/

@AllArgsConstructor
@Getter
@Setter
public class ErrResponseBody {
    private int status;
    private String message;
}
