const userModel= require('../model/userSchema')

const userCreate=async function(req,res){
    let data=req.body

    if(!Object.keys(data).length) return res.status(400).send({status:false,message:"All fields are mandatory"})

    let {name,email,password}=data

    if(!name) return res.status(400).send({status:false,message:"name is required"})
    if(!email) return res.status(400).send({status:false,message:"email is required"})
    if(!password) return res.status(400).send({status:false,message:"password is required"})

    let userDetail=await userModel.create(data)
    return res.status(200).send({status:true,message:"Success",userDetail:userDetail})

}



module.exports={userCreate}