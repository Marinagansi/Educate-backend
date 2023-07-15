const express=require('express')
const router=express.Router()
const Scholar=require('../models/Scholarship')

const addScholar=(req,res,next)=>{
    Scholar.create(req.body)
    .then((createdScholar)=>{
        res.status(201).json(createdScholar)
    }).catch(next)
}

module.exports={addScholar}