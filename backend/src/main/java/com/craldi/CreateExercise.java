package com.craldi;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateExercise {

    private final String name;

    @JsonCreator
    public CreateExercise(@JsonProperty("name") String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}