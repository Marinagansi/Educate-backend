const express=require('express')
const collegeController=require('../controllers/college_controller')
const router=express.Router()
const upload=require('../middleware/upload')
const College=require('../models/College')

router.route('/')
.get(collegeController.getAllcollege)
.post(upload.single('college'),(req,res,next)=>{
   
    let college={
        ...req.body,
        image:req.file.filename,
        
    }
    const file=req.file;
    if(file){
        const filename=req.file.filename;
        college.image='/images/uni_image/'+filename;
    }


    College.create(college)
    .then(createdcollege=>{
        res.status(201).json(createdcollege)
    }).catch(next)
})

.put(collegeController.putcollege)

router.route('/:id')
.get(collegeController.getcollegebyId)
module.exports=router