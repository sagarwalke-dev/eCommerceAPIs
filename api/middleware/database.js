const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const autoIncrementFactory = require("mongoose-sequence");
dotenv.config({
  path: path.join(__dirname, "../../config.env"),
});

//get config from .env
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const name = process.env.DATABASE_NAME;
const driver = process.env.DATABASE_DRIVER;

//provide connection url
mongoose.connect(`${driver}://${host}:${port}/${name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
});

//get connection object
let conn = mongoose.connection;

//config Auto increment
const autoIncrement = autoIncrementFactory(conn);
//check connection status
conn.on("open", () => {
  console.log("Database connected successfully");
});

//notify if connection failed
conn.on("error", (err) => {
  console.log(`Failed to connect ${name} database : ${err}`);
});

module.exports = { autoIncrement };
