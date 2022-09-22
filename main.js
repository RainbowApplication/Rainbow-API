require("dotenv").config();
const express = require('express');
const app = express();
const  bodyParser = require('body-parser');
const helmet = require('helmet');


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());


// Routes
app.post("/", (req, res) => {
    res.send("lol");
});


// Server
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
})