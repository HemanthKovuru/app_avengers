const express = require("express");
const cors = require("cors");
const app = express();

const bookRouter = require("./routes/bookRoute");
const userRouter = require("./routes/userRoute");

// 1.] body parser
app.use(express.json());

// 2.] cors
app.use(cors());

// 2.] routes
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
