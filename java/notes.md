# Java

## MVC

- Controller -> Service -> Repository

## Two Libraries for Writing tests

1. JUnit
2. AssertJ

## JUnit

- JUnit is a unit testing framework for the Java programming language.
-

## Testing Pyramid

- Integration Testing : you don't mock anything(you can mock your system though), start testing the real APIs. you mock the outside system.
- End to End testing : you dont mock anything from your system, this can be tested from UI as well.
- Acceptance testing : business logic test
- Contractual Testing :
- UI manual testing : prevalent in india market

## Testing containers

- creates a docker instance and kills it after test completed

## Rest Assured - Integration Testing

- Rest Assured is a Java library that provides a domain-specific language (DSL) for writing powerful, maintainable tests for RESTful APIs.
- Example :

```java
private static String createApiCall(RequestSpecification specification) {
    String name = UUID.randomUUID().toString();
    String body = """
{
    "name":"$name"
}
""".replace("$name", name);
    String id =
        specification
            .given()
            .log()
            .all()
            .when()
            .contentType(ContentType.JSON)
            .body(body)
            .post("/products")
            .then()
            .log()
            .all()
            .body("id", is(not(blankOrNullString())))
            .body("name", is(not(blankOrNullString())))
            .body("created_at", is(not(blankOrNullString())))
            .body("updated_at", is(not(blankOrNullString())))
            .extract()
            .body()
            .path("name");
    return id;
  }
```

## Reactive Programming

- Reactive programming is a programming paradigm oriented around data flows and the propagation of change.
- Mono : 0 or 1
- Flux : 0 or more

## Mocking for Unit Tests

> Checking every component of the code independently.

> Tip: always mock the below level of the hierarchy.

```java
@Test
  public void check_creation() {
    when(productRepository.save(any(Product.class))).then(returnsFirstArg());

    Product product = productService.addProduct(new ProductRequest("FAKE_NAME"));

    verify(productRepository).save(any());

    Assertions.assertThat(product.getName()).isEqualTo("FAKE_NAME");

  }
```


