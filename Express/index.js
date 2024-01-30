import express from 'express'
import { fa, faker, fakerEN_IN } from '@faker-js/faker';
import jsonServer from "json-server";

const app = express()


// export function createRandomPokemon() {
//     return {
//         id: faker.string.uuid(),
//         name: faker.internet.userName(),
//         imageUrl: faker.image.avatar(),
//         gifUrl: faker.image.avatarGitHub(),
//         baseExperience: faker.datatype.number({ min: 1, max: 10 }),
//         height: faker.number.int(),
//         weight: faker.number.int(),
//         abilities: faker.helpers.array(faker.lorem.words(), 3),  // Use `helpers.array`
//     };
// }


// app.get('/users', (request, response) => {

//     const users = []
//     for (let i = 0; i < 10; i++) {
//         const user = createRandomPokemon();
//         users.push(user);
//     }
//     response.send(users)
// })

app.use('/api', jsonServer.router("db.json"));
console.log(app)


app.get("/pokemon", (req, res) => {
    fetch("http://localhost:3000/api").then(
        result => res.send(result)
    ).catch(err => console.err(err))

    res.send(null)
})


app.listen(3000, () => {
    console.log("Express server listening..")
})