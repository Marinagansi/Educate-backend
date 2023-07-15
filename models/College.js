const mongoose = require('mongoose')

const collegeSchema=mongoose.Schema({
    overview:{
        type:String,
        reuqired:true,
    },
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    types:{
        type:String,
        required:true,
    },
    fees:{
        type:String,
        required:true,
    },
    major:{
        type:String,
        required:true,
    },
    admission:{
        type:String,
        requied:true
    },
    image:{
        type:String,   
        required:true,
    },
    link:{
        type:String,
        required:true,
    }

})
module.exports = mongoose.model('College',collegeSchema)