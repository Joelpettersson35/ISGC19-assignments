package com.group2.assignment2.validation;

import com.group2.assignment2.model.Category;

public class Validator {

    //inspired from: https://www.baeldung.com/java-search-enum-values
    //checks if the incoming string matches with any of the enum values
    public static Category validateCategory(String category){
        for(Category c: Category.values()) {
            if (category.equalsIgnoreCase(c.name())) {
                return c;
            }
        }
        return null;
    }
}
