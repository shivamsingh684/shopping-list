const vegetableModel=require('../model/vegetableSchema')

const createProduce= async function(req,res){
    let data = req.body

    if(!Object.keys(data).length) return res.status(400).send({status:false,message:"All fields are mandatory"})

    let produceDetails= await vegetableModel.create(data)
    return res.status(200).send({status:true,message:"Success",data:produceDetails})
}

const getProduce=async function(req,res){
    let data=req.query
    if(!Object.keys(data).length) return res.status(400).send({status:false,message:"Please provide category"})

   let {category}=data

   if(category=="Fruit"){
    let list=await vegetableModel.find({category})
    return res.status(200).send({status:true, list:list})
   }else{
    let list=await vegetableModel.find({category})
    return res.status(200).send({status:true, list:list})
   }
}

module.exports={createProduce,getProduce}