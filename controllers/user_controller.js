const User=require('../models/User')
const bcrypt=require('bcryptjs')
const registeruser=((req,res,next)=>{
    User.findOne({name:req.body.name})
        .then(user=>{
            if(user!=null){
                let err=new Error(`User ${req.body.username} already exists.`)
                res.status (400)
                return next(err)
            }
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err) return next(err)
            
    user=new User({
        name:req.body.name,
        email:req.body.email,
        password:hash
    })
    user.save().then(user=>{
        res.status(201).json({
            status:'User created successfully',
            data:user
            
        })
    }).catch(next)
    
    })
})})

const login=(req, res,next)=>{
    User.findOne({name:req.body.name})
    .then(user=>{
        if(user==null){
            let err=new Error(`User ${req.body.name} does not exist`)
            res.status(400)
            return next(err)
        }
        bcrypt.compare(req.body.password,user.password,(err,status)=>{
            if(!status){
                let err=new Error(`Password is incorrect`)
                res.status(400)
                return next(err)
            }
            res.status(200).json({
                status:'Login successful',
                data:user
            })
        })
    })
}


module.exports={
    registeruser,
    login
}