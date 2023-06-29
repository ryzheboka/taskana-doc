---
sidebar_position: 4
---

# Modules

Different functionality of TASKANA can be found in different modules. In the following article, the relevant modules for external usage are explained. The modules for internal use only are left out of the article. 

## lib

- **taskana-core** provides the main functionality of TASKANA. You can read more about taskana-core [here](java-api-usage.md)
- **taskana-spring** configures Spring so that TASKANA can be easily integrated
- **taskana-spring-example** provides an example usage of taskana-spring
- **taskana-cdi** uses dependency injection of java(CDI) for configuring TASKANA
- **taskana-cdi-example** provides an example usage of taskana-cdi

## rest

- **taskana-rest-spring** embends TASKANA in a spring-boot application. It exposes the Java API by setting up a corresponding REST-API
- **taskana-rest-spring-example-boot** provides an example application that uses taskana-rest-spring
- **taskana-rest-spring-example-wildfly** provides an example application that can be deployed on a Wildfly server

## history

- **taskana-loghistory-provider** implements the history SPI (Service Provider Interface). It uses slf4j to log every event
- **taskana-simplehistory-provider**  implements the history SPI (Service Provider Interface). It stores every history event in the TASKANA database
- **taskana-simplehistory-rest-spring** implements a REST service to expose the functionality of taskana-simplehistory-provider 

## routing

- **taskana-spi-routing-dmn-router** allows Task routing according to automated rules
- **taskana-routing-rest** implements a REST service to expose the functionality of taskana-spi-routing-dmn-router

## web

- frontend of TASKANA
