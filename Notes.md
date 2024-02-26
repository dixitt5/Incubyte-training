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

## Features can be added in Micronaut Project
1) `Jackson-databind`
2) `data-jpa`
3) `Liquibase`
4) `http-client`
5) `properties` or `yaml`
6) `hikari`
7) `assertj`
8) `mockito`
9) `mariadb`
10) `junit-params`
11) `mockserver-client-java`
12) `testcontainers`
13) `validation`
14) `micronaut-test-rest-assured`

# Docker
- Start the docker desktop app to start the docker engine.
- To run docker in the Micronaut project type command `docker compose up`

# Plugins
- `Google-java-formatter` in IntelliJ to format java code.

## Homework
- Learn Design Pattern. Head of design.


# Day-9 [2/2/24]
# Micronaut
- Route/Url is for API.
- Class/Entity is for database.

## Liquibase
- Keep one query in one changeset.
- 

# Day-10 [5/2/24]

## Levels of Testing
*Top level*
1) UI Manual 
2) Acceptance Testing
3) E2E
4) Contract Testing
5) Integration testing
6) Unit testing

*Bottom level*

## Integration Testing
- You don't mock anything
- Here you test outside of your code.
- You test your APIs from outside to check how it works.

## E2E (End To End)
- Used to test servers using UI itself.
- Here also we don't mock anything.

## Other Testings
1) Spike testing
   - Here you suddenly increase the load.
2) Gradual testing
   - Here you gradually increase the load.
3) Stress testing
   - Here you increase and then maintain the load for a longer period.

## Out-siding Testing in TDD
- This is done by integration testing.

### Integration Testing in Micronaut [Testing our Product API]
*Features to add: `micronaut-test-rest-assured`, `mockito`, `testcontainers`*
#### To Test an API using RequestSpecification
- spec.given
  - context
  - when
  - then
  - extract

# Today's Summary
- Learned about the Integration testing.
- Difference between Integration and Unit testing.


# Day-11 [6/2/24]

# GIT

## Hashing
- Git uses the SHA encoding to hash the uploaded data to check the similarity or differences between files and their lines.

## Author
- The one who pushes the file first that is the Author.
- Anyone who pushes afterward they are called commiters.

## Git Commands
### git log
- `--pretty`: This option can be used to display log in various different ways.
- `--oneline`: This option will display commit logs in one line
- `-n5`: This option will show the number of commits to show; like here we are showing 5 commits.
- `--stat`: It will display all the files that have been committed.

## Conflicts
- There are two ways to resolve conflicts
  1) Merge
  2) Rebase

## Diff^ bet^ checkout & switch
- checkout will allow access to every commits and also can create as well as switch between branches.
- Whereas the switch command does not provides access to all commits. It only gives access to the latest commit.


# Day-12 [7/2/24]

## Source Tree
- It is an external tool for github.

## Documentation
- 


# Day-13 [8/2/24]

Differences:
### Other VCS
- File based changes
- Server

### Git

#### Snapshot
- Miniature file system
- The state of the whole project

#### Integrity Hash
- SHA-1 - 40 char long checksum
- checksum before saving and ref with checksum
- no information can be lost in transit or corruption without git detecting

#### Adds data
- Almost nothing that is not undoable

#### States
- Committed, Modified and Staged
- `.git` - database
- working directory - single checkout of the project - decompressed to use and modify
- staging == index == cached

#### Git config
- `~/.gitconfig` - global
- `~/etc/gitconfig` - for every user - `--system`
- `~/proj/.git/config` - project based

#### Commit
- log
- amend
- `git rm` == `rm` + `git add <deleted_file>`
- `git mv` == `mv` + `git add` + `git rm`
- `reset` - staged file
- `checkout` - modified file

#### Remote
- `push` - remote branch
- `show`

#### Tag
- lightweight - pointer to commit
- annotated - full objects in git database - signed and verified with GPG

#### Branch
- Lightweight pointer to commit
- How does git know which branch you're on
- Best practices
- Merge
- Fast forward
- Three way merge - creating new commit
- Remote branches
- Delete remote branch - `git push origin :branchname`
- Rebase

#### Stash
- Stack
- Create branch from stash - `git stash branch <branchname>`

#### Changing multiple commits
- `rebase -i`
- drop
- squash
- split


# Day-15 [12/2/24]

## Terraform


### Provider
- It requires atleast one provider to build anything.
- It also need details like provider's region and profile.

### Cloud Development Kit
- 

### Resourse 
- Every terraform resourse is structured exactly the same way.

### Terraform Command line
1) terraform init
    - It downloads a file which includes binary to setup. 
2) terraform plan
    - Preview your changes with terraform plan before you apply them.
3) terraform apply
    - It runs a plan and then if you apply yes, then it makes the changes.
4) terraform destroy
    - If you approve then it destroys your infrastructure.

### Command to get all profiles
`aws configure list-profiles`
- If only one profile exist then it returns 'default'.

## Steps to setup infrastructure
1) Specify the cloud service provider. In our case it is AWS.
2) Create an instance.


# Day-16 [13/2/24]

# CI/CD
- Continous Integration / Continous Delivery and Continuous Deployment
1) CI
    - Build
    - Test
    - Artifact
2) CD
    - Staging
    - Production

- For reference [CI/CD](https://resources.github.com/ci-cd/)


# Day-17 [14/2/24]
## 


# Day-20 [19/2/24]

## Ruby
- We can't overload methods, but can override methods.
- Supports overloading for operators like '='


### Attribute Reader and Writer and Accessor
1) `attr_reader: ` :- It is used to declare instance variable with their getters.
2) `attr_writer: ` :- It is used to declare instance variable with their setters.
3) `attr_accessor: ` :- It is used to declare instance variable with their getter and setters both.

### gets.chomp

### Inheritance
eg. class Car < Vehicle
- Ruby supports only single inheritance same as java.
- BEST PRACTICE TO INHERIT IS; to declare a module and then include them into the class.

### Class methods
eg. def self.do_something(var)

### Instance methods
eg. def do_something(var)


# Day-21 [20/2/24]

## Ruby Task
- WAP that has some modules outside of the driver prog and require them into the driver prog to use them.

## Add to Learning planner
- Read accelarate metrics book.
- State of Devops Paper by google.
- Paper on devex.
- Paper on Space.

## Books suggested
- software engineering at google
- SRE at google

## Devex (Developer-Experience)
- Dimentions are (also pillars of Devex):
    1) Feedback loop
        - CI stages:
            1) Build
            2) Test
            3) Security checks
            4) Deploy to different envs.
    2) Flow state
        - The state of work when you get deeply into your work.
        - How fast and better the information is being passed.
    3) Cognitive load
        - Give proper importance to the work load, don't jump to the easiest job first.
- Deploy:- means now it is avialable everywhere.
- Release:- means now the project is available to use to everyone.
- Market Productivity:- means something that made the entire market become more productive. (eg. ChatGPT and other AI tools)


#### Our Idea to test the Sout
- Either can check the returning value from the Sout or can check if something is logged?

### E shaped Knowledge
- How well do you know something like Technology or any skill.
- And how in-dept do you know about it.

## How to build a Team?
Budget is of 40-45 people.
- What people do we need?
    1) Technician (Hardware person)
    2) Platform
    3) 
- What roles?
- How many people/role?
    1) 2
    2) 2
- What will be the team structure?
- Project assignment!

## Feedback for the presentation:
- Too many unrelated jobs
- No team structure
- No team members count
- Each product must have individual slide
- Team size should be slightly bigger.

#### Try understanding more about DevOps.
- Its Topologies and Types.

### Conway's Law
- The way teams are organized and how they communicate with each other will often be reflected in the structure of the software they produce.
### Inverse Conway's manuever
- Structure the team according to the code or need of the modules.

## Ruby [Rails Project directory structure]
- Gems are like Jar files of Java.

## Include multiple classes into one class
- Modules are used to include multiple classes into one.

## Create new Rails project
- Use command 
```
rails new <project_name> -T
```
- There are further options like `--css=tailwind` and `-d=postgresql`

## Rails
- It also supports ORM (Object Relationship Modelling)
- _rspec_ is used for tesing in Rails.
- _faker_ is used to generate fake data for testing.
- _factory-bot_ is also used with _faker_.

## Scaffolding

## Routes
- To view all routes that are created use command 
```
rails routes
```

## Partial files
- They start with '_' eg. _form.html.erb
- To understand, they are similar to React Components.

## DB Migration
- The migrations of the db created in rails are rollbackable.
- Using `rake` we can rollback a db query.

---

# *Tomorrows' work*
- Outside-In
## *Other Talks*
- Contact testing
- Testing with Zombies - {Need to talk about it}
- Reach feedback


# Day-22 [21/2/24]
## Refactoring - using Java-by-comparison repo
1) Write meaning variable names.
2) Use capitalised var names for global vars.
3) Extract methods
4) Avoid primitive obsession
5) Gaurd clause (when conditions are used to early return in methods)
6) Extract type for a class | Replace Type Code with Class
7) Move method
8) Single responsibility principle
9) MAX indentations 2 :- Start refactoring from the deepest indentation and then come to the shallowest.
10) Inline method
11) Remove commented code (only unused code)
12) Remove duplication
13) Manage symmetry
14) DAMP (Descriptive And Meaningful Phrases)

### Refactoring suggestions
- If implementing equals() method then one should apply hashCode() method also.
- Don't put logic in tests.
- Its okay to repeat yourself while writing tests.

## Screaming architecture
- When the project architecture explains itself by simply looking at it, it shows its business flow.

## Fail first
- Before writing the business code in any method, put some gaurd clause to throw exceptions if any are about to be raised.
- Reason is to prevent performing important actions such as file IO or DB operations before raising exceptions. Because when the exceptions raises the method is called to be failed and if we perform import actions before failing then it is waste of resources and also the execution time extends.

## Zombies testing
Z – Zero
O – One
M – Many (or More complex)
B – Boundary Behaviors
I – Interface definition
E – Exercise Exceptional behavior
S – Simple Scenarios, Simple Solutions 

## Rails
### Save Exclamation
- There are two types:
1) Save :- It returns boolean if something happens or not.
2) Save Exclamation :- It raises exception if something doesn't happens.

### Polymorphic Relations
- Instead of creating multiple columns for just one type of value; 
    eg. Comments are using at multiple places and the comments table is storing ID of the table where it is being used. Lets say PostId or OtherFeildId in comments. So instead of checking whether the columns of the PostId or OtherFeldId is null or not, we can create only two columns, One for the Object_type (PostId or OtherFeildId) and Second for its ID. Now just check for the Object_type and go its table with its corresponding ID.

### Rake
- It holds commands (static as well as custom) which are used to run in our rails project.
- These commands can start running tasks for the commands. 

## Books Sugessted
- Tidy (for clean code)
- Working effectively with legacy code.
- Mythical man month (Read in future)
- Hyrum's law

# HomeWork
- Sonar cognitive complexity PDF
# *Tomorrows' work*
- In RoR, re-create everything from scratch without using scaffolding


# Day-23 [22/2/24]
## Weather App in Micronaut with Outside-In
API used:
http://api.weatherapi.com/v1/current.json?key=6180f647971943808b935931242202&q=London&aqi=yes

## Why Outside-In?
1) Requirements gets clear
2) Easy testing from frontside

## Contract testing
- It is used when the response structure breaks.
- 

## Re-Creating Rails project from scratch
These steps will create a new project.
1) Verify ruby, rails and sqlite3 are installed. If not then install all.
2) Create new project by using command `rails new <project_name>`. Now cd into the newly created project folder.
3) Run `bundle install` for further setup. if error occurs then try with sudo.

Generating MVC.
1) To generate a controller use command
```
rails g controller <controller_name> <action_name>
```
2) 

## Rails
- To check what query is being creted use command
```
<table_name>.<method_name>().to_sql
```
- To run a custom query on a table use command
```
<table_name>.find_by_sql()
```
- `class << self` this will create every method in the class 'static'


## Useful Tools
1) [Decision Making](https://untools.co/)

## Books
- Making Software


# Day-24 [23/2/24]

- High Quality :- 
- Opportunities of feedback
    1) Skill
    2) Discipline
    3) Conduct
    4) Communication
    5) Preparedness
    6) Appropriateness

## Reach Feedback
- R - Real time
    - Give feedback on time. Late feedback is not useful.
- E - Express Intent
    - Why was the feedback needed. The Why cause for the feedback.
- A - Actually happened
    - Fact, Feeling, Need. Not all three togather, but the actual reason for giving feedback. Kya zaruarat padi ki feedback dena pada.
- C - Consequences
    - What may/will happen if feedback is not given.
- H - Help offered
    - What solution was offered to help them to improve for what happened.
    - Best way to do this is to put the needy person to that point where they themself seek for the solution and then actually find one on their own.

## How to take feedback
1) Listen.
2) No puppeteering.
3) Don’t defend or explain.
4) Ask only clarifying questions
5) Don’t make promises on the spot.
6) Thank the feedback giver.

## Rails
### Gemfile
- This file is used to manage the modules, plugins and their versions.
- It also installs the modules or packages.
- You can also specify the version range for modules or plugins.
- It can automatically select the versions for any of them.
- We can also smartly specify the main version, then it can smartly install the available version.
eg. gem 'rspec-rails', '~> 6.1.0'
    gem 'faker'
    gem 'factory_bot'
    gem 'rubocop'
    gem 'brakeman'

### RVM (Ruby Version Manager)
- It is similar to NVM.
- 

### If any command doesn't work
then use [Only for rails]
```
bundle exec <rest command>
```

### RSpec test
Installation
```
rails generate rspec:install
```
Generate test for a model
```
rails generate rspec:model <model_name>
```
#### Faker repo [link](https://github.com/faker-ruby/faker)

#### To run tests...
- run all tests in the project
```
rspec
```
- run all tests in a test file
```
rspec spec/models/<spec_file>.rb
```
- run a test of a specific scope. And also same to run a single test.
```
rspec spec/models/<spec_file>.rb:<line_number>
```

### Convention for rails testing
- `describe` describes that the forward tests are going to test a specific method
- `context` describes that the forward `it` tests are about to test various situations/possibilities for a specific method.
- Provide `let` vars in `context`.

### Feature flag
- A flag is used to detect that whether the feature is enabled or not.
- We can create a condition which checks the flag and then we can specify the behaviour of our code.

## Doubts
1) Why ruby 'requires' modules and adds their code in the same script. Any specific reason?
2) article.save! <--What this exclamation do?
    - Ans: `article.save` and `article.save!` both checks validations provided in the model. But `article.save!` will immediately throw error as it fails to validate any field.

# HomeWork
- `throw new UnsupportedOperatorOperation()` to add a Live Template in IntelliJ whenever a new method is created.
- Perform CRUD operation using Outside-In testing in Micronaut. (Prefer doing in the tech of your assigned project)
- 15 min video of cucumber school on 3 amigos. [click here](https://cucumber.io/school/)

After Homework is over then a meet with narendra and akshay too.

# For next meeting with Sapan
- Pairing techniques
- 

# Another technique for better communication
- Take some time to first think and arrange your thoughts into points.
Need to try this to get other interest while I talk.
