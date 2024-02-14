# dependency management
- apache ant
    - apache commons -> find the required jar file and put in lib folder
- maven
  - in pom.xml, under \<dependencies\> -> \<dependency\>
    - groupid
    - artifactId
    - scope
- gradle

# groovy
- gradle file are stored in either kotlin or groovy

# java 
- less opinionated
- multithreading is easier than python and js

# pojo
- plain old java object
- getter setter, constructor, equals, hashCode, toString

# SOLID
- single responsibility

# Design Pattern
- Head First Design Pattern
- Design Pattern by Gang of Four

# Micronaut
- https://micronaut.io/launch
- gradle -> app -> run OR terminal -> .\gradlew run
- starts http server

# Spring vs Micronaut
- syntactical is same, names might change
- for every annotation, injection is done at compile time, spring does at runtime
- micronaut is suitable for reactive programming
- against own implementation, we don't need to create own server here
- slower compilation, faster startup

# Spring Native dependency
- behaves like micronaut

# Singleton
- single object is created on its own, and if it is passed in constructor, and puts the instance in the constructor
- scans entire project, going over all the dependencies and creates the dependency tree and injects the instances after creating them at compile time only. Spring does at runtime
- if we use a class for injection in constructor, but dont make it @Singleton, it shows warning and status 500 error
- 
# Bean
- Singleton in J2EE

# Jackson DataBind
- converts obj to json

# best practises 
- creating class with no constructor for set, not using setter
  - robust 
  - cannot be changed once set
- variables at the top, and constructor and methods below in class definition
- 
  - try to keep the return types consistent in the controller. return the entire object or id after save/post request instead of string/void (refer saveProduct()) | to avoid second get request for showing data after save
  - try to keep the response object different to show the response after save

# Path/Query Variable
- @QueryValue("id")
- @PathVariable
- @Body
- @Get @Post
- @Produces @Consumes

# Error
- @Error(global = true)

# ULID instead of UUID
- sorted
- has a specific format with time, unique id etc.
- ULID().nextUlid()

# MariaDB
- docker pull mariadb
- JDBC -> Hibernate ORM (own api) -> JPA api (interface - rules) -> Hibernate implement JPA (uses JDBC internally)
- -> Micronaut implements JPA (uses Hibernate internally ), provides methods for db interaction

# micronaut launch
- data-jpa, mariadb, yaml, jackson-databind, liquibase
- (try serde instead of jackson-databind)
- management
- micronaut-test-rest-assured, mockito, testcontainers, assertJ (optional)

# Features 
- java client - mariadb driver
- hikari - connection pooling - persists connectio - batch query on multiple connections
- micronaut implementation - micronaut-data -> hibernate-jpa, jpa, jdbc
- snakeyaml - readable

# J2EE - javax (oracle - ee paid) -> jakarta

# docker
- virtualization on top of host os (lightweight)
- docker image - another os container
- compose up - starts the docker images

- docker run mariadb
or
- docker-compose 
- creates a volume where db is stored, else need to create db everytime we run
expose:actual port

- can also deploy app on docker

# MariaDB and Micronaut
- @Entity
- @Table("table_name")
- @Id -> matches with table
- @Column
- @ManyToOne
- @OneToMany (mappedBy = "")
- @ManyToMany 
  - automatic mapping n every interaction

# view db 
- adminer
- dbeaver
- beekeeper

# application properties (application.yml)
- accessible in micronaut app
- one time setup
- ${datasources.default.variable_name}
- jpa: 
  - entity -> table = creates a new table and all that automatically
  - getter and setter for creating columns
  - hbm2ddl: runs 
entity - to tell hibernate that we have to map this class

#
pnpm 
npm ci (doesnt modify the package-lock.json)

# build -> creates image -> run image -> creates container
dockerfile -> build and run commands which tell what the image should do. when we use that dockerfile, docker build (dockerfile) it creates a image. run the image using docker run
can publish to docker registry. docker compose for multiple images
docker pull mariadb
pulls the image from central repo of docker

# CrudRepository
- <Entity, primary key type>

# with @Entity
- hibernate proxies are into play with Product class, cant make it record
- hibernate converts results of db into product object by mapping using getter and setter
- deserialization from db to product object
- can still work without your own getter and setter (not recommended). but still needs default constructor 
- if you have used UUIDGenerator, don't pass your own uuid
- mysql auto-increments and @Generated for autoincrement

# print in console
- using Logger
- 

# hibernate
- creates a wrapper around entity, doesn't create implementation

# mariadb
- collation string-ci (case insensitive)

# hibernate
implementation of jpa
jpa is interface
micronaut-data in on top of hibernate

# Supabase
# Swagger
# yaml
- .yml OR .yaml
- yet another markup language

# start project
start docker engine
docker compose up

# wsl error
- wsl --shutdown
- wsl --update

# jpa in yml
- only useful for testing
- remove field does not remove it from the db
- if we setup this (remove field = remove column) in hibernate, it is too risky as removing field can cause db corruption
- for testing, we use liquibase instead

# liquibase
- don't keep multiple queries in 1 changeset
  - rollback and re-migration can cause errors
- yaml and xml file are similar structure
- instead of sql file, we can use liquibase.yml. it is migration rollback friendly

- once migration is run, and we make changes to migration file, error is generated as it generates a checksum (md5) of original file. it verifies the checksum during running migration. 
- it wont know what to do with previous data. to apply new changes, make new migration.

- DATABASECHANGELOG file
  - track the different changelog, their timing and order, filename. 
- log of all changes are displayed in the console
- DATABASECHANGELOGLOCK file
  - lock for liquibase. not db lock. can make changes during still lock is there.
  - so, it goes through DATABASECHANGELOG to track the various changesets to run. then using lock, they one by one execute the changes, so that no one changeset can deadlock or bring inconsistency

# createdAt and updatedAt fields
- in entity, @DateCreated and @DateUpdated
- for date format: @JSONFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd@HH:mm:ss.SSSZ")
  - keep the formatting part in separate file, SOLID (single responsibility)
  - or formate(DateTimeFormat.ISO_OFFSET_DATE_TIME()) or LOCAL_DATE_TIME()
  - in response, createdAt and updatedAt should be should in OffsetDateTime, not String (difficult to understand and ) 
  - store time with utc and (local) timezone

# response handling
- different requests types (http, tcp) will have different controller

### checksum in s/w
- checksum by creator, installer by mirror
- to verify that the original file is being downloaded. no changes are made to s/w at mirror

# @Produces
- produces something

# Shortcuts
- ctrl f5 -> restart service
- ctrl b -> go to service
- don't ignore warnings
- run might now show right errors, build it first
- ctrl shift enter - wrap around ()
- ctrl alt shift s -> project structure
- ctrl alt s -> settings
- ctrl x -> delete line
- select class member -> f6 (move to other class)
- ctrl j -> select one occurence of something

---
# testing pyramid
- width - no of test cases, as they less time to execute

## unit testing
- test smallest unit, every small functionality
- code testing
- mock repository
## integration test
- testing of integration of each unit 
- say, one feature or interaction b/w modules
- no mocking of current functionality 
- mocking of things not directly related to current slice is mocked, even if inside system
## End 2 End
- no mocking of inside system, even if outside of the slice
- mocking of outside system
## acceptance test
- for business needs, like capabilities
- for showing after product is ready
- acts as a contract, if tests pass and system is accepted by client
## UI manual testing
- user experience test

# outside in testing
- testing starts from outer layer of system
- testing of apis
- start with integration testing

# test-rest-assured dependency
- for syntax of testing

# testContainers
- start the db, setup the docker container, and then closes the mariadb and ryuk 

# RequestSpecification
- gets the instance of RestAssured by micronaut
- given() -> context, arrange
- when() -> action, act
- then() - assert, assert

# builder pattern
- withQuantity()

# reactive programming
- flux and mono
- can run on different threads
- does not run until it is subscribed

# performance test
- spike
- gradual
- stress