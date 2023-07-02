const express=require('express')
const uniController=require('../controllers/uni_controller')
const router=express.Router()
const upload=require('../middleware/upload')
const Uni=require('../models/Universities')

router.route('/')
.get(uniController.getAllUni)
.post(upload.single('uni'),(req,res,next)=>{
   
    let uni={
        ...req.body,
        image:req.file.filename,
        
    }
    const file=req.file;
    if(file){
        const filename=req.file.filename;
        uni.image='/images/uni_image/'+filename;
    }


    Uni.create(uni)
    .then(uni=>{
        res.status(201).json(uni)
    }).catch(next)
})

.put(uniController.putUni)

router.route('/:id')
.get(uniController.getUnibyId)
module.exports=router