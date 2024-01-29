import {faker} from '@faker-js/faker'
import Express from 'express';
import lodash from 'lodash'

const app = Express();
const _ = lodash

app.get('/users', (req, res) => {
    const query = req.query
    res.send(_.times(query['id'], () => {
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
