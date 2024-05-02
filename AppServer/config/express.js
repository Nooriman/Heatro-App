const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const indexRouter = require("../routes/index.js");
const userRouter = require("../routes/userRoutes.js");

app.use("/", indexRouter);
app.use("/users", userRouter);

module.exports = app;
