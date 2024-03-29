import { fakerEN_IN } from '@faker-js/faker'
import Express from 'express';
import cors from 'cors';
import lodash from 'lodash'
import axios from 'axios';

const app = Express();
app.use(cors())
const _ = lodash

app.get('/users', (req, res) => {
    const {count} = req.query
    res.send( _.times(count , () => {
        return {
            userId: fakerEN_IN.string.uuid(),
            username: fakerEN_IN.internet.userName(),
            email: fakerEN_IN.internet.email(),
            avatar: fakerEN_IN.image.avatar(),
            password: fakerEN_IN.internet.password(),
            birthdate: fakerEN_IN.date.birthdate(),
            registeredAt: fakerEN_IN.date.past(),
            state : fakerEN_IN.location.state(),
          }
    }))
})

app.get("/pokemons/results", async (req, res) => {
  const result = await axios.get("http://localhost:3000/results");
  console.log(result.data)
  res.json(result.data);
})

app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
});