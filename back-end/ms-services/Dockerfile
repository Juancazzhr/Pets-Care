FROM maven:3.9.5-amazoncorretto-21 AS build

RUN mkdir project
COPY . project/
WORKDIR project
RUN mvn clean package -DskipTests

FROM amazoncorretto:21-alpine3.18-jdk
RUN mkdir app
COPY --from=build /project/target/ms-services-0.0.1-SNAPSHOT.jar /app/ms-services-0.0.1-SNAPSHOT.jar
WORKDIR app

RUN apk add --no-cache bash curl jq

ENV MS_SERVICES_CONFIG_SERVER_URL=http://localhost:8888
ENV MS_SERVICES_PROFILE_ACTIVE=dev
ENV MS_SERVICES_SERVICE_URL=http://localhost:8761/eureka
ENV MS_SERVICES_HOSTNAME=ms-services
ENV MS_SERVICES_PORT=8001
ENV MS_SERVICES_DB=''
ENV MS_SERVICES_DB_USERNAME=''
ENV MS_SERVICES_DB_PASSWORD=''

EXPOSE ${MS_SERVICES_PORT}

LABEL maintainer="Juliana"
LABEL authors="C2 Team 6 PI Specialization"
LABEL description="MS Services Service"

SHELL ["/bin/bash", "-c"]
CMD ["java", "-jar", "ms-services-0.0.1-SNAPSHOT.jar"]

