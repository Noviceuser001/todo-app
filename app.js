const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

//environment variable
dotenv.config()

process.env.Name

// init app
const app = express();

connectMongodb();



// view engine 
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute);

module.exports = app;