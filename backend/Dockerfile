FROM gradle:jdk10 as builder

COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build

FROM openjdk:10-jre-slim
EXPOSE 8080
COPY --from=builder /home/gradle/src/build/libs/craldi-0.0.1.jar /app/
WORKDIR /app
ENTRYPOINT ["java","-jar","craldi-0.0.1.jar"]