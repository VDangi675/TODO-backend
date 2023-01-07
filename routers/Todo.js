
const express  = require("express")
const mongoose = require("mongoose")
const app = express();
const {isAuthenticated} = require("../auth")
const bodyparser = require("body-parser")
const Todo = require("../models/Todo")
const router = express.Router();



router.get("/",(req,res)=>{
    res.send("ok google")
})

router.get("/getlist",async(req,res)=>{
   try{
    const data = await Todo.find();
    res.json({ data,message:"data is added"})

   }catch(e){
    res.json({
    message:e.message
        
    })
   }
})
router.post("/list",isAuthenticated, async(req,res)=>{
    try{

 
   let  list = await Todo.create(req.body)

    res.json({list,message:"list item"})


    }catch(e){
        res.json({message:e.mesage})
    }
})






module.exports = router