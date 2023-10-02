const express = require('express')
const cors = require('cors')
require('dotenv').config({ path: './../.env' })
const sellerRoutes = require('./routes/seller')
require('./db/connection')
const User = require('./models/Users')


const PORT = process.env.PORT


const app = express();

app.use(cors())
app.use(express.json())

app.post('/api/register/user', async (req, res) => {
    const user = new User(req.body)
    const result = await user.save();
    res.send(result)
})

app.use(express.json());

// app.use(sellerRoutes)

app.get('/', (req, res) => {
    res.send('Its working')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})