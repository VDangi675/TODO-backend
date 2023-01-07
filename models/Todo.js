const express = require("express")
const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema;


const todo =  new Schema({
   Activity:{type:String},
   Status:{type:String}
})

const Todo = mongoose.model("data",todo)

module.exports =Todo