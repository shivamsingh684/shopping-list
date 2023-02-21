const express= require('express')
const router=express.Router()
const {userCreate}=require('../controller/userController')
const {createProduce,getProduce}=require('../controller/vegetableController')

router.post('/createuser',userCreate)
router.post('/createproduce',createProduce)
router.get('/getproduce',getProduce)


router.all('/*',function(req,res){
    return res.status(400).send({status:false,message:"Invalid http Request"})
})


module.exports=router