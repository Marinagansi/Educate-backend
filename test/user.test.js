const supertest=require('supertest')
const app=require('../app')
const api=supertest(app)
const mongoose=require('mongoose')
const User=require('../models/user')
const user={
    username:'bibhu5',
    password:'sapkota6'
}
beforeAll( async()=>{
    await User.deleteMany({})
})
test('user registration', async()=>{
     await api.post('/users/register')
    .send({name:'Marina',password:'123',email:'m@gmail.com'})
    .expect(201)
   
    
})
afterAll(async()=>{
    await mongoose.connection.close()
})

test('user login sucess', async()=>{

   await api.post('/users/login')
    .send(user)
    .expect(200)
    .expect(res=>{
            expect(res.body.message).toContain('login successful')
        })
    
})
test('get all user',async ()=>{

    await api.get('/users')
   
    .expect(200)
    .expect(res=>{
            expect(res.body.message).toContain('List of users')
        })
    
})