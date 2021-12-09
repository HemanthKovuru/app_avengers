const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv").config();

const db = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

// 1.] databse connection
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected successfully..!");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error connecting database");
  });

// 2.] server connection
const port = process.env.PORT || 9800;
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
