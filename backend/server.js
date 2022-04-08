require("dotenv").config();

const express = require("express");
const server = express();
const cors = require("cors");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");

const authRoute = require("./routes/auth");
const utilsRoute = require("./routes/utils");

server.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const store = new MongoDBSession({
  uri: process.env.MONGO_URI,
  collection: "mySession",
});

store.on("error", function (error) {
  console.log(error);
});

server.use(
  session({
    secret: "key that will sign cooie",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

server.use("/api/v1", authRoute);
server.use("/api/v1", utilsRoute);

server.get("/", (req, res) => {
  res.status(200).send("this is a message from backend");
});

const start = () => {
  server.listen(process.env.PORT, () => {
    connectDB.connectDB();
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
};

start();
