const express = require("express");
const cors = require("cors");
const databaseConnection = require("./config/database");
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const authValidator = require("./middlewares/authValidator.middleware");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

//DB Connection
databaseConnection();

app.get("/", (req, res) => {
  res.send("Welcome to Fit-connect Api!");
});

app.use("/users", userRoute);
app.use("/posts", authValidator, postRoute);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
