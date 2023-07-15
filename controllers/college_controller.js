
const college=require('../models/College')

const getAllcollege=(req,res, next)=>{
    college.find()
    .then((college)=>{
        res.status(200).json({
            success: true,
            message: "List of college",
            data: college})
    }).catch( (err) => {
        res.status(500).json({
            success: false,
            message: err,
        });
    });
}
const putcollege=(req, res)=>{
    res.status(501).json({"reply":"put request not supported"})
    }

const getcollegebyId=(req, res)=>{
const id=req.params.id
college.findById(id)
.then((college)=>{
    res.status(200).json({
        success: true,
        message: "List of collegeversity",
        data: college})})
}


module.exports={
getAllcollege,
putcollege,
getcollegebyId
}