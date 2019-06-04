const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const PORT = process.env.PORT;

require("./db/db");

// Routes
// const apiRouter = require("./routes/api");
// const userRouter = require("./routes/users");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "hello",
    resave: false,
    saveUninitialized: false
  })
);

// app.use("/users", userRouter);

// Catching error
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, err => {
  console.log(err || "App is listening on port, ", PORT);
});

module.exports = app;
