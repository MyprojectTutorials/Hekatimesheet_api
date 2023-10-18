const express = require('express');
const mongoose = require('mongoose');
const body = require('body-parser');
const app = express();
const router = require('./routes/userRoutes')
const moduleMod = require('./models/userModels')
mongoose.connect('mongodb://localhost:27017/Heka_timesheet')
.then(()=>{
    console.log('Database is connected...!')
})
.catch(error=>{
    console.log(error)
})
app.use(body.json())
app.use('/',router)
app.use('/getAllData',router)
app.use('/addData',router)
app.use('/update/:id',router)
app.use('/delete/:id',router)
app.listen(4200,()=>{
    console.log("server is running.....!")
})