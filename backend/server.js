require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose') //artık mongoose un metodlarını db ye bağlanmak için kullanabiliriz.
const workoutRoutes =  require('./routes/workouts')

//express app
const app = express()

//global middleware, her request te çağrılır
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/',(req, res)=> {
//     res.json({mssg:'welcome to the app'}) 
// })

app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('connected to DB & listening on port 4000...')
})


}).catch((error)=>{
    console.log(error)
})


