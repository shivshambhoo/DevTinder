const express=require('express');
const dotenv = require("dotenv");
const process=require('process');
const dbConnect=require("./config/database")

dotenv.config();

// import routes
const userRoute=require("./routes/userRoutes");

const app=express();
app.use(express.json());
const port=process.env.WEBSITE_PORT||8000;

dbConnect();

// routes 
app.use('/api/v1',userRoute);

app.use((req,res)=>{
    res.send('Hello from Express!')
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})