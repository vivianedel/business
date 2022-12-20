const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const moviesRoutes = require("./routes/moviesRoutes");
const models = require("./models");

const app = express();
const port = 3030;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/user", userRoutes);
app.use("/v1/movies", moviesRoutes);

app.listen(port, () => {
  console.log("Server started on port: " + port);
});

app.use(function (req, res, next) {
  res.status(404);

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

const connect = async () => {
  try {
    await models.sequelize.authenticate();
    console.log("Conexão estabelecida com o sequelize");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connect();
