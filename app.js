require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const path = require('path')
port =3000
const user_routes=require('./routes/User_routes')
const uni_routes=require('./routes/Universities_routes')
const scholar_routes=require('./routes/Scholar_routes')
const college_routes=require('./routes/College_routes')
const app = express()
app.use(cors())

//mongo db
// const DB_URI=(process.env.NODE_ENV==='test')
//     ?process.env.TEST_DB_URI 
//     :process.env.DB_URI

// console.log(DB_URI)


// mongoose.connect(DB_URI)
//     .then(()=>{
//         console.log('connected to MongoDB server')
//     }).catch((err)=>console.log(err))


mongoose.connect('mongodb://127.0.0.1:27017/educate')
    .then(() => {
        console.log('connected to mongodb server')
        app.listen(port, () => {
            console.log(`App is running on port: ${port}` )
        })
    }).catch((err) => console.log(err))

// application level middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

app.use(
    "/images",
    express.static(path.join(__dirname, "/images"))
);

// starts with(^) / or ends with($) / or is index or index.html then 
// app.get('^/$|index(.html)?', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'))
// })

//express defined middleware
app.use(express.json())


//3 Router level middleware
app.use('/users',user_routes)
app.use('/university',uni_routes)
app.use('/scholarship',scholar_routes)
app.use('/college',college_routes)

// error handling middleware
// when there is value in err parameter then it gets executed

app.use((err, req, res, next) => {
    console.log(err.stack)  
    if (res.statusCode == 200) res.status(500)
    res.json({ "err": err.message })
})

module.exports = app