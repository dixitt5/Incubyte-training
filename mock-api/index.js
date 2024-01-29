import {faker } from '@faker-js/faker'
import Express  from 'express';
import lodash from 'lodash'

const app = Express();
const _ = lodash

app.get('/users', (req, res) => {
    res.send( _.times(5 , () => {
        return {
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
          }
    }))
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params
    res.send( _.times(id , () => {
        return {
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
          }
    }))
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});