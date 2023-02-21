const mongoose = require('mongoose')

const vegetableSchema=new mongoose.Schema({
    name:{type:String},
    unit:{type:String},
    price:{type:Number},
    weight:{type:String},
    category:{type:String,enum:["Vegetable","Fruit"]}
},{timestamps:true})

module.exports=mongoose.model("Vagetable",vegetableSchema)