# Micronaut

Framework to create APIs like express for nodejs

- Ensure you have Java Development Kit (JDK) installed on your system.
- Install Gradle, a build tool for Groovy.
- Download and install the Micronaut framework (Follow instructions over their page).
- Run the application using the "gradle run" command.

- Micronaut is designed for building modular, easily testable microservice applications.
- It is cloud-native and supports distributed configurations.
- It offers built-in support for creating REST APIs.
- It incorporates dependency injection.
- It provides a non-blocking HTTP server which allows for efficient use of resources.
- It supports multiple languages including Java.

# Spring vs Micronaut

- syntactical is same, names might change
- for every annotation, injection is done at compile time, spring does at runtime
- micronaut is suitable for reactive programming
- against own implementation, we don't need to create own server here
- slower compilation, faster startup

# Singleton

- single object is created on its own, and if it is passed in constructor, and puts the instance in the constructor
- scans entire project, going over all the dependencies and creates the dependency tree and injects the instances after creating them at compile time only. Spring does at runtime
- if we use a class for injection in constructor, but dont make it @Singleton, it shows warning and status 500 error
- Bean-  Singleton in J2EE

### CrudRepository

- Extend to use the respository

# TDD

## Unit Testing

Unit Testing is a level of software testing where individual components of a software are tested. The purpose is to validate that each unit of the software code performs as expected.

## Integration Testing

Integration Testing is a level of software testing where individual units are combined and tested as a group. It aims to expose faults in the interaction between integrated units.

## End-to-End Testing

End-to-End Testing is a methodology to test whether the flow of an application is performing as designed from start to finish. The purpose of this testing is to simulate the real user scenario and validate the system and its components for integration and data integrity.

### Acceptance test

For validating product after it is ready

### UI manual testing

UX tests.

### Key notes:

- there is a Test folder inside your micronaut project which will help to write tests and It wont go to the production because that does not make any sense.
- Write the tests there for the specific packages as you have in the main folder.

# Database in JAVA

JPA (Java Persistence API) is a Java specification for accessing, persisting, and managing data between Java objects and a relational database. In Micronaut Gradle, you can integrate JPA to handle database operations. Micronaut's seamless integration with JPA makes it easy to work with databases, providing a high level of abstraction over low-level SQL queries. With Micronaut's compile-time data access toolkit, you can easily perform CRUD operations, making it an excellent choice for database management.

- No need to write different logic to store in database, just use the anotations while creating the classes and that will help in storing the data in database.
- creates a wrapper around entity, doesn't create implementation

### Test containers.

Test containers run the docker containers and helps you test the files and helps to mock the behaviour of the database so that you do not need to make changes to actual database and yet you will be able to test the apis with that database.

### Liquibase

Liquibase, when integrated with Java Micronaut and Gradle, offers a powerful and flexible solution for managing database schema changes. This combination is particularly beneficial for teams looking to maintain a clear history of database modifications, ensure consistency across environments, and automate deployment processes. In the context of Micronaut—a lightweight, Java-based microservices framework—Liquibase fits seamlessly, enabling developers to define database changes in a version-controlled manner.

  Things to look into

- Inside your directory go to the resource folder, resources > db> create your folder and add the sql files there.
- Do update your sql foders in the changelog schema and liquibase-changelog.xml.

### Maria DB

we used mariadb as an sql option here, mariadb is an open source alternative for sql, when oracle bought sql, the founder of the sql forked the sql and created this open source alternative and named it after his daughter.