const http=require('http');
const app=require('./app');
var dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const server=http.createServer(app);

server.listen(process.env.PORT || 3000);