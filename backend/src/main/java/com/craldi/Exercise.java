package com.craldi;

import java.util.UUID;

public class Exercise {

    private final UUID id;
    private final String name;

    private Exercise(UUID id, String name) {
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public static Exercise create(String name) {
        return new Exercise(UUID.randomUUID(), name);
    }
}