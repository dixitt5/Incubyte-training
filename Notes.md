# Day-1 [22/1/24]

## Intro to TypeScript
- Typescript need to be compiled first before using it.
- ts file is compiled and converted into a js file.
- Transpanner converts is used to convert the code from one langusge to another.

- const name: string = "john"  -> This is called type annotation to specify the type of the any variable.

## Classes
- Same as javascript.
- Constructor shorthand -> constructor(private _name: string, private age: number) {}
- Shorthand for getter & setter methods
    - get name() {return this._name;}
    - set name(name: string) {this._name = name;}

### Task
- Create an interface named shape and create two classes implementing it with the names Circle & Rectangle. The interface should have method named area() & perimeter().
- Do same task as above task but change the interface into Vehicle and create two classes using it namely Bike & Car.

## type Unions
- To provide options for a variable of more than one type but not all.
eg. type StringOrNumber = string | number;

### Optional type
- It can be used to specify a variable with a type or undefined.
eg. interface Person {
    salary?: number;
}

- It is similar to salary: number | undefined


# Day-2 [23/1/24]
-- Missing
## React
- Topics to learn
    - Component
    - Virtual DOM


## Bootstrap
- It is a library that provides many classes to style our HTML.
- Just need to import the '/node_modules/bootstrap/dist/css/bootstrap.min.css' from its relative path.

## ESLint
- It is document formatter for JS or its libs & modules.
- We used it to format our TS files.
- We had set the trigger for this formatter on Save.
- It will also detect the errors while writing code.

## Fake API
- Today we created our first API! But it was a fake one.
- We used Promise() to replicate the API inside the setTimeout() function.
- Promise is something that guarantees a Response or an Error whenever called.


# Day-3 [24/1/24]

## React

### Children props
- If a component tag has any children then they can be accessed as 'children' attribute while passing it in props.
- If you have any children inside the tag component, they can be accessed as JSX.Element or React.ReactNode .

### Routes & Custom Routes
-- Need to understand more...

### API calling
- To call an API we used 'axios' module.
- axios module has methods like get(), post() etc. which are used to fetch the data from the URL of the API.
- We use await with the axios to wait untill the respose or rejction comes, inside an async callback function.
- The returned response is a Promise<any> type.

### useEffect()
- This method runs the callback when it detects any changes from the given variables.
- We have used this method to call API and fetch data from it.

## Web Storm
- It is a code editor for JS and its libs & modules.
- It is provided by JetBrains.
- A major advantage is that you can get many features of intelliJ IDEA.


# Day-4 [25/1/24]

## React

### React router dom
- For reference see the documentation of react-router-dom.
- Use createBrowserRouter() to create the routes. It takes an array of objects which takes three attributes such as path, element and (optional) children. We can use {path: '*'} to apply for any path which is not specified.
- To start the routing from the main page we can use `<RouterProvider router={routerObj}/>` to start the navigation.
- We can use navigate() to navigate to routes and provide arguments into URLs.
- To get the params passed in the URL we can use useParams() function.

### Global Context
- It is created using createContext().
- It uses useState() to maintain the state throughout the app.

### Intercepter
- It intercepts any request or response made by our app.
- It can help to manipulate the data of req/res before going out or entering into the app.

## Tailwind
- Refer documentation of Tailwind to see how to install it.
- We are using Vite bundler to compile our React project that's why we have to see the tailwind react with vite documentation.
- It has same classes as Bootstrap but they can also be applied into a CSS file from where we can group many properties and then apply into the element.


# HomeWork
- Search
- Paggination (use limit and offset to apply)
- Apply Tailwind to pokemon app
    - Try dark theme without global context
- Custom styles in tailwind.
- (Optional) Try replicate any page of any social-media using any CSS framwork or only CSS.


# Day-5 [29/1/24]

# Incubyte Values
## Take responsibilities for our actions.
- Automated testing
- Peer reviews
- etc.
## Keep learning
## We are guided by quality but also deliver values to clients.
## Deliver valueable softwares.

# Two types of mindset
1) Fixed mindset
2) Growth mindset

# Develop new skills
- Improve typing speed & learn more shortcuts
- Improve programming skils
    - Clean code
    - Pair programming
    - TDD
- Try to learn a new language

# Suggestions
- Start doing Katas
- Follow Kent Beck

## Express
- Installing express -> npm i express

# Mock API
- Used majorly for testing as hitting real API will cost.
- They are the dummy API which can be created using Express.
- *STEPS TO CREATE API IN EXPRESS*
    1) After installing the Express in the project directory, import `express` from `'express'` module.
    2) Create a `const` express object using `express()`
    3) Setup a server using `listen()` method on the express object. Give a port number and then open the Url (here it will be the localhost:[port-number]) in the browser. Now this `listen()` will listen to any request made on the given port.
    4) Create Url routes or query using `use()` or `get()`.

## Difference betn QueryParams & Parameters
- When working with the url like "https://www.abc.com/home?users=10&offset=0"
    - This type of urls' parameters are called query parameters.
    - They can be accessed as query parameters.
- If the url type is like "https://www.abc.com/home/12"
    - This type of urls's parameters are simply called parameters.
    - This can come handy when working with REST APIs, as this is the standard to access the resources.
    - They can be accessed as parameters.
    - Usually they are used to get single resources.

## json-server
- Documentation -> https://www.npmjs.com/package/json-server
- This server is used to host the data of any json file on a port.
- To install json server use command `npm install json-server`
- To run a json file on a url use command `npx json-server db.json`

## Faker
- Documentation -> https://fakerjs.dev/guide/localization.html#individual-localized-packages
- Generate massive amounts of fake (but realistic) data for testing and development.
- To install Faker use command `npm install --save-dev @faker-js/faker`
- Installation guide -> https://www.npmjs.com/package/@faker-js/faker


# Day-6 [30/1/24]

# Java

## Record
- They are used to create same immutable objects as a class but in more convinient way.
- It reduces some lines of code to define attibutes, constructor, getter & setter.

## Sealed classes
- Controls who will implement and extend the sealed class.
- Provide a more declarative way than access modifiers to restrict the use of superclass.

## Stream operations
- Predicate is used for filter method.

# Suggestions
- Try avoiding static variables.


# Day-7 [31/1/24]

# Clean code
- 
- The Boy Scout Rule: "Leave the campground cleaner than you found it".

## Function
- A function should only have 1, 2 or in worst case 3 params.
- Give Business name to functions which describes exactly what they are doing.
- 1st rule: Make a function smaller
  2nd rule: Make it even smaller.

## DRY principle
- Don't Repeat Yourself

## Comments
- Production code must not have comments or very very less comments.
- You can use comments for regex as they are very complex to read.
- Writing Doc strings is a good practice but its hard to maintain, that's why we try to avoid it into the production.

## Magic numbers
- If you are using some number at anywhere which cannot describe itself, then try to take it into a variable the use it to increase the readability.

# MVC (Model View Controller)
- Controller -> Service -> Repository
    1) Controller:- Accepts & handles the requests from the frontend
    2) Service:- It contains main business logic. It handles the requests forwaded by the Controller and then Service takes cars of it by accessing the Repository.
    3) Repository:- It holds the storage of actual data like DB, Json, cloud etc.

# IntelliJ Env Project Setup
- Create a new project
- Select Language as `Java` & DSL(Domain Specific Language) as `Groovy`
- Make sure that we have compatibility of version like in `Module Settings` It must have same java version in `dependencies`

## What is `./gradlew`?
- It match the exact version of the of shared project. If it's not available it will first fetch the version and then run the `build`.


# TDD
- Add Key promoter plugin.
- CTRL + ALT + S for settings
- CTRL + p for Parameters expected by any method
- CTRL + SHIFT + F10 to run the tests while inside the testing class.

- Abbreviation ->
- Incubyte follows Snake Casing to write the name of the testing functions. 
eg.
```
class CalculatorServiceShould {
    @Test
    void add_2_numbers() {
        // stats.
    }
}
```
- 3As (Arrange, Action, Assert)
    1) Arrange:- Arrange the necessary vars or related data.
    2) Action:- Write the actual function which is about to be tested.
    3) Assert:- Assert/Check whether the Action fulfill the expected or not.

## Integration testing
- It checks the end-to-end flow.
- It checks whether the requested data has received or not.
- Convention for name of these testing files ends with `Test`

## Unit test
- Convention for name of these testing files ends with `Should`

### Mockito testing
- It is used for testing 


# Day-8 [1/2/24]
## POJO
- Plain Old Java Object.

# Micronaut
## Why Micronaut
- Automatically creates http server.
- Easy to handle methods like GET & POST.
- Startup is faster but compilation is slower.  

# Docker
- Start the docker desktop app to start the docker engine.
- To run docker in the Micronaut project type command `docker compose up`

## Homework
- Learn Design Pattern. Head of design.


# Day-9 [2/2/24]
# Micronaut
- Route/Url is for API.
- Class/Entity is for database.

## Liquibase
- Keep one query in one changeset.
- 