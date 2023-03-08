const mongoose = require('mongoose');

const ConnectDb = async()=>{
    mongoose.set('strictQuery',true)
    mongoose.connect("mongodb://127.0.0.1:27017/MERNStack").then(()=>   {console.log("connection created successfully");}).catch((err)=>{console.log(err);})
}
module.exports = ConnectDb