const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    slug:{
        type:String,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
        required:true,
        max:1,
        min:0
    },
    availableQty:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
},{ timestamps: true })

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product