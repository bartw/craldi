
package com.craldi;

import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("exercises")
public class ExerciseController {

    @GetMapping()
    public Flux<Exercise> getAll() {
        return Flux.just(Exercise.create("Push up"), Exercise.create("Burpee"));
    }
}