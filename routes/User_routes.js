const express=require('express')
const userController=require('../controllers/user_controller')
const router=express.Router()

router.route('/register')
    .post(userController.registeruser)

router.route('/login')
.post(userController.login)

router.route('/')
.get(userController.getAlluser)

module.exports=router