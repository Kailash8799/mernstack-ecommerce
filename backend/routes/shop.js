const express = require('express');
const router = express.Router()
const Product = require('../models/Product');

router.post("/product",async(req,res)=>{
  if(req.method === "POST"){
    let data = await Product.findOne({slug:req.body.slug})
    let variants = await Product.find({ title: data.title, category: data.category });
    let colorsizeSlug = {};
    for (let item of variants) {
      if (Object.keys(colorsizeSlug).includes(item.color)) {
        colorsizeSlug[item.color][item.size] = { slug: item.slug };
      }
      else {
        colorsizeSlug[item.color] = {}
        colorsizeSlug[item.color][item.size] = { slug: item.slug }
      }
    }
    console.log(colorsizeSlug);
    res.status(200).json({data:data,colorsizeSlug:colorsizeSlug})
  }
  else{
    res.status(200).json({data:{},colorsizeSlug:{}})
  }
})

router.get("/allproduct",async(req,res)=>{
  let data = await Product.find()
  res.status(200).json({data:data})
})
module.exports = router