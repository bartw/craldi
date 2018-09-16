
package com.craldi;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("exercises")
public class ExerciseController {

    private static List<Exercise> exercises = new ArrayList<Exercise>(Arrays.asList(Exercise.create("Push up"), Exercise.create("Burpee")));

    @GetMapping()
    public Flux<Exercise> getAll() {
        return Flux.fromIterable(exercises);
    }

    @PostMapping
    public Mono<String> create(@RequestBody CreateExercise createExercise) {
        Exercise exercise = Exercise.create(createExercise.getName());
        exercises.add(exercise);
        return Mono.just(exercise.getId().toString());
    }
}