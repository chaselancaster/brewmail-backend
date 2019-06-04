const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");

require("dotenv").config();

require("./db/db");

// const apiRouter = require("./routes/api");
const userRouter = require("./routes/users");
