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
