FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-pets-0.0.1-SNAPSHOT.jar /app/ms-pets-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_PETS_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_PETS_PROFILE_ACTIVE=dev
ENV MS_PETS_SERVICE_URL=http://localhost:8761/eureka
ENV MS_PETS_HOSTNAME=ms-pets
ENV MS_PETS_PORT=8001
ENV MS_PETS_DB=''
ENV MS_PETS_DB_USERNAME=''
ENV MS_PETS_DB_PASSWORD=''

EXPOSE ${MS_PETS_PORT}

LABEL maintainer="Pablo"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Pets Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-pets-0.0.1-SNAPSHOT.jar"]
