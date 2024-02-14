# what is rendering

# rendering patterns
- client side
    - server sends json when api is called, and frontend js renders the entire html for the browser
- server side
    - template file, converted to html and sent to client on every request

# react 
- js library
- provides functions which you want to use
- not opinionated about structure
- fetch json from backend

# virtual dom
- make changes in the virtual dom
- make changes in actual dom when needed

# vite
- module bundler
- optimized prod build, by converting the files to bundles with simpler, minify, compress

- increases offescation
- cannot reverse engineer code, classnames etc.
- does not compress html, css
- build src to dist after bundling
- only take used part of library

- live reload

- turbopack, webpack are alternatives

# swc
- compilation tool
-  based on c++ gcc architecture
- better(smaller) and faster compilation

# package.json
- manages dependencies of project

- basic info
- scripts (shorthand)
- dependencies (prod)
- devDependencies

- ^, ~ vague dependency version

# package-lock.json
- push to github
- maintain exact version of dependencies
- recreated when npm i is executed
- exact dependency being used

# lint
- eslint
- find error of code
- safety check before running

# ctrl shift j -> inspect
- sources - backend code 
- service workers (background activity)
- localStorage - 2-10mb max

- simulate spped using network throttling dropdown

# package manager
- npm
- yarn (faster)
- performant nom (pnpm) -> cache dependency in one project so that you dont have to use it anywhere else

# cdn
- cached in browser, so not fetched again on reload
- faster loading from closest location

# component
- function which returns a html (jsx)
- reusable
- className
- style={{
    font-family: 'Arial'
}}
- dont call component function directly

- variable replacement: using { var }

# document command in console
- fetch entire dom

# App
- custom html tag, assume
- use as: <App />

# map and key
have to provide key to each element while using map(), so that it can rerendered specifically

---
# mob review
- 3 or more people in pair programming

# ILD pair programming practise
- implementation
- location
- describe

# change document formatter shortcut
- ctrl p -> > ->format document with 
- shift alt f
- enable eslint formatting in settings 

# return type of component
- JSX.Element
- ReactElement
- HTMLDivELement

# structure of project
types
models
pages - parent files (mapped with url)
components - sub components which are used in pages

# enum in ts
- enum Type{
    Grass, Fire, Water, Rock
}

# rename shortcut 
- f2

# arrow function shortcut
- rafc 

# mapping enum
- make a object, with enum as key and their string as value
- make function with the enum prop as argument, and get value from mapping of enum and string

# hooks

# state
- react does not know when changes are made
- we need to maintain state, so that when changes are makde, it is rerendered
- useState

# useEffect
- callback
- dependency array
- infinite calls (all elements are rerendered again and again on state change of any element (data returned changes))

# promise / async await

# fake api call

# bootstrap
npm i bootstrap

# flexbox/grid

# passing child content
between <Com> and <Com />
passed as special prop called children: JSX.Element

# 

# eslint setup 
- npm init @eslint/config 

- ctrl alt l -> formatting
- ctrl w -> increase scope, ctrl shift w -> decrease scope of select
- ctrl space -> suggestions
- shift shift -> search
- shift fn f6 -> rename
- live templates 

# axios
- npm i axios

# custom hooks

# react router

- npm i react-router-dom

- create a file named Routes.ts

- * -> any route
- createBrowserRouter ([
    {
        path:
        element:
        children: 
        errorElement:

    }, 
    {

    }
])

- useNavigate() > go to other function

- useParams() > returns params

- <RouterProvider /> to wrap the router

- <Navigate to>

- advantage
url changes
built in methods
query params
error fallback
useNavigate()
outlet

# global state management
change one component on change in another
prop drilling

RouteContext
createContext

RouteContext.Provider
useContext(RouteContext)

# interceptors

- intercept request before it goes out of app
- axios.interceptors.request.use()


# bundler 
- minify the code and used dependencies

# swc
- compiler that converts ts to js for all browsers
- based on rust

# public
serve public folder without restriction
server runs on src folder
directly available in url

# vite 
serves all files and bundles dependency

# webpack
bundles every file

# browser
automaticaly bundles ts to js

# create prod build
npm run build
creates dist folder after bundling
images are put as it is in dist folder, could use cdn for them

# npm run preview
uses dist folder to display the preview of prod build

# accessibility
- button - read by screen reader during hover -> aria-label

# responsiveness

# bootstrap
css framework and js library

bootstrap includes full file in the final build, used or not
component based

npm un bootstrap

# tailwind
tailwind bundles efficiently
high customization

dark theme
sys theme
responsive
grid/flexbox

# hw

- implement search and pagination - api with name (full search) | api with offset
- convert to tailwind | responsive | dark and light (without context)
- custom styles in tailwind in the config file (ml-md, ml-sm etc.)
- clone social media page (for css) [optional]