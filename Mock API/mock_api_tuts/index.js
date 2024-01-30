// const express = require('express');
import express from "express";

// const { faker } = require('@faker-js/faker');
import { faker } from "@faker-js/faker";
import { jsonServer } from "json-server";
import lodash from "lodash";

const app = express();
const jsonServer1 = jsonServer;
const _ = lodash;

app.get("/users", (req, res) => {
  res.json([
    // { id: 1, name: 'Manish', age: 23 },
    // { id: 2, name: 'Ruchit', age: 22 }
    _.times(10, () => {
      return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
      };
    }),
  ]);
});

// app.get("/users/100", (req, res) => {
//   res.json([
//     { id: 1, name: "Manish", age: 23 },
//     {
//       id: faker.string.uuid(),
//       name: faker.internet.userName(),
//       email: faker.internet.email(),
//     },
//   ]);
// });

app.use("api/", jsonServer1.router("db.json"));

app.listen(3000, () => {
  console.log("Hello! My name is Manish");
});
