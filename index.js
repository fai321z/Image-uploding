const express = require("express");
const coll = require("./model/mongo");
const cors = require('cors')
const Path = require('path');
const fs= require('fs')
const multer = require("multer");

const port = process.env.PORT||3000;

const app = express()
app.set("view engine","ejs")

app.use(express.urlencoded({ extended:true}));
app.use(cors())
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage
})


app.post("/api/create",upload.single('file'),(req,res)=>{
    coll.create({image:req.file.filename})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))

})
app.listen(port,()=>{
    console.log("runing..");
})
