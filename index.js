const mongoose = require("mongoose");
const express = require("express")
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/list").then(()=>console.log("Connected to db"))

if(process.env.NODE_ENV !=="production"){
    require("dotenv").config({path:"config.env"})
}

app.use(express.json());
const user = require("./routers/User")
const todo = require("./routers/Todo")

app.use(user)
app.use(todo)



app.listen(8081,()=>console.log("connected to Sucessfully"))