const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

// define cors oprions (origin)
const corsOptions = { origin: process.env.SERVER_URL };

// app.use(cors(corsOptions));
app.use(cors());

// If you are using Express 4.16+ you don't have to import body-parser anymore.
// You can do it just like this:

// use requests parser of type content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());

// /*
const db = require("./models");

db.sequelize.sync();

// go for simple route
// app.get("/", (req, res) => res.json({ message: "this is simple app" }));

// Access to fetch at from origin 'http://localhost:3000' has been blocked by CORS policy
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

require("./routes/student.route")(app);

// set port, listen to requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
// */
