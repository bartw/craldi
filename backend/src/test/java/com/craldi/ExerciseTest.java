
package com.craldi;

import java.util.UUID;

import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

import reactor.core.publisher.Mono;

import com.craldi.Exercise;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExerciseTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    public void getAll() {
        webTestClient.get().uri("/exercises").accept(MediaType.APPLICATION_JSON_UTF8).exchange().expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON_UTF8).expectBodyList(Exercise.class);
    }

    @Test
    public void create() {
        String name = UUID.randomUUID().toString();

        webTestClient.post().uri("/exercises").contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON_UTF8).body(Mono.just(new CreateExercise(name)), CreateExercise.class)
                .exchange().expectStatus().is2xxSuccessful().expectHeader().contentType(MediaType.APPLICATION_JSON_UTF8)
                .expectBody(String.class);

        webTestClient.get().uri("/exercises").accept(MediaType.APPLICATION_JSON_UTF8).exchange().expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON_UTF8).expectBody(String.class)
                .consumeWith(result -> Assertions.assertThat(result.getResponseBody()).contains(name));
    }
}