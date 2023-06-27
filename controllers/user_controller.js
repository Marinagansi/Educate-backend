const User=require('../models/User')

const registeruser=((req,res,next)=>{
    User.findOne({name:req.body.name})
        .then(user=>{
    user=new User({
        name:req.body.name
    })
    user.save().then(user=>{
        res.status(201).json({
            status:'User',
            
        })})
    
    })
})
module.exports={
    registeruser
}