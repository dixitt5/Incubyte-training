import express from "express";
import {faker} from "@faker-js/faker";
import lodash from "lodash";

const app = express()
const _ = lodash

export function createNewUser() {
    return {
        id: faker.string.uuid(),
        name: faker.internet.displayName(),
        address: faker.getMetadata().streetAddress,
        phone: faker.phone.number(),
        avatar: faker.image.avatar()
    }
}

app.get("/users", (req, res) => {
    res.send(_.times(5, createNewUser))
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

