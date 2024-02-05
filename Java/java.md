# shortcuts

ctrl tab - switch tab
run - shift fn f10
generate something new - (alt 1 - side tab) alt insert
copy same line - ctrl d
select - shift (u/d/l/r)
ctrl enter
ctrl p -> params
ctrl tab -> switch tab
alt enter -> context menul

ctrl alt shift l -> format

ctrl shift n
ctrl n

shift f6

sout
souf

ctrl shift right/left
ctrl alt insert -> make new in current directory
.var -> make variable

run anything -> ctrl ctrl

# records

- make immutable objects easily where every prop is final(constant)

```
import java.util.Objects;
public record record_name(data_type var1) {
    public Pokemon {
        Objects.requireNonNull(name);
    }
}
```

- canonical constructor
- reduce verbosity of classes

# rfc

- add/modify features
- proposal

# enum

- extend
- constructor

```
public enum PokeTypes{
    FIRE("fire") {
        @Override
        public PokeTypes next() {
            return WATER;
        }
    },
    WATER("water");

    // public abstract PokeTypes next();
}
```

# static

- avoid static unless you keep it constant
- otherwise it makes it difficult to test, because static remains till jvm ends

# sealed and permits

- restrict use of certain classes
- package protected - not accessible out of scope
- final class - nobody can extend

- sealed - control who can access certain classes

# abstract and interface

- cant extend multiple
- which method to access is confusing

# private and public method

# dependency injection

# hashcode and equals

```
[
    [Bucket 0] = 'key1, key3'
    [Bucket 1] = 'key2, key4'
]
```

ascii of key /2 -> allot bucket
everytime right bucket should be found, then searching
one bucket -> searching list
one bucket one item -> less seaching

# stream

- flow of data which can pass through pipe
- needs a single element or collection of elements
- pokemon.stream().filter(new Predicate)
- Predicate -> for checking
- terminal operation > no further stream ops available > compulsory

flatMap
filter
toList
stream
Stream.of
map
Stream

- better readability
- slower performance
- better maintainability

# default

- dont need to implement

# functional interface

- only one method

# lambda

# method reference

# optional interface

isPresent
get

# comparable and comparator

compareTo (this.val - o.val)

treeMap, priority queue

# iterator and listIterator

# string.format

String s = """
{"A", "A"}
"""

# reflection api

# exception

- specific exception should be used
- make your own exception
- know what each exception exactly covers
- printStackTrace() to know the exact that throws error, look for 'caused by'
- catch and throw own exception

- extends RuntimeException
- get err object -> Throwable

# gradle and maven

- maven - xml for plugins and dependencies, more verbose
- gradle is more flexible with build.gradle and settings.gradle

-cp -> used external micronaut dependencies during compilation

project and modules name - multi-module porject -> setting.gradle

module name - small characters

build.gradle
manage dependencies
proper resolution of version of dependencies
groupid, artifact id
one version of dependency for artifact

implementation and testImplementation

tasks
on build, all dependent tasks are done
jar, compileJava

up-to-date

build.gradle
core plugin and custom
plugins {
id ''
}

creates differnet folders for production code and test cases

gradle clean
gradle pokemon:clean

gradle dependencies

# clean code

- bad code with bad readability, inconsistency etc
- grand redesign
- know the authors
- boy scout rule - make the change which can improve the code base
- descriptive, meaningful and intention revealing name - var names, names should tell what purpose they serve
- follow conventions
- write code which is understandable to both devs and customers and named in business purpose
- function with less params (<3) and short in length (<15)
- function does one task only
- DRY, KISS, YAGNI (You aren't gonna need it)
- comments are not good, code should be self-explanatory
  - legal comments, informative, intent explanation is ok
  - remove redundant comments, dont use @param
  - comments are usually avoided as they become hard to maintain overtime
- regex < 70 characters, divide long regex into smaller, easier to understand ones
- magic numbers (according to use) should be kept in different var, so as to understand its purpose (no hard coding values)

# mvc

- model - schema and db access
- view - presentation and rendering of frontend
- controller - business logic

-> controller  
accept request, authentication and validation and send further to service

-> service
business logic (proper handling and making decisions on data)

-> repository
handling of data from source and give back to service

# tdd

- spot errors
- confident to update and refactor

integration testing -> working end to end for communication between C S R (do we get the expected output or not, not concerned with how data passes)
unit testing -> per layer testing (C/S/R) -> check functionality of each of the layer

# outside in tdd

# gradle

ctrl fn f9
./gradlew build
-> wrapper
-> download gradle version required
-> ask for java download
-> by using in intellij, it by default uses gradle

# test case name

filename ends with either:
integration -> Test
unit -> Should

# live templates

ctrl alt s -> live templates - expand lang -> + -> live templates -> abbreviation -> give code

# cases

- snake case in test case name
- capital first in class name
- lowercase without space and dot in package name

# test case structure

3 a's
arrange
var needed

act
call functionality

assert
write actual test

# shortcut

ctrl shift t -> create test case
ctrl shift f10 -> run test all
ctrl alt v - var
ctrl alt m - method
ctrl w - scope

# beforeEach

# beforeAll

# parameteruzed test

- one test - one behaviour
- used for checking same behaviour, boundary test cases
- for different behaviour, use different test cases even if they have the same args
- before the test where you want to use

- eg: exception test with similar check (overflow both sides) -> use this

# csvsource

# methodSource, intSource, nullSource

# assertThrows

assertThrows(Exception class, code_to_execute)

# assertJ dependency

- containsSequence
- containsExactly

- live templates and auto import enable

# @Mock

makes dummy implementation of given class

# @InjectMocks

put the mock implemenation of mock to the given class
creates instance of mock class

# @ExtendWith

add feature to existing tests
add extension 

# kata

- doing some task repeatedly for mastery and muscle memory

# with coverage
code that is covered for tests

# argument captor
