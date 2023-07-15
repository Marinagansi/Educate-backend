const mongoose = require('mongoose')

const scholarSchema=mongoose.Schema({
    name:{
        type:String,
      
        unique:true
    },
    email:{
        type:String,
      
    },
    birthday:{
        type:String,
    
       
    },
    education:{
        type:String,
        
        trim:true 
    },
    letter:{
        type:String,
        
        trim:true 
    },
   

},{timestamps:true})
module.exports = mongoose.model('Scholar',scholarSchema)

