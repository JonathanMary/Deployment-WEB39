console.log("It's ON!")
require('dotenv').config();
const express = require('express');

const server = express();

server.use(express.json());

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') { //on Heroku, an env variable is called "NODE_ENV" -> "production"
    const cors = require('cors');
    server.use(cors());
}

server.use('*', (req, res) => {
    res.send('<h1>It works!</h1>');
})

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})