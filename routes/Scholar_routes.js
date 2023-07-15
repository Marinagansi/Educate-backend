const express=require('express')
const router=express.Router()
const upload=require('../middleware/scholarupload')
const Scholar=require('../models/Scholarship')
const scholarController=require('../controllers/scholar_controller')

router.route('/')
.post(scholarController.addScholar)
// .post(upload.single('scholar'),(req,res,next)=>{
   
//     let scholar={
//         ...req.body,
//         letter:req.file.filename,

        
//     }
//     const file=req.file;
//     if(file){
//         const filename=req.file.filename;
//         scholar.letter='/letter/scholarletter'+filename;
//     }


//     Scholar.create(scholar)
//     .then(createdScholar=>{
//         res.status(201).json(createdScholar);
//     }).catch(next)
// })

module.exports=router