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