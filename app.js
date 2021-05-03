const express = require("express");
const app = express();
const path=require('path');
const userRouter = require("./api/routes/userRoute");
const productRouter = require("./api/routes/productRoute");
const orderRouter = require("./api/routes/orderRoute");
const bodyParser=require('body-parser');

//configure body parser
app.use(bodyParser.urlencoded({
    extended:true
}));

//use static middleware
app.use(express.static(path.join(__dirname,'./public')));
//use router
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

//export app
module.exports = app;
