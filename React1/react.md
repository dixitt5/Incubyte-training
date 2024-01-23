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

# 
have to provide key, so that it can rerendered specifically


---
# mob review

# ILD
- implementation
- location
- describe

# ctrl p -> > ->  

# 
- JSX.Element
- ReactElement
- HTMLDivELement

# 
types
models
pages - parent files (mapped with url)
components - sub components which are used in pages

# enum in ts
- enum Type{
    Grass, Fire, Water, Rock
}

# rename 
f2

# arrow function
rafc

# mapping enum

make a object, with enum as key and their string as value

make function with the enum prop as argument, and get value from mapping of enum and strig

# state
react does not know when changes are made
we need to maintain state, so that when changes are makde, it is rerendered
