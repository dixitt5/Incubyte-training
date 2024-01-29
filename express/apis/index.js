// create a new route
import express from 'express'
import jsonServer from "json-server";
import axios from "axios";
import cors from "cors";

const app = express()
app.use(cors());
app.use('/api', jsonServer.router('db.json'));
app.get("/v2/pokemon", (req, res) => {
    const limit = req.query.limit;
    axios.get(`http://localhost:3000/api/pokemons?_limit=${limit}`).then((data) => {
        console.log(data.data)
        res.send(data.data)
    })

})

app.listen(3000, () => {
    console.log("Server is listening at 3000")
})
