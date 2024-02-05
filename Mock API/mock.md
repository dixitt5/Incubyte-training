# what is api

- interface b/w client and server
- json format

# private and public api

- private api: requires auth

## not using actual api in testing?

- security
- cost of each api call

#### solution?

- mock api
- not serving actual data, just some mock data
- req / res structure is same as actual

# why express?

- easy to use
- easy to create api
- easy routing
- middleware
- serving static files
  - cached so no processing is required

# steps to create new project

- npm init

#### version number (read)

- not ask question? npm init --yes
- install express: npm i express
- start app: node index.js

- default port: 3000
  - greater than 999 (below are occupied)

--dev
install dependency only for particular project during development

# express

# faker api

- npm i @faker-js/faker

# change module type

- package.json
  - "type": "module"
- filename: index.mjs

# nodemon

- npm i nodemon --save-dev
- package.json
  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "nodemon": "node index.js"
  },
- npx nodemon
  - fetches from cache otherwise prompts to install

# lodash

- import lodash from 'lodash';
- utility functions like array operations etc.

# json-server

json-server --watch db.json
connecting to express

# java basics with collection

# cors
