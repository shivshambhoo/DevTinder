const mongoose= require('mongoose');
const process = require('process');
const dbConnect=async()=>{
    try{
        const res=  await mongoose.connect(process.env.MONGODBURI)
        console.log(`Database connected successfully to ${res.connection.host}`);
    }catch(err){
        console.error('Error connecting to MongoDB',err)
        process.exit(1)
    }
}
module.exports=dbConnect;