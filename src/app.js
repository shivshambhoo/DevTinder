const express=require('express');
const dotenv = require("dotenv");
const process=require('process');
const dbConnect=require("./config/database")

const app=express();

const port=process.env.WEBSITE_PORT||8000;

app.use((req,res)=>{
    res.send('Hello from Express!')
})

dotenv.config();
dbConnect();
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})