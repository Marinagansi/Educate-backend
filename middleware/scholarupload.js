const multer=require('multer')
const path=require('path')
const storage= multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null, './letter/scholarletter')
    },
    filename: (req, file, cb)=>{
       let ext= path.extname(file.originalname)
       cb(null, `${file.fieldname}-${Date.now()}${ext}`)
        
    }
})

const letterFileFilter=(req, file, cb)=>{
    if(!file.originalname.match(/\.(pdf)$/)){
        return cb(new Error('File formar not spported'),false)
    }
    cb(null,true)
}

const uploadscholar=multer({
    storage:storage,
fileFilter:letterFileFilter,
limits:{fileSize:2* 1024* 1024}
})

module.exports=uploadscholar