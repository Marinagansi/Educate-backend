
const Uni=require('../models/Universities')

const getAllUni=(req,res, next)=>{
    Uni.find()
    .then((uni)=>{
        res.status(200).json({
            success: true,
            message: "List of university",
            data: uni})
    }).catch( (err) => {
        res.status(500).json({
            success: false,
            message: err,
        });
    });
}
const putUni=(req, res)=>{
    res.status(501).json({"reply":"put request not supported"})
    }

const getUnibyId=(req, res)=>{
const id=req.params.id
Uni.findById(id)
.then((uni)=>{
    res.status(200).json({
        success: true,
        message: "List of university",
        data: uni})})
}


module.exports={
getAllUni,
putUni,
getUnibyId
}