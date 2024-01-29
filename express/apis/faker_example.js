import {faker, fakerEN_IN} from "@faker-js/faker";
import Express from "express";
import lodash from "lodash";

const app = Express();
const _ = lodash;

app.get("/totalusers", (request, response) => {
    response.send(_.times(5, () => {
        return {
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        }
    }));
});

app.get("/users/:count", (request, response) => {
    response.send(_.times(request.params.count, () => {
        const location = fakerEN_IN.location;
        return {
            userId: fakerEN_IN.string.uuid(),
            username: fakerEN_IN.internet.userName(),
            email: fakerEN_IN.internet.email(),
            avatar: fakerEN_IN.image.avatar(),
            password: fakerEN_IN.internet.password(),
            city: location.city(),
            state: location.state(),
            country: fakerEN_IN.location.country()
        }
    }));
});

app.get("/users", (request, response) => {
    const count = request.query.count;
    if(isNaN(parseInt(count))) {
        response.send("Invalid value of Count!")
    }
    response.send(_.times(count, () => {
        const location = fakerEN_IN.location;
        return {
            userId: fakerEN_IN.string.uuid(),
            username: fakerEN_IN.internet.userName(),
            email: fakerEN_IN.internet.email(),
            avatar: fakerEN_IN.image.avatar(),
            password: fakerEN_IN.internet.password(),
            city: location.city(),
            state: location.state(),
            country: location.country()
        }
    }));
});

app.listen(3000, () => {
    console.log("Server is running on PORT: ", 3000)
});
