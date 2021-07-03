
const express = require("express");
const restaurants = require("./routers/restaurants");
const mongoDb = require("./mongoDB/mongoDb");

const app = express();

mongoDb.connect(app)

app.use("/restaurants", restaurants)