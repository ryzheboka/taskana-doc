---
sidebar_position: 2
---

# Modules

!! Rewrite !!

!! Make clear what the user needs !! (example: user doesn't need common)

Description
TASKANA common

The common modules provide necessary and useful tools and methods which we use in all other modules.

    taskana-common-security
    This module contains the necessary JAAS principals which are necessary for the TASKANA user and group authentication. 

    taskana-common
    This module contains basic functionality, classes and exceptions. 

    taskana-common-data
    This module contains our test and example data.

    taskana-common-test
    This module contains necessary tools and functionality useful for testings. (core + REST)  

TASKANA lib

The lib modules provide all TASKANA business logic as a Java interface. 

    taskana-core
    This module contains all business logic / functionality and is necessary for every other module. It is implemented in Java SE. 

    taskana-spring
    This module wraps taskana-core , defines Spring configurations and declares necessary beans for a usage in a spring ecosystem.

    taskana-cdi
    Analog to taskana-spring, this module wraps taskana-core. Instead of using the spring boot framework, standard dependency injection of java(CDI) is used.

    taskana-spring-example
    This module contains an example running setup using taskana-spring.

    taskana-cdi-example
    This module contains an example running setup using taskana-cdi.

    taskana-test-api
    This module contains an API for the setup and execution of TASKANA tests.

    taskana-core-test
    This module contains the tests of taskana-core. The tests are outside of the taskana-core module because of dependencies between the modules. 

TASKANA rest

    taskana-web
    This module contains our production ready Angular Frontend in the /static folder. This can be served e.g. by a tomcat web server.

    taskana-rest-spring
    This module wraps our Java API (taskana-spring) in a spring-boot application. Its main responsibility is to expose the Java API to HTTP communication. This module IS NOT a finished application. It only contains the basic functionality for exposing the Java API.

    taskana-rest-spring-example-boot
    This module is an example spring-boot application. It uses the functionality defined in taskana-rest-spring. Furthermore, it declares a simple login-page, defines authentication (it is using basic auth) and populates the database with our sample data.

    taskana-rest-spring-example-wildfly
    Analog to taskana-rest-spring-example-boot, this module is also a complete application. Instead of running as a standalone spring-boot application, it compiles as a WAR file which can be deployed on a Wildfly server. 

    taskana-rest-spring-example-common
    taskana-rest-spring-example-boot and taskana-rest-spring-example-wildfly are configured identically. Since we want to reduce code duplication we created this common module. It defines the configuration, like the login page, which both example applications use. 

 TASKANA history

    taskana-loghistory-provider
    This module implements the history SPI (Service Provider Interface). It simply logs every history event using slf4j. 

    taskana-simplehistory-provider
    This module implements the history SPI as well. Every history event is written to the same database TASKANA is connected to.

    taskana-simplehistory-rest-spring
    This module defines the functionality to access the history events, written by taskana-simplehistory-provider. Like taskana-rest-spring, this module IS NOT a finished application. It only contains the basic functionality for exposing the Java API.