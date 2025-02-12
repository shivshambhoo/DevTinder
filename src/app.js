const express=require('express');
const dotenv=require('dotenv');
const process=require('process');

const app=express();

const port=process.env.WEBSITE_PORT||8000;

app.use((req,res)=>{
    res.send('Hello from Express!')
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})