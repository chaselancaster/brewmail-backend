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
const apiRouter = require("./routes/api");
const userRouter = require("./routes/users");
const beerRouter = require("./routes/beers");
const tradeRouter = require("./routes/trades");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "helloasdfdasf",
    resave: false,
    saveUninitialized: false
  })
);
app.use(cors());

app.use("/users", userRouter);
app.use("/api", apiRouter);
app.use("/beer", beerRouter);
app.use("/trade", tradeRouter);

// Catching error
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, err => {
  console.log(err || "App is listening on port, ", PORT);
});

module.exports = app;
