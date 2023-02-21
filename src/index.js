const express=require('express')
const mongoose= require('mongoose')
const route=require('./routes/route')
const app=express()

mongoose.set('strictQuery', true);
app.use(express.json())

mongoose.connect("mongodb+srv://shivamsinghh_684:hFY7Ym3BsbQi0JuT@cluster0.broqahz.mongodb.net/shoppinglist",
{useNewUrlParser:true})
.then(()=>console.log("MongoDb is connected"))
.catch((err)=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 4000, function(){
    console.log("Express is running on " + (process.env.PORT || 4000))
})